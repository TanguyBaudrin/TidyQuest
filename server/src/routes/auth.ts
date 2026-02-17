import { Router, Response } from 'express';
import bcrypt from 'bcryptjs';
import db from '../database';
import { AuthRequest, authMiddleware, generateToken } from '../middleware/auth';

const router = Router();

router.post('/register', (req: AuthRequest, res: Response) => {
  const { username, password, displayName, avatarColor, language } = req.body;

  if (!username || !password || !displayName) {
    return res.status(400).json({ error: 'username, password, and displayName are required' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(username);
  if (existing) {
    return res.status(409).json({ error: 'Username already taken' });
  }

  const userCount = db.prepare('SELECT COUNT(*) as count FROM users').get() as { count: number };
  const role = userCount.count === 0 ? 'admin' : 'member';

  const passwordHash = bcrypt.hashSync(password, 10);
  const result = db.prepare(
    'INSERT INTO users (username, displayName, passwordHash, role, avatarColor, language) VALUES (?, ?, ?, ?, ?, ?)'
  ).run(username, displayName, passwordHash, role, avatarColor || '#F97316', language || 'en');

  const token = generateToken(result.lastInsertRowid as number);
  const user = db.prepare('SELECT id, username, displayName, role, avatarColor, avatarType, avatarPreset, avatarPhotoUrl, coins, currentStreak, goalCoins, goalStartAt, goalEndAt, language FROM users WHERE id = ?')
    .get(result.lastInsertRowid);

  res.status(201).json({ token, user });
});

router.post('/login', (req: AuthRequest, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'username and password are required' });
  }

  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as any;
  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = generateToken(user.id);
  const { passwordHash, ...safeUser } = user;
  res.json({ token, user: safeUser });
});

router.get('/me', authMiddleware, (req: AuthRequest, res: Response) => {
  const user = db.prepare(
    'SELECT id, username, displayName, role, avatarColor, avatarType, avatarPreset, avatarPhotoUrl, coins, currentStreak, goalCoins, goalStartAt, goalEndAt, lastActiveDate, isVacationMode, language, createdAt FROM users WHERE id = ?'
  ).get(req.userId) as any;

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

export default router;

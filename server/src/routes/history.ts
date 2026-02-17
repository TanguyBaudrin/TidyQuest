import { Router, Response } from 'express';
import db from '../database';
import { AuthRequest, authMiddleware } from '../middleware/auth';

const router = Router();
router.use(authMiddleware);

router.get('/', (req: AuthRequest, res: Response) => {
  const limit = Math.min(parseInt(req.query.limit as string) || 20, 100);
  const offset = parseInt(req.query.offset as string) || 0;

  const history = db.prepare(`
    SELECT tc.id, tc.completedAt, tc.coinsEarned,
           t.name as taskName, t.translationKey, t.roomId,
           r.name as roomName, r.roomType,
           u.id as userId, u.displayName, u.avatarColor, u.avatarType, u.avatarPreset, u.avatarPhotoUrl
    FROM task_completions tc
    JOIN tasks t ON tc.taskId = t.id
    JOIN rooms r ON t.roomId = r.id
    JOIN users u ON tc.userId = u.id
    ORDER BY tc.completedAt DESC
    LIMIT ? OFFSET ?
  `).all(limit, offset);

  const total = db.prepare('SELECT COUNT(*) as count FROM task_completions').get() as any;

  res.json({ history, total: total.count, limit, offset });
});

export default router;

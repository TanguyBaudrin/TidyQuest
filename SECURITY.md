# Security Policy

## 🔒 Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

---

## 🛡️ Security Best Practices

### Before Deploying to Production

#### 1. **Set a Strong JWT Secret**

**⚠️ CRITICAL**: The JWT secret is used to sign authentication tokens. A weak or default secret compromises all user sessions.

**How to set it:**
```bash
# Generate a secure random secret
openssl rand -base64 32

# Add to .env file
echo "JWT_SECRET=<your-generated-secret>" > .env
```

**In docker-compose.yml:**
```yaml
environment:
  - JWT_SECRET=${JWT_SECRET}
```

**Never commit your `.env` file to version control.**

---

#### 2. **Use HTTPS with a Reverse Proxy**

TidyQuest should **never** be exposed directly to the internet over HTTP.

**Recommended setup:**
- Use Caddy, Nginx, or Traefik as a reverse proxy
- Obtain a valid TLS certificate (Let's Encrypt)
- Forward port 443 → TidyQuest container port 3000

**Example with Caddy:**
```
tidyquest.yourdomain.com {
    reverse_proxy localhost:3020
}
```

---

#### 3. **Telegram Bot Token Protection**

**⚠️ Known Risk**: Telegram bot tokens are stored **unencrypted** in the SQLite database.

**Mitigation:**
- Restrict file system access to the `./data/` directory
- Use proper file permissions: `chmod 600 data/tidyquest.db`
- Never expose the database file publicly
- Regularly back up and encrypt database backups

**Future improvement (planned for v0.2)**: Encrypt sensitive settings using AES-256.

---

#### 4. **Database Backups**

**Location**: `./data/tidyquest.db`

**Backup strategy:**
```bash
# Manual backup
cp data/tidyquest.db backups/tidyquest-$(date +%Y%m%d).db

# Automated daily backup (crontab)
0 3 * * * cd /path/to/tidyquest && cp data/tidyquest.db backups/tidyquest-$(date +\%Y\%m\%d).db
```

**Encrypt backups before storing offsite:**
```bash
gpg -c backups/tidyquest-20260217.db
```

---

#### 5. **User Avatar Uploads**

**Current validation:**
- MIME type check: only `image/*` allowed
- File size limit: 2MB

**Additional hardening (recommended):**
- Serve avatars from a separate domain/subdomain
- Implement Content-Security-Policy headers
- Consider using image processing library to re-encode uploads

---

#### 6. **Network Exposure**

**Default setup (Docker Compose):**
- Port `3020:3000` is exposed on all interfaces (`0.0.0.0`)

**For local-only access**, bind to localhost:
```yaml
ports:
  - "127.0.0.1:3020:3000"
```

**For VPN/LAN access**, ensure firewall rules are configured.

---

## 🚨 Reporting a Vulnerability

If you discover a security vulnerability in TidyQuest, please:

1. **Do NOT open a public GitHub issue**
2. Email the maintainer directly (see GitHub profile)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if applicable)

**Response time**: We aim to acknowledge reports within 48 hours and provide a fix within 7 days for critical issues.

---

## 📋 Security Checklist Before Going Public

- [ ] JWT_SECRET set via environment variable (not default value)
- [ ] HTTPS reverse proxy configured
- [ ] Database file permissions restricted (`chmod 600`)
- [ ] Regular backup strategy in place
- [ ] Firewall rules configured (only allow necessary ports)
- [ ] Docker image updated to latest version
- [ ] OS and dependencies up to date
- [ ] Telegram bot token kept secret (if using notifications)
- [ ] `.env` file in `.gitignore` (verified not committed)

---

## 🔐 Authentication & Session Management

- **Algorithm**: JWT (JSON Web Tokens)
- **Token expiry**: 30 days
- **Password hashing**: bcrypt (10 rounds)
- **Authorization**: Role-based (admin, member, child)

**Session invalidation**: Currently, tokens remain valid until expiry. Manual revocation is not implemented (planned for v0.2).

---

## 📚 Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Docker Security Best Practices](https://docs.docker.com/engine/security/)
- [SQLite Security Considerations](https://www.sqlite.org/security.html)

---

**Last updated**: 2026-02-17

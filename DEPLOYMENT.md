# Deployment Guide

## Architecture
- **Frontend**: Vite + React → **Vercel**
- **Backend**: Node.js/Express → **Render**

## Prerequisites
- GitHub account
- Render account (free)
- Vercel account (free)
- Gmail with 2FA enabled (for App Password)

## 1. Prepare Repository

Push the restructured monorepo to GitHub:
```bash
git add .
git commit -m "Restructure to monorepo: frontend/ + backend/"
git push origin main
```

## 2. Deploy Backend on Render

### Option A: Using render.yaml (Recommended)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **New +** → **Web Service**
3. Connect your GitHub repo
4. Render will auto-detect `render.yaml` - review settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **Create Web Service**

### Option B: Manual Setup
1. New Web Service → Connect repo
2. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Environment Variables (Render Dashboard → Environment)
| Key | Value | Notes |
|-----|-------|-------|
| `NODE_ENV` | `production` | |
| `PORT` | `10000` | Render uses 10000 |
| `EMAIL_USER` | `your-email@gmail.com` | Gmail address |
| `EMAIL_PASS` | `your-app-password` | **App Password, not regular password** |
| `FRONTEND_URL` | `https://your-app.vercel.app` | Add after Vercel deploy |

### Gmail App Password Setup
1. Enable 2FA on Google Account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Select "Mail" → Generate
4. Use the 16-character password as `EMAIL_PASS`

## 3. Deploy Frontend on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **Add New...** → **Project**
3. Import your GitHub repo
4. Vercel auto-detects Vite - verify:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variable:
   - `VITE_API_URL` = `https://your-render-backend.onrender.com`
6. Click **Deploy**

## 4. Connect Both Services

After both deployments:

1. **Copy Render backend URL** (e.g., `https://ecell-backend.onrender.com`)
2. **Vercel Dashboard** → Project → Settings → Environment Variables
   - Add/Update `VITE_API_URL` = Render URL
   - Redeploy (Vercel auto-redeploys on env change)

3. **Copy Vercel frontend URL** (e.g., `https://ecell-iitpkd.vercel.app`)
4. **Render Dashboard** → Service → Environment
   - Update `FRONTEND_URL` = Vercel URL
   - Manual redeploy required (Settings → Manual Deploy → Deploy)

## 5. Verify

- Frontend loads at Vercel URL
- Form submission works (check Render logs)
- CORS errors? Check `FRONTEND_URL` matches exactly (including `https://`)

## Local Development

```bash
# Terminal 1 - Frontend
cd frontend && npm run dev

# Terminal 2 - Backend
cd backend && npm run dev
```

Create `frontend/.env`:
```
VITE_API_URL=http://localhost:3000
```

Create `backend/.env`:
```
NODE_ENV=development
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=http://localhost:5173
```

## Troubleshooting

### Backend won't start
- Check Render logs for errors
- Verify `EMAIL_USER` and `EMAIL_PASS` are set correctly
- Ensure `package.json` has `"type": "module"`

### Frontend build fails
- Check Vercel build logs
- Ensure all dependencies in `frontend/package.json`
- Verify `vite.config.js` has `base: '/'`

### CORS errors
- Verify `FRONTEND_URL` in Render matches Vercel URL exactly
- Check browser console for specific origin errors

### Email not sending
- Verify Gmail App Password (not regular password)
- Check Render logs for nodemailer errors
- Ensure 2FA is enabled on Google account

## Useful Commands

```bash
# View Render logs
# Render Dashboard → Service → Logs

# View Vercel logs
# Vercel Dashboard → Project → Functions / Build Logs

# Test backend locally
curl -X POST http://localhost:3000/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Hello"}'

# Test health endpoint
curl https://your-render-backend.onrender.com/health
```
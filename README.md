# E-Cell IIT Palakkad

Official website for the Entrepreneurship Cell, IIT Palakkad.

## Structure

```
ecell-iitpkd/
├── frontend/          # React + Vite frontend (deployed on Vercel)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/           # Node.js + Express backend (deployed on Render)
│   ├── server.js
│   └── package.json
├── render.yaml        # Render deployment config
├── vercel.json        # Vercel deployment config
├── package.json       # Root monorepo scripts
└── .env.example       # Environment variables template
```

## Quick Start

### Prerequisites
- Node.js 18+
- npm

### Install Dependencies
```bash
# Install all dependencies (root + frontend + backend)
npm run install:all
```

### Development
```bash
# Run both frontend and backend concurrently
npm run dev

# Or run separately:
npm run dev:frontend  # Frontend on http://localhost:5173
npm run dev:backend   # Backend on http://localhost:3000
```

### Build
```bash
# Build frontend for production
npm run build
```

## Deployment

### Backend → Render
1. Connect GitHub repo to Render
2. Render auto-detects `render.yaml`
3. Add environment variables in Render dashboard:
   - `EMAIL_USER` - Gmail address
   - `EMAIL_PASS` - Gmail App Password
   - `FRONTEND_URL` - Your Vercel URL

### Frontend → Vercel
1. Import GitHub repo in Vercel
2. Vercel auto-detects `vercel.json`
3. Add environment variable:
   - `VITE_API_URL` - Your Render backend URL

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed steps.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_API_URL` | Backend API URL (frontend) | Yes |
| `EMAIL_USER` | Gmail address for sending emails | Yes |
| `EMAIL_PASS` | Gmail App Password | Yes |
| `FRONTEND_URL` | Frontend URL for CORS (backend) | Yes |
| `PORT` | Backend port (default: 3000) | No |

## Tech Stack

**Frontend:**
- React 19 + Vite
- React Router v7
- Tailwind CSS (via custom CSS)
- Framer Motion / Spline for animations

**Backend:**
- Node.js + Express 5
- Nodemailer for emails
- CORS enabled

## License

MIT
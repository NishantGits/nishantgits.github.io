# Production Deployment Instructions

## Repository Setup

The FlowChat documentation is now ready for production deployment to: https://github.com/NishantGits/flow-docs

## Quick Deploy Commands

```bash
# Clone and deploy
git clone https://github.com/NishantGits/flow-docs.git
cd flow-docs
npm install
npm run build
```

## Automated Deployment

The repository includes:
- **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
- **Production-ready package.json** with proper scripts and dependencies
- **Comprehensive README.md** with VM setup instructions

## Deployment Options

### Option 1: Manual VM Deployment
Follow the detailed VM setup instructions in `README.md`

### Option 2: Vercel/Netlify (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 3: GitHub Pages
```bash
# Enable GitHub Pages in repo settings
# Build and deploy
npm run build
git add build/
git commit -m "Deploy documentation"
git push origin main
```

## CI/CD Features

The GitHub Actions workflow includes:
- ✅ **Automated testing** - Linting and type checking
- ✅ **Build validation** - Production build with analysis
- ✅ **Artifact upload** - Build files preserved for 30 days
- ✅ **Deployment trigger** - Auto-deploy on main branch push
- ✅ **Deployment notifications** - Clear success/failure reporting

## Environment Configuration

Create `.env.production` for production:
```bash
NODE_ENV=production
GA_TRACKING_ID=G-522JSJVWTB
```

## Support

For deployment issues:
- 📧 **Email**: contact@flowchats.org
- 📚 **Docs**: See README.md in repository
- 🐛 **Issues**: Create GitHub issue

---

**Ready for production deployment! 🚀**

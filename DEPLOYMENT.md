# Deployment Guide for Coolify

This guide will help you deploy your React portfolio to your Ubuntu server using Coolify.

## Files Created

- `Dockerfile` - Multi-stage build configuration
- `.dockerignore` - Excludes unnecessary files from Docker build
- `nginx.conf` - Nginx configuration for React SPA routing

## Prerequisites

1. Coolify installed on your Ubuntu server
2. GitHub repository with your code
3. Domain name (optional, but recommended)

## Deployment Steps

### 1. Commit and Push Docker Files

```bash
git add Dockerfile .dockerignore nginx.conf DEPLOYMENT.md
git commit -m "Add Docker configuration for Coolify deployment"
git push origin master
```

### 2. Configure in Coolify

1. **Create New Application**
   - Go to your Coolify dashboard
   - Click "New Resource" → "Application"
   - Select "Public Repository" or "Private Repository"

2. **Repository Settings**
   - Repository URL: `https://github.com/KusalThiwanka/react-portfolio.git`
   - Branch: `master`
   - Build Pack: Select "Dockerfile"

3. **Environment Variables**

   In Coolify, add these environment variables (build-time variables):

   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   PUBLIC_URL=/
   ```

   **⚠️ Important:** Set these as **Build Arguments** in Coolify, not just environment variables.

   **Get your actual values from your local `.env` file** (not committed to GitHub for security).

4. **Port Configuration**
   - Port: `80`

5. **Domain Configuration**
   - Add your custom domain or use the Coolify-provided domain

### 3. Deploy

- Click "Deploy" button in Coolify
- Monitor the build logs
- Once complete, your site will be live!

## Build Process

The Dockerfile uses a multi-stage build:

1. **Build Stage:**
   - Uses Node 18 Alpine
   - Installs dependencies
   - Builds React app with environment variables
   - Output: optimized production build

2. **Production Stage:**
   - Uses Nginx Alpine (lightweight)
   - Copies built files
   - Serves on port 80
   - Includes health checks

## Features

✅ **Optimized Build**
- Multi-stage build reduces final image size
- Only production files in final image

✅ **React Router Support**
- Custom nginx config handles client-side routing
- All routes properly serve `index.html`

✅ **Performance**
- Gzip compression enabled
- Static asset caching (1 year)
- Optimized nginx configuration

✅ **Security Headers**
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection

✅ **Health Checks**
- Docker health check on port 80
- Nginx `/health` endpoint

## Troubleshooting

### Build Fails

**Issue:** Environment variables not passed to build
**Solution:** Ensure variables are set as **Build Arguments** in Coolify, not just runtime environment variables.

### 404 Errors on Routes

**Issue:** React Router routes return 404
**Solution:** The `nginx.conf` file should handle this automatically. Ensure it's being copied in the Dockerfile.

### Assets Not Loading

**Issue:** 3D models or images not found
**Solution:** Check `PUBLIC_URL` environment variable. For Coolify, it should be `/` or your domain.

### Build is Slow

**Issue:** Docker build takes too long
**Solution:**
- `.dockerignore` file excludes `node_modules` and other large files
- Coolify caches Docker layers for faster subsequent builds

## Testing Locally

To test the Docker build locally before deploying:

```bash
# Build the image (replace with your actual EmailJS values from .env)
docker build \
  --build-arg REACT_APP_EMAILJS_SERVICE_ID=your_service_id \
  --build-arg REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id \
  --build-arg REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key \
  --build-arg PUBLIC_URL=/ \
  -t react-portfolio .

# Run the container
docker run -p 8080:80 react-portfolio

# Open http://localhost:8080 in your browser
```

## Updating Your Deployment

When you make changes:

1. Commit and push changes to GitHub
2. In Coolify, click "Redeploy" or enable auto-deploy
3. Coolify will rebuild and redeploy automatically

## Auto-Deploy (Recommended)

Enable webhook in Coolify to automatically deploy when you push to GitHub:

1. In Coolify, go to your application settings
2. Enable "Automatic Deployment"
3. Add the webhook URL to your GitHub repository settings
4. Push to `master` branch → automatic deployment!

## Environment Variables Reference

| Variable | Description | Where to Find |
|----------|-------------|---------------|
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID | Your local `.env` file |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Your local `.env` file |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key | Your local `.env` file |
| `PUBLIC_URL` | Base URL for assets | Usually `/` for Coolify |

**⚠️ NEVER commit your `.env` file or expose credentials in public documentation!**

## Support

If you encounter issues:
- Check Coolify build logs
- Verify environment variables are set correctly
- Ensure Dockerfile is in the repository root
- Test the Docker build locally first

Happy deploying! 🚀

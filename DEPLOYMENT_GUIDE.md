# 🚀 GitHub Deployment Guide for AlumniVerse

This guide will walk you through deploying your LinkedIn-style application to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your machine
- Node.js (v16 or higher)
- npm or yarn

## 🔧 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository" (green button)
3. Fill in repository details:
   - **Repository name**: `linkedin-frontend` (or your preferred name)
   - **Description**: "LinkedIn-style Alumni Network Platform"
   - **Visibility**: Public (required for GitHub Pages)
   - **Initialize**: Don't check any boxes
4. Click "Create repository"

### 2. Update Configuration Files

#### Update `vite.config.js`
```javascript
export default defineConfig({
  base: "/your-repository-name/", // Replace with your actual repository name
  // ... rest of config
})
```

#### Update `package.json`
```json
{
  "homepage": "https://yourusername.github.io/your-repository-name",
  // ... rest of package.json
}
```

#### Update `index.html` (if needed)
Replace `yourusername` with your actual GitHub username in the meta tags.

### 3. Initialize Git and Push to GitHub

```bash
# Navigate to your project directory
cd linkedin-frontend

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: AlumniVerse LinkedIn-style platform"

# Add remote origin (replace with your repository URL)
git remote add origin https://github.com/yourusername/linkedin-frontend.git

# Push to GitHub
git push -u origin main
```

### 4. Set Up GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

### 5. Deploy with GitHub Pages

```bash
# Install gh-pages if not already installed
npm install gh-pages --save-dev

# Deploy to GitHub Pages
npm run deploy
```

### 6. Verify Deployment

1. Go to your repository settings
2. Scroll to "Pages" section
3. Your site will be available at: `https://yourusername.github.io/your-repository-name`
4. It may take a few minutes for the site to be available

## 🔧 Environment Variables Setup

### For Development
Create a `.env` file in your project root:

```env
VITE_APP_GOOGLE_KEY=your_google_oauth_client_id_here
VITE_APP_API_URL=https://your-api-domain.com/api
VITE_APP_NAME=AlumniVerse
VITE_APP_VERSION=1.0.0
VITE_NODE_ENV=development
```

### For Production
1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Add repository secrets:
   - `VITE_APP_GOOGLE_KEY`: Your Google OAuth Client ID
   - `VITE_APP_API_URL`: Your production API URL

## 🛠 Troubleshooting

### Common Issues

#### 1. 404 Error on Refresh
**Problem**: Pages show 404 when refreshed directly
**Solution**: Add a `404.html` file that redirects to `index.html`

```html
<!DOCTYPE html>
<html>
<head>
    <script>
        sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/linkedin-frontend/'">
</head>
<body></body>
</html>
```

#### 2. Assets Not Loading
**Problem**: Images and CSS not loading
**Solution**: Check the `base` path in `vite.config.js` matches your repository name

#### 3. Build Fails
**Problem**: Build process fails
**Solution**: 
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

#### 4. Google OAuth Not Working
**Problem**: Google login fails in production
**Solution**: 
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Add your production URL to authorized origins:
   - `https://yourusername.github.io`
3. Update your `.env` file with the correct Client ID

## 📱 Mobile Testing

1. Test on different devices using browser dev tools
2. Check responsive design on various screen sizes
3. Verify touch interactions work properly
4. Test the collapsible navigation on mobile

## 🔄 Continuous Deployment

### Automatic Deployment on Push
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      env:
        VITE_APP_GOOGLE_KEY: ${{ secrets.VITE_APP_GOOGLE_KEY }}
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📊 Performance Optimization

### Before Deployment
1. Run `npm run build` to check for errors
2. Test the build locally with `npm run preview`
3. Check bundle size and optimize if needed
4. Verify all images are optimized

### After Deployment
1. Test the live site thoroughly
2. Check Google PageSpeed Insights
3. Verify mobile responsiveness
4. Test all functionality

## 🔐 Security Considerations

1. **Never commit `.env` files** with real credentials
2. **Use environment variables** for sensitive data
3. **Enable HTTPS** (GitHub Pages provides this automatically)
4. **Regularly update dependencies** for security patches

## 📈 Monitoring

### Analytics Setup
Add Google Analytics to track usage:

```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking
Consider adding error tracking services like Sentry for production monitoring.

## 🎉 Success!

Once deployed, your AlumniVerse application will be live at:
`https://yourusername.github.io/your-repository-name`

### Next Steps
1. Share your live application
2. Gather user feedback
3. Monitor performance and usage
4. Plan future enhancements
5. Consider custom domain setup

## 📞 Support

If you encounter any issues during deployment:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the troubleshooting section above
3. Check the browser console for errors
4. Verify all configuration files are correct

---

**Happy Deploying! 🚀**

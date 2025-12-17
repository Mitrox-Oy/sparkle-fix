# GitHub Pages Deployment Guide

This project is configured for GitHub Pages deployment using the `/docs` folder approach.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **Branch: master** (or `main` if that's your default branch)
5. Select **Folder: /docs**
6. Click **Save**

**Important:** The `/docs` folder with `.nojekyll` has been created to prevent Jekyll from processing your Next.js static site. This is required for proper deployment.

### 2. Repository Type Detection

The deployment workflow automatically detects your repository type:

- **Project Repository** (`username/repo-name`): 
  - Site will be available at `https://username.github.io/repo-name/`
  - BasePath is automatically set to `/repo-name`
  
- **User/Organization Repository** (`username.github.io`):
  - Site will be available at `https://username.github.io/`
  - BasePath is automatically set to empty

### 3. Manual Deployment (Optional)

If you want to test the build locally:

```bash
# Build the project
npm run build:docs

# The output will be in the /out folder
# Copy it to /docs if you want to test locally
```

### 4. Automatic Deployment

The GitHub Actions workflow will automatically:
1. Build your Next.js app when you push to `master` or `main`
2. Copy the build output to the `/docs` folder
3. Commit and push the `/docs` folder
4. GitHub Pages will serve the site from `/docs`

### 5. Verify Deployment

After pushing to your repository:
1. Check the **Actions** tab in GitHub to see the deployment progress
2. Once complete, visit your GitHub Pages URL (shown in repository Settings → Pages)
3. Verify that:
   - All images load correctly
   - Navigation works
   - All routes are accessible
   - Text and content display properly

## Troubleshooting

### Images Not Loading

If images aren't loading:
1. Verify the repository name matches the basePath
2. Check that images in `/public` are being copied to `/docs` during build
3. Ensure image paths start with `/` (absolute paths)

### 404 Errors on Routes

If you get 404 errors:
1. Ensure `trailingSlash: true` is set in `next.config.ts` (already configured)
2. Verify the basePath matches your repository name
3. Check that the build completed successfully

### Build Fails

If the build fails:
1. Check the Actions tab for error messages
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility (workflow uses Node 20)

### Jekyll Processing Errors

If you see Jekyll-related errors:
1. Ensure the `/docs` folder contains a `.nojekyll` file (already created)
2. The `.nojekyll` file tells GitHub Pages to skip Jekyll processing
3. Your Next.js static site will be served directly without Jekyll

## Configuration Files

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow
- **`next.config.ts`**: Next.js configuration with static export settings
- **`package.json`**: Build scripts
- **`.gitignore`**: Configured to allow `/docs` folder

## Notes

- The `/docs` folder is automatically generated and should not be edited manually
- The workflow includes `[skip ci]` in commit messages to prevent infinite loops
- All assets (images, fonts, etc.) are automatically handled by Next.js static export
- The site is fully static - no server-side features are available

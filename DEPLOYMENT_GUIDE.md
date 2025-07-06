# 🚀 Deploy Your Blog to AWS Amplify

Your blog is ready to deploy! Here's how to get it live on brianbenwah.com:

## Quick Setup (5 minutes)

### Step 1: Go to AWS Amplify Console
1. Open: https://console.aws.amazon.com/amplify/
2. Sign in with your AWS account
3. Click **"New app"** → **"Host web app"**

### Step 2: Connect Your GitHub Repository
1. Choose **"GitHub"** as repository service
2. Click **"Continue"** to authorize AWS Amplify
3. Select repository: `CapsLockeD/brianbenwah-blog`
4. Choose branch: `main`
5. Click **"Next"**

### Step 3: Build Settings (Already Configured!)
The `amplify.yml` file is already in your repo, so:
1. Amplify will automatically detect the build settings
2. Click **"Save and deploy"**
3. Wait 5-10 minutes for the build to complete

### Step 4: Add Your Custom Domain
1. In your Amplify app, go to **"Domain management"**
2. Click **"Add domain"**
3. Enter: `brianbenwah.com`
4. Follow the DNS verification steps
5. AWS will automatically set up SSL certificate

## Your Blog Will Be Available At:
- **Amplify URL**: `https://main.xxxxxxxxx.amplifyapp.com` (temporary)
- **Custom Domain**: `https://brianbenwah.com` (after DNS setup)

## Automatic Deployments
Every time you push to GitHub, your site will automatically update!

## Next Steps
1. Add your first blog post
2. Customize colors in `tailwind.config.js`
3. Update social media links in the components

## Need Help?
- Check build logs in Amplify Console
- All dependencies are already configured
- Build settings are optimized for Next.js

Your blog is ready to go live! 🎉

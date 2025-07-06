# Brian Benwah - Personal Blog

A modern, SEO-optimized personal blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Fast Performance** - Built with Next.js 14 and optimized for speed
- 📱 **Responsive Design** - Mobile-first design that works on all devices
- 🔍 **SEO Optimized** - Meta tags, structured data, and semantic HTML
- 📝 **Blog System** - Markdown-based blog posts with categories and tags
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- 🔧 **TypeScript** - Full type safety and better developer experience

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Content:** Markdown with gray-matter
- **Deployment:** AWS Amplify

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── posts/          # Blog posts
├── components/         # React components
├── lib/               # Utility functions
├── public/            # Static assets
└── content/           # Blog content (markdown files)
```

## Blog Posts

Blog posts are written in Markdown and stored in the `content/` directory. Each post should include:

- Front matter with metadata (title, date, description, tags)
- Markdown content
- Optional featured image

## Deployment

This blog is configured for deployment on AWS Amplify with automatic deployments from the main branch.

## Customization

- Update `app/layout.tsx` for site-wide metadata
- Modify `components/` for UI changes
- Edit `tailwind.config.js` for styling customization
- Update social links in Header and Footer components

## License

MIT License - feel free to use this template for your own projects. 
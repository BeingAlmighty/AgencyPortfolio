# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Modern and responsive design
- Built with React 18 and Vite
- Styled with Tailwind CSS
- Smooth animations with Framer Motion
- Component library with Radix UI
- Mobile-first responsive design

## Live Demo

Visit the live website at: [Your GitHub Username].github.io/Portfolio-main

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/Portfolio-main.git
cd Portfolio-main
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://[your-username].github.io/Portfolio-main`

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. Install the gh-pages package (already included in devDependencies)
2. Run the deploy command:
```bash
npm run deploy
```

## GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. Push to the main branch to trigger the first deployment

## Project Structure

```
Portfolio-main/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── assets/        # Images and assets
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility libraries
│   │   └── pages/         # Page components
│   └── index.html         # HTML template
├── .github/workflows/     # GitHub Actions
├── dist/                  # Built files (created after build)
└── package.json          # Dependencies and scripts
```

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Radix UI** - Unstyled component library
- **React Hook Form** - Form handling
- **Lucide React** - Icon library

## License

MIT License - see the LICENSE file for details.

# WarsawJS Blog

<div align="center">
  <img src="public/images/logo-warsawjs-with-dark-text.svg" alt="WarsawJS Logo" width="300">
  <p><em>A modern tech blog aggregating JavaScript community content.</em></p>
  
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  ![Node Version](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)
  [![JavaScript Style Guide](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
  [![ESLint](https://img.shields.io/badge/linting-eslint-4B32C3.svg)](https://eslint.org)
</div>

## 📋 Overview

A tech blog based on WarsawJS branding that collects links, titles, and descriptions with previews to blogposts from the JavaScript community. Built with clean HTML, CSS, and JavaScript with no framework dependencies.

## ✨ Features

- **Clean Design** - Modern HTML/CSS/JavaScript implementation
- **WarsawJS Branding** - Consistent color scheme
- **Responsive Layout** - Optimized for all device sizes
- **Content Aggregation** - Easy integration with content sources
- **Author Filtering** - Filter posts by specific authors
- **Search Functionality** - Find content across all posts
- **SEO Optimized** - Open Graph tags and structured data
- **Performance Focused** - Fast loading and rendering

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Node.js >=12.0.0 (optional, for serving the files)

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/warsawjs-blog.git
cd warsawjs-blog
```

2. Choose your preferred method:
   - **Quick Start**: Open the `index.html` file in your browser
   - **Development Setup**: Install dependencies and serve with a static server

```bash
npm install
npm start
```

## 🔌 Connecting to Medium

The blog is set up to display mock data, but it can be easily connected to Medium's RSS feed by uncommenting and updating the `fetchMediumPosts()` function in `script.js`.

You can use services like [RSS2JSON](https://rss2json.com/) to convert Medium's RSS feed to JSON format that can be easily consumed by the blog.

## 🎨 Customization

- `styles.css` - Contains all styling information
- `script.js` - Contains the logic for displaying posts and search functionality
- `index.html` - Main HTML structure

## 🖼️ Social Media Integration

The blog includes Open Graph (OG) and Twitter card metadata for rich social media sharing:

- **Desktop OG Image**: `public/images/og-image-desktop.jpeg` (1200×630px)
- **Mobile OG Image**: `public/images/og-mobile.jpeg` (600×315px)

Example OG tags included:

```html
<meta
  property="og:image"
  content="https://blog.warsawjs.com/public/images/og-image-desktop.jpeg"
/>
<meta property="og:image:alt" content="WarsawJS Blog banner" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

## 🛠️ Development

### Code Quality Tools

This project uses several tools to maintain code quality:

#### Prettier

Prettier is used for consistent code formatting. You can run Prettier manually with:

```bash
npm run format
```

Configuration is in `.prettierrc` file.

#### ESLint

ESLint is used for code linting. You can check your code with:

```bash
npm run lint
```

Or automatically fix issues:

```bash
npm run lint:fix
```

Configuration is in `.eslintrc.json` file.

#### Husky Git Hooks

This project uses Husky to run pre-commit hooks that automatically format and lint your code before each commit.

The pre-commit hook runs `lint-staged`, which ensures that:

- JavaScript files are checked with ESLint and formatted with Prettier
- HTML, CSS, JSON, and MD files are formatted with Prettier

## 🤝 Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this project.

## 📄 License

This project is licensed under the ISC License.

# WarsawJS Blog

A tech blog based on WarsawJS branding which collects links, titles, and descriptions with previews to blogposts from https://medium.com/warsawjs.

## Features

- Clean HTML/CSS/JavaScript design
- WarsawJS branding with the navy blue (#334556) color scheme
- Responsive layout
- Mock data representing Medium posts
- Search functionality
- Ready to be extended to fetch real posts from Medium

## Getting Started

### Prerequisites

- A web browser
- Node.js (optional, for serving the files)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/warsawjs-blog.git
cd warsawjs-blog
```

2. Open the `index.html` file in your browser
   - Or install dependencies and serve with a static server
   ```bash
   npm install
   npm start
   ```

## Connecting to Medium

The blog is set up to display mock data, but it can be easily connected to Medium's RSS feed by uncommenting and updating the `fetchMediumPosts()` function in `script.js`.

You can use services like [RSS2JSON](https://rss2json.com/) to convert Medium's RSS feed to JSON format that can be easily consumed by the blog.

## Customization

- `styles.css` - Contains all styling information
- `script.js` - Contains the logic for displaying posts and search functionality
- `index.html` - Main HTML structure

## License

This project is licensed under the ISC License.
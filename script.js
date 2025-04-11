// Mock data for Medium posts
const mockPosts = [
  {
    title: 'JavaScript Best Practices in 2025',
    description: 'Learn about the latest best practices in JavaScript development. This article covers performance optimization, code organization, and newer language features...',
    link: 'https://medium.com/warsawjs/javascript-best-practices-2025',
    pubDate: '2025-04-01T12:00:00Z',
    thumbnail: 'https://miro.medium.com/max/1200/0*code-image-example.jpg',
    author: {
      name: 'JavaScript Expert',
      image: 'https://miro.medium.com/max/100/0*author-avatar.jpg'
    },
    categories: ['JavaScript', 'Web Development', 'Programming']
  },
  {
    title: 'Building Scalable React Applications',
    description: 'A comprehensive guide to building large-scale React applications that scale. This article shares patterns, architecture decisions, and practical tips...',
    link: 'https://medium.com/warsawjs/building-scalable-react-applications',
    pubDate: '2025-03-15T14:30:00Z',
    thumbnail: 'https://miro.medium.com/max/1200/0*react-image-example.jpg',
    author: {
      name: 'React Developer',
      image: 'https://miro.medium.com/max/100/0*react-dev-avatar.jpg'
    },
    categories: ['React', 'JavaScript', 'Web Development']
  },
  {
    title: 'Mastering TypeScript: Advanced Types',
    description: 'Dive deep into TypeScript\'s advanced type system. Learn about conditional types, mapped types, template literal types and more to build type-safe applications...',
    link: 'https://medium.com/warsawjs/mastering-typescript-advanced-types',
    pubDate: '2025-02-20T09:15:00Z',
    thumbnail: 'https://miro.medium.com/max/1200/0*typescript-image.jpg',
    author: {
      name: 'TypeScript Guru',
      image: 'https://miro.medium.com/max/100/0*ts-guru-avatar.jpg'
    },
    categories: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    title: 'Web Performance Optimization Techniques',
    description: 'Practical tips for improving your web application\'s performance. From bundle optimization to rendering performance, learn how to make your web apps lightning fast...',
    link: 'https://medium.com/warsawjs/web-performance-optimization-techniques',
    pubDate: '2025-01-10T16:45:00Z',
    thumbnail: 'https://miro.medium.com/max/1200/0*performance-image.jpg',
    author: {
      name: 'Performance Expert',
      image: 'https://miro.medium.com/max/100/0*perf-expert-avatar.jpg'
    },
    categories: ['Web Performance', 'JavaScript', 'Web Development']
  },
  {
    title: 'The Future of JavaScript: What\'s Coming in 2026',
    description: 'A look at upcoming JavaScript features and browser APIs. Get prepared for the future with this overview of the JavaScript ecosystem evolution...',
    link: 'https://medium.com/warsawjs/the-future-of-javascript-2026',
    pubDate: '2024-12-05T11:20:00Z',
    thumbnail: 'https://miro.medium.com/max/1200/0*future-js-image.jpg',
    author: {
      name: 'JavaScript Futurist',
      image: 'https://miro.medium.com/max/100/0*js-futurist-avatar.jpg'
    },
    categories: ['JavaScript', 'Web Development', 'Programming']
  },
  {
    title: 'Building a Serverless API with Node.js',
    description: 'Learn how to create scalable, cost-effective APIs using serverless technologies. This tutorial shows you how to build a complete API without managing servers...',
    link: 'https://medium.com/warsawjs/building-serverless-api-nodejs',
    pubDate: '2024-11-18T13:40:00Z',
    thumbnail: 'https://miro.medium.com/max/1200/0*serverless-image.jpg',
    author: {
      name: 'Serverless Developer',
      image: 'https://miro.medium.com/max/100/0*serverless-dev-avatar.jpg'
    },
    categories: ['Node.js', 'Serverless', 'API Development']
  }
];

// Format date helper function
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Create blog post element
function createBlogPostElement(post) {
  return `
    <div class="card">
      <a href="${post.link}" target="_blank">
        <div class="image-container">
          <img src="${post.thumbnail || 'public/images/default-thumbnail.jpg'}" alt="${post.title}">
        </div>
        <div class="content">
          <h2 class="card-title">${post.title}</h2>
          <p class="description">${post.description}</p>
          <div class="author">
            ${post.author?.image ? `
              <div class="author-image">
                <img src="${post.author.image}" alt="${post.author.name}">
              </div>
            ` : ''}
            ${post.author?.name || 'WarsawJS'}
            ${post.pubDate ? `<span class="date">${formatDate(post.pubDate)}</span>` : ''}
          </div>
        </div>
      </a>
    </div>
  `;
}

// Initialize the blog
function initBlog() {
  const postsGrid = document.getElementById('posts-grid');
  const searchInput = document.getElementById('search-input');
  let currentPosts = [...mockPosts];

  // Function to render posts
  function renderPosts(posts) {
    postsGrid.innerHTML = posts.length
      ? posts.map(post => createBlogPostElement(post)).join('')
      : '<p>No posts found matching your search.</p>';
  }

  // Initial render
  renderPosts(currentPosts);

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (!searchTerm) {
      renderPosts(mockPosts);
      return;
    }
    
    const filteredPosts = mockPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm) ||
      (post.categories && post.categories.some(category => 
        category.toLowerCase().includes(searchTerm)
      ))
    );
    
    renderPosts(filteredPosts);
  });

  // In a real application, you would fetch from Medium API here
  // This would replace the mockPosts with real data
  // Example:
  /*
  async function fetchMediumPosts() {
    try {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/warsawjs');
      const data = await response.json();
      
      if (data.status === 'ok') {
        const posts = data.items.map(item => ({
          title: item.title,
          description: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          link: item.link,
          pubDate: item.pubDate,
          thumbnail: item.thumbnail,
          author: {
            name: item.author,
            image: null // Medium API doesn't easily provide author images
          },
          categories: item.categories
        }));
        
        currentPosts = posts;
        renderPosts(posts);
      }
    } catch (error) {
      console.error('Error fetching Medium posts:', error);
    }
  }
  
  // Uncomment to fetch real data:
  // fetchMediumPosts();
  */
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initBlog);
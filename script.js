// Real Medium post data
const mockPosts = [
  {
    title: 'An Elegant Solution for Handling Errors in Express',
    description: 'Error handling in Express applications can be tricky. This article explores an elegant pattern for centralized error handling that makes your code cleaner and more maintainable...',
    link: 'https://medium.com/warsawjs/an-elegant-solution-for-handling-errors-in-express-27332f768c6',
    pubDate: '2023-05-15T12:00:00Z',
    thumbnail: 'public/images/elegant.jpeg',
    author: {
      name: 'Michał Załęcki',
      image: null
    },
    categories: ['Express', 'Node.js', 'Error Handling']
  },
  {
    title: 'Bitwise Operators',
    description: 'Dive into the world of bitwise operators in JavaScript. Learn how these low-level operators work and how they can be used to optimize your code in specific scenarios...',
    link: 'https://medium.com/warsawjs/bitwise-operators-45e4d8b393db',
    pubDate: '2023-04-10T14:30:00Z',
    thumbnail: 'public/images/bitwise.jpeg',
    author: {
      name: 'Yonatan Kra',
      image: null
    },
    categories: ['JavaScript', 'Bitwise Operations', 'Programming']
  },
  {
    title: 'How many AWS services do you need to host a static webpage? (1/2)',
    description: 'Part 1 of this series explores the AWS services needed to host a static website. From S3 to CloudFront, learn the fundamentals of serverless static site hosting on AWS...',
    link: 'https://medium.com/warsawjs/how-many-aws-services-do-you-need-to-host-a-static-webpage-1-2-b811929a9436',
    pubDate: '2023-03-20T09:15:00Z',
    thumbnail: 'public/images/aws.jpeg',
    author: {
      name: 'Mateusz (mat3e)',
      image: null
    },
    categories: ['AWS', 'Static Websites', 'Cloud']
  },
  {
    title: 'How many AWS services do you need to host a static webpage? (2/2)',
    description: 'Part 2 of the AWS static site hosting series. Discover more advanced configurations and optimizations for your static website infrastructure on AWS...',
    link: 'https://medium.com/warsawjs/how-many-aws-services-do-you-need-to-host-a-static-webpage-2-2-aa619fc99fc2',
    pubDate: '2023-03-25T16:45:00Z',
    thumbnail: 'public/images/aws_static.jpeg',
    author: {
      name: 'Mateusz (mat3e)',
      image: null
    },
    categories: ['AWS', 'Static Websites', 'Cloud']
  },
  {
    title: 'WarsawJS Mission Statement',
    description: 'Learn about the mission and vision behind WarsawJS. This article outlines our commitment to the JavaScript community and our goals for fostering knowledge sharing and growth...',
    link: 'https://medium.com/warsawjs/warsawjs-mission-statement-53fbca973a59',
    pubDate: '2023-02-05T11:20:00Z',
    thumbnail: 'public/images/mission.jpeg',
    author: {
      name: 'Piotr Zientara',
      image: null
    },
    categories: ['WarsawJS', 'Community', 'JavaScript']
  },
  {
    title: 'What are Template Literal Types?',
    description: 'Explore TypeScript\'s powerful template literal types. Learn how they can help you create more precise type definitions and improve type safety in your TypeScript applications...',
    link: 'https://medium.com/warsawjs/what-are-template-literal-types-9449717b5433',
    pubDate: '2023-01-18T13:40:00Z',
    thumbnail: 'public/images/types.jpeg',
    author: {
      name: 'Chojnacki Krzysiek',
      image: null
    },
    categories: ['TypeScript', 'Template Literals', 'Type Safety']
  },
  {
    title: 'Simplicity in the Spectrum: Identifying and Overcoming Overengineering',
    description: 'This article discusses the problem of overengineering in software development and provides strategies for recognizing and avoiding unnecessary complexity in your code...',
    link: 'https://medium.com/warsawjs/simplicity-in-the-spectrum-identifying-and-overcoming-overengineering-e90dbcfe53f2',
    pubDate: '2022-12-10T10:30:00Z',
    thumbnail: 'public/images/simplicity.jpeg',
    author: {
      name: 'Chojnacki Krzysiek',
      image: null
    },
    categories: ['Software Design', 'Best Practices', 'Simplicity']
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
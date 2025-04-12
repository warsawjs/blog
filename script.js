// Real Medium post data
const mockPosts = [
  {
    title: 'Unleashing Developer Potential: Introducing WarsawJS JAM',
    description: 'WarsawJS introduces JAM - a biweekly hackathon series designed to help developers unlock their full potential. Learn about this new initiative that brings together coding, mentorship, and community in a practical learning environment...',
    link: 'https://medium.com/warsawjs/unleashing-developer-potential-introducing-warsawjs-jam-ea8a9695155f',
    pubDate: '2025-04-12T09:00:00Z',
    thumbnail: 'public/images/jam.jpeg',
    author: {
      name: 'Piotr Zientara',
      image: null
    },
    categories: ['JavaScript', 'Hackathons', 'Networking', 'Community', 'Programming']
  },
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
    pubDate: '2024-08-29T10:30:00Z',
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
  // Check if this is the JAM post and add the jam image to the link element
  const isJamPost = post.title.includes('JAM') && post.thumbnail.includes('jam.jpeg');
  const linkAttributes = isJamPost ? 
    `href="${post.link}" target="_blank" itemprop="url" style="background-image: url('${post.thumbnail}'); background-size: contain; background-repeat: no-repeat; background-position: right bottom;"` : 
    `href="${post.link}" target="_blank" itemprop="url"`;

  return `
    <article class="card" itemscope itemtype="https://schema.org/BlogPosting">
      <a ${linkAttributes}>
        <div class="image-container">
          <img src="${post.thumbnail || 'public/images/default-thumbnail.jpg'}" alt="${post.title}" itemprop="image">
        </div>
        <div class="content">
          <h2 class="card-title" itemprop="headline">${post.title}</h2>
          <p class="description" itemprop="description">${post.description}</p>
          <div class="author">
            ${post.author?.image ? `
              <div class="author-image">
                <img src="${post.author.image}" alt="${post.author.name}" itemprop="image">
              </div>
            ` : ''}
            <span itemprop="author" itemscope itemtype="https://schema.org/Person" class="post-author-name" onclick="filterByAuthor('${post.author?.name || 'WarsawJS'}')">
              <meta itemprop="name" content="${post.author?.name || 'WarsawJS'}">
              ${post.author?.name || 'WarsawJS'}
            </span>
            ${post.pubDate ? `
              <span class="date">
                <meta itemprop="datePublished" content="${post.pubDate}">
                ${formatDate(post.pubDate)}
              </span>
            ` : ''}
          </div>
          <meta itemprop="publisher" content="WarsawJS">
          ${post.categories ? `
            <div class="categories" style="display: none;">
              ${post.categories.map(category => `<meta itemprop="keywords" content="${category}">`).join('')}
            </div>
          ` : ''}
        </div>
      </a>
    </article>
  `;
}

// Initialize the blog
function initBlog() {
  const postsGrid = document.getElementById('posts-grid');
  const searchInput = document.getElementById('search-input');
  let currentPosts = [...mockPosts];
  let activeAuthorFilter = null;

  // Function to render posts
  function renderPosts(posts) {
    postsGrid.innerHTML = posts.length
      ? posts.map(post => createBlogPostElement(post)).join('')
      : '<p>No posts found matching your search.</p>';
    
    // Add structured data for SEO
    addStructuredData(posts);
    
    // Scroll to posts if filtering by author
    if (activeAuthorFilter) {
      postsGrid.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Initial render
  renderPosts(currentPosts);

  // Filter by author function
  window.filterByAuthor = function(authorName) {
    // Reset search input
    searchInput.value = '';
    
    // If clicking the same author again, clear the filter
    if (activeAuthorFilter === authorName) {
      activeAuthorFilter = null;
      renderPosts(mockPosts);
      
      // Remove active class from all author cards
      document.querySelectorAll('.author-card').forEach(card => {
        card.classList.remove('active');
      });
      
      // Remove filter indicator if it exists
      const filterIndicator = document.getElementById('filter-indicator');
      if (filterIndicator) {
        filterIndicator.remove();
      }
      
      return;
    }
    
    activeAuthorFilter = authorName;
    
    // Highlight the active author card
    document.querySelectorAll('.author-card').forEach(card => {
      const cardAuthor = card.querySelector('.author-avatar').getAttribute('data-author');
      if (cardAuthor === authorName) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
    
    const filteredPosts = mockPosts.filter(post => 
      post.author?.name === authorName
    );
    
    renderPosts(filteredPosts);
    
    // Add or update filter indicator
    let filterIndicator = document.getElementById('filter-indicator');
    if (!filterIndicator) {
      filterIndicator = document.createElement('div');
      filterIndicator.id = 'filter-indicator';
      filterIndicator.className = 'filter-indicator';
      postsGrid.insertAdjacentElement('beforebegin', filterIndicator);
    }
    
    filterIndicator.innerHTML = `
      <p>Showing posts by <strong>${authorName}</strong></p>
      <button onclick="filterByAuthor('${authorName}')" class="clear-filter-btn">Clear filter</button>
    `;
  };

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    // Reset author filter when searching
    if (activeAuthorFilter && searchTerm) {
      activeAuthorFilter = null;
      document.querySelectorAll('.author-card').forEach(card => {
        card.classList.remove('active');
      });
      
      // Remove filter indicator if it exists
      const filterIndicator = document.getElementById('filter-indicator');
      if (filterIndicator) {
        filterIndicator.remove();
      }
    }
    
    if (!searchTerm) {
      renderPosts(mockPosts);
      return;
    }
    
    const filteredPosts = mockPosts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm) ||
      (post.categories && post.categories.some(category => 
        category.toLowerCase().includes(searchTerm)
      )) ||
      (post.author?.name && post.author.name.toLowerCase().includes(searchTerm))
    );
    
    renderPosts(filteredPosts);
  });

  // Add structured data for SEO
  function addStructuredData(posts) {
    // Remove existing structured data if any
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create blog posting structured data
    const blogPostings = posts.map(post => ({
      '@type': 'BlogPosting',
      'headline': post.title,
      'description': post.description,
      'image': post.thumbnail,
      'datePublished': post.pubDate,
      'author': {
        '@type': 'Person',
        'name': post.author?.name || 'WarsawJS'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'WarsawJS',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://blog.warsawjs.com/public/images/logo-warsawjs-with-dark-text.svg'
        }
      },
      'url': post.link,
      'keywords': post.categories?.join(',')
    }));
    
    // Create structured data schema
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': blogPostings.map((post, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': post
      }))
    };
    
    // Add structured data to the page
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

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
const posts = [
  {
    title: 'What is Frontend Architecture?',
    description:
      'Explore the crucial considerations of frontend architecture, understanding its complexity beyond UI components. Learn about the planning and decisions that shape robust, maintainable frontend systems...',
    link: 'https://ducin.dev/what-is-frontend-architecture',
    pubDate: '2024-09-26T14:00:00Z',
    thumbnail: 'public/images/blog-it-javascript-frameworks.jpeg',
    author: {
      name: 'tomasz-ducin',
      image: null,
    },
    categories: [
      'Frontend',
      'Architecture',
      'Web Development',
      'Best Practices',
    ],
  },
  {
    title: 'Are You Training Your Models?',
    description:
      'Many misunderstand AI model training, believing it\'s as simple as "teaching" with personal data. Learn a practical approach to working with LLMs that involves using commercial models, experimenting extensively, and understanding their generative, probabilistic nature...',
    link: 'https://algorytmy.substack.com/p/are-you-training-your-models',
    pubDate: '2024-07-15T10:00:00Z',
    thumbnail: 'public/images/Jul 15, 2024.jpeg',
    author: {
      name: 'K-algo',
      image: 'public/images/k-algo.jpg',
    },
    categories: ['AI', 'Machine Learning', 'LLM', 'Model Training', 'Workflow'],
  },
  {
    title: 'Unleashing Developer Potential: Introducing WarsawJS JAM',
    description:
      'WarsawJS introduces JAM - a biweekly hackathon series designed to help developers unlock their full potential. Learn about this new initiative that brings together coding, mentorship, and community in a practical learning environment...',
    link: 'https://medium.com/warsawjs/unleashing-developer-potential-introducing-warsawjs-jam-ea8a9695155f',
    pubDate: '2025-04-12T09:00:00Z',
    thumbnail: 'public/images/jam.jpeg',
    author: {
      name: 'Piotr Zientara',
      image: null,
    },
    categories: [
      'JavaScript',
      'Hackathons',
      'Networking',
      'Community',
      'Programming',
    ],
  },
  {
    title: 'An Elegant Solution for Handling Errors in Express',
    description:
      'Error handling in Express applications can be tricky. This article explores an elegant pattern for centralized error handling that makes your code cleaner and more maintainable...',
    link: 'https://medium.com/warsawjs/an-elegant-solution-for-handling-errors-in-express-27332f768c6',
    pubDate: '2023-05-15T12:00:00Z',
    thumbnail: 'public/images/elegant.jpeg',
    author: {
      name: 'Michał Załęcki',
      image: null,
    },
    categories: ['Express', 'Node.js', 'Error Handling'],
  },
  {
    title: 'Bitwise Operators',
    description:
      'Dive into the world of bitwise operators in JavaScript. Learn how these low-level operators work and how they can be used to optimize your code in specific scenarios...',
    link: 'https://medium.com/warsawjs/bitwise-operators-45e4d8b393db',
    pubDate: '2023-04-10T14:30:00Z',
    thumbnail: 'public/images/bitwise.jpeg',
    author: {
      name: 'Yonatan Kra',
      image: null,
    },
    categories: ['JavaScript', 'Bitwise Operations', 'Programming'],
  },
  {
    title: 'How many AWS services do you need to host a static webpage? (1/2)',
    description:
      'Part 1 of this series explores the AWS services needed to host a static website. From S3 to CloudFront, learn the fundamentals of serverless static site hosting on AWS...',
    link: 'https://medium.com/warsawjs/how-many-aws-services-do-you-need-to-host-a-static-webpage-1-2-b811929a9436',
    pubDate: '2023-03-20T09:15:00Z',
    thumbnail: 'public/images/aws.jpeg',
    author: {
      name: 'Mateusz (mat3e)',
      image: null,
    },
    categories: ['AWS', 'Static Websites', 'Cloud'],
  },
  {
    title: 'Et in Arcadia ego: AI in modeling (ft. Lalaland.ai)',
    description:
      'AI-generated models are beginning to appear on magazine covers, in campaigns, lookbooks, and shows. This article explores the implications of AI in the modeling industry, with a focus on Lalaland.ai and the ethical questions raised by this technology...',
    link: 'https://www.xfaang.com/blog/Et-in-Arcadia-ego:-AI-in-modeling-(ft.-Lalaland.ai)/50SCPKcMoWpbjvxINQhIvM',
    pubDate: '2024-07-21T10:00:00Z',
    thumbnail: 'public/images/lalaland.jpg',
    author: {
      name: 'Iga Trydulska',
      image: null,
    },
    categories: ['AI', 'Fashion', 'Technology', 'Ethics'],
  },
  {
    title: 'How many AWS services do you need to host a static webpage? (2/2)',
    description:
      'Part 2 of the AWS static site hosting series. Discover more advanced configurations and optimizations for your static website infrastructure on AWS...',
    link: 'https://medium.com/warsawjs/how-many-aws-services-do-you-need-to-host-a-static-webpage-2-2-aa619fc99fc2',
    pubDate: '2023-03-25T16:45:00Z',
    thumbnail: 'public/images/aws_static.jpeg',
    author: {
      name: 'Mateusz (mat3e)',
      image: null,
    },
    categories: ['AWS', 'Static Websites', 'Cloud'],
  },
  {
    title: 'WarsawJS Mission Statement',
    description:
      'Learn about the mission and vision behind WarsawJS. This article outlines our commitment to the JavaScript community and our goals for fostering knowledge sharing and growth...',
    link: 'https://medium.com/warsawjs/warsawjs-mission-statement-53fbca973a59',
    pubDate: '2023-02-05T11:20:00Z',
    thumbnail: 'public/images/mission.jpeg',
    author: {
      name: 'Piotr Zientara',
      image: null,
    },
    categories: ['WarsawJS', 'Community', 'JavaScript'],
  },
  {
    title: 'What are Template Literal Types?',
    description:
      "Explore TypeScript's powerful template literal types. Learn how they can help you create more precise type definitions and improve type safety in your TypeScript applications...",
    link: 'https://medium.com/warsawjs/what-are-template-literal-types-9449717b5433',
    pubDate: '2023-01-18T13:40:00Z',
    thumbnail: 'public/images/types.jpeg',
    author: {
      name: 'Chojnacki Krzysiek',
      image: null,
    },
    categories: ['TypeScript', 'Template Literals', 'Type Safety'],
  },
  {
    title:
      'Simplicity in the Spectrum: Identifying and Overcoming Overengineering',
    description:
      'This article discusses the problem of overengineering in software development and provides strategies for recognizing and avoiding unnecessary complexity in your code...',
    link: 'https://medium.com/warsawjs/simplicity-in-the-spectrum-identifying-and-overcoming-overengineering-e90dbcfe53f2',
    pubDate: '2024-08-29T10:30:00Z',
    thumbnail: 'public/images/simplicity.jpeg',
    author: {
      name: 'Chojnacki Krzysiek',
      image: null,
    },
    categories: ['Software Design', 'Best Practices', 'Simplicity'],
  },
  {
    title:
      'Making Developer Voices Heard - Avital Tzubeli at WarsawJS Meetup #78',
    description:
      "Discover insights from Avital Tzubeli's presentation at WarsawJS Meetup #78 on effective developer advocacy, community building, and how to make developer voices heard in product development...",
    link: 'https://medium.com/warsawjs/behind-the-scenes-how-push-notifications-scale-to-millions-of-users-4651289e9d00',
    pubDate: '2021-03-10T18:00:00Z',
    thumbnail: 'public/images/cover-Meetup-78-Avital-2021.jpeg',
    author: {
      name: 'WarsawJS',
      image: 'public/images/logo-warsawjs-with-dark-text.svg',
    },
    categories: [
      'Developer Relations',
      'Community',
      'JavaScript',
      'DevAdvocacy',
      'WarsawJS',
    ],
  },
];

// Helper functions
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function isAuthorMatch(postAuthor, filterAuthor) {
  return (
    postAuthor === filterAuthor ||
    // Handle cases where the order of names is different
    (filterAuthor === 'Chojnacki Krzysiek' &&
      postAuthor === 'Krzysiek Chojnacki') ||
    (filterAuthor === 'Krzysiek Chojnacki' &&
      postAuthor === 'Chojnacki Krzysiek') ||
    // Handle 'Mateusz (mat3e)' vs 'Mateusz (mat3e)'
    (filterAuthor.includes('Mateusz') && postAuthor.includes('Mateusz')) ||
    // Handle variations of tomasz-ducin
    (filterAuthor.toLowerCase().includes('tomasz') &&
      postAuthor.toLowerCase().includes('ducin')) ||
    (filterAuthor.toLowerCase().includes('ducin') &&
      postAuthor.toLowerCase().includes('tomasz'))
  );
}

// Create blog post element
function createBlogPostElement(post) {
  return `
    <article class="card" itemscope itemtype="https://schema.org/BlogPosting">
      <a href="${post.link}" target="_blank" itemprop="url">
        <div class="card-inner">
          <div class="image-container">
            <img src="${
              post.thumbnail || 'public/images/default-thumbnail.jpg'
            }" alt="${post.title}" itemprop="image">
          </div>
          <div class="content">
            <h2 class="card-title" itemprop="headline">${post.title}</h2>
            <p class="description" itemprop="description">${
              post.description
            }</p>
            <meta itemprop="publisher" content="WarsawJS">
            ${
              post.categories
                ? `
              <div class="categories" style="display: none;">
                ${post.categories
                  .map(
                    (category) =>
                      `<meta itemprop="keywords" content="${category}">`
                  )
                  .join('')}
              </div>
            `
                : ''
            }
          </div>
        </div>
        <div class="card-footer">
          ${
            post.author?.image
              ? `
            <div class="author-image">
              <img src="${post.author.image}" alt="${post.author.name}" itemprop="image">
            </div>
          `
              : ''
          }
          <span itemprop="author" itemscope itemtype="https://schema.org/Person" class="post-author-name" onclick="filterByAuthor('${
            post.author?.name || 'WarsawJS'
          }')">
            <meta itemprop="name" content="${post.author?.name || 'WarsawJS'}">
            ${post.author?.name || 'WarsawJS'}
          </span>
          ${
            post.pubDate
              ? `
            <span class="date">
              <meta itemprop="datePublished" content="${post.pubDate}">
              ${formatDate(post.pubDate)}
            </span>
          `
              : ''
          }
        </div>
      </a>
    </article>
  `;
}

// Initialize the blog
function initBlog() {
  const postsGrid = document.getElementById('posts-grid');
  const searchInput = document.getElementById('search-input');
  let currentPosts = [...posts];
  let activeAuthorFilter = null;

  // Only proceed if we found the posts grid
  if (!postsGrid) {
    /* eslint-disable no-console */
    console.error('Posts grid element not found');
    /* eslint-enable no-console */
    return;
  }

  // Function to render posts
  function renderPosts(posts) {
    postsGrid.innerHTML = posts.length
      ? posts.map((post) => createBlogPostElement(post)).join('')
      : '<p>No posts found matching your search.</p>';

    // Add structured data for SEO
    addStructuredData(posts);

    // Add click events to author names in posts
    setupAuthorClickEvents();
  }

  // Setup click events for author names
  function setupAuthorClickEvents() {
    document.querySelectorAll('.post-author-name').forEach((authorElement) => {
      if (authorElement) {
        authorElement.addEventListener('click', function () {
          const nameElement = this.querySelector('meta[itemprop="name"]');
          if (nameElement) {
            const authorName = nameElement.getAttribute('content');
            filterByAuthor(authorName);
          }
        });
      }
    });
  }

  // Set up author card click events
  function setupAuthorCards() {
    const authorCards = document.querySelectorAll('.author-card');
    if (authorCards && authorCards.length > 0) {
      authorCards.forEach((card) => {
        if (card) {
          // Handle click events
          card.addEventListener('click', function (e) {
            // Don't trigger if clicking the speaker-link
            if (e.target.closest('.speaker-link')) {
              return;
            }

            const authorName = this.getAttribute('data-author');
            if (authorName) {
              filterByAuthor(authorName);
            }
          });

          // Add keyboard support for accessibility
          card.addEventListener('keydown', function (e) {
            // Handle Enter or Space key
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              const authorName = this.getAttribute('data-author');
              if (authorName) {
                filterByAuthor(authorName);
              }
            }
          });
        }
      });
    } else {
      /* eslint-disable no-console */
      console.warn('No author cards found in the document');
      /* eslint-enable no-console */
    }
  }

  // Initialize author cards
  setupAuthorCards();

  // Initial render
  renderPosts(currentPosts);

  // Filter by author function
  window.filterByAuthor = function (authorName) {
    if (!authorName) {
      /* eslint-disable no-console */
      console.error('No author name provided to filter');
      /* eslint-enable no-console */
      return;
    }

    // If using search input (which is now removed)
    if (searchInput) {
      searchInput.value = '';
    }

    // If clicking the same author again, clear the filter
    if (activeAuthorFilter === authorName) {
      activeAuthorFilter = null;
      renderPosts(posts);

      // Remove active class from all author cards
      const authorCards = document.querySelectorAll('.author-card');
      if (authorCards && authorCards.length > 0) {
        authorCards.forEach((card) => {
          if (card) card.classList.remove('active');
        });
      }

      // Remove filter indicator if it exists
      removeFilterIndicator();

      return;
    }

    activeAuthorFilter = authorName;

    // Highlight the active author card
    const authorCards = document.querySelectorAll('.author-card');
    if (authorCards && authorCards.length > 0) {
      authorCards.forEach((card) => {
        if (!card) return;

        const cardAuthor = card.getAttribute('data-author');
        if (cardAuthor === authorName) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }

    // Find posts by this author (handle different name formats)
    const filteredPosts = posts.filter((post) => {
      const postAuthor = post.author?.name || '';
      const match = isAuthorMatch(postAuthor, authorName);
      return match;
    });

    if (!postsGrid) {
      /* eslint-disable no-console */
      console.error('Posts grid element not found');
      /* eslint-enable no-console */
      return;
    }

    renderPosts(filteredPosts);

    // Add or update filter indicator
    let filterIndicator = document.getElementById('filter-indicator');
    if (!filterIndicator) {
      filterIndicator = document.createElement('div');
      filterIndicator.id = 'filter-indicator';
      filterIndicator.className = 'filter-indicator';
      postsGrid.insertAdjacentElement('afterend', filterIndicator);
    }

    // Check if it's a mobile device
    const isMobile = window.innerWidth <= 480;

    filterIndicator.innerHTML = `
      <p>Showing posts by <strong>${authorName}</strong></p>
      <button onclick="filterByAuthor('${authorName}')" class="clear-filter-btn">
        ${isMobile ? 'Clear' : 'Clear filter'}
      </button>
    `;

    // Scroll to posts grid with a small offset for mobile
    if (isMobile) {
      const yOffset = -20;
      const postsGridTop =
        postsGrid.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: postsGridTop,
        behavior: 'smooth',
      });
    }
  };

  // Search functionality (only if search input exists)
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();

      // Reset author filter when searching
      if (activeAuthorFilter && searchTerm) {
        activeAuthorFilter = null;
        document.querySelectorAll('.author-card').forEach((card) => {
          card.classList.remove('active');
        });

        // Remove filter indicator if it exists
        removeFilterIndicator();
      }

      if (!searchTerm) {
        renderPosts(posts);
        return;
      }

      const filteredPosts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm) ||
          post.description.toLowerCase().includes(searchTerm) ||
          (post.categories &&
            post.categories.some((category) =>
              category.toLowerCase().includes(searchTerm)
            )) ||
          (post.author?.name &&
            post.author.name.toLowerCase().includes(searchTerm))
      );

      renderPosts(filteredPosts);
    });
  }

  // Helper function to remove filter indicator
  function removeFilterIndicator() {
    const filterIndicator = document.getElementById('filter-indicator');
    if (filterIndicator) {
      filterIndicator.remove();
    }
  }

  // Add structured data for SEO
  function addStructuredData(posts) {
    // Remove existing structured data if any
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Create blog posting structured data
    const blogPostings = posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: post.thumbnail,
      datePublished: post.pubDate,
      author: {
        '@type': 'Person',
        name: post.author?.name || 'WarsawJS',
      },
      publisher: {
        '@type': 'Organization',
        name: 'WarsawJS',
        logo: {
          '@type': 'ImageObject',
          url: 'https://blog.warsawjs.com/public/images/logo-warsawjs-with-dark-text.svg',
        },
      },
      url: post.link,
      keywords: post.categories?.join(','),
    }));

    // Create structured data schema
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: blogPostings.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: post,
      })),
    };

    // Add structured data to the page
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initBlog);

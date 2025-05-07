const posts = [
  {
    title: "You're misunderstanding DDD in Angular (and Frontend)",
    description:
      "Tomasz Ducin addresses common misconceptions about Domain-Driven Design (DDD) in Angular and frontend development. He explains why DDD is not just about code structure or tooling, but about understanding the business domain and applying DDD principles across the entire product, not just the frontend. Learn why DDD is a product-wide discipline and how to avoid the pitfalls of 'frontend-only DDD.'",
    link: 'https://www.angularspace.com/youre-misunderstanding-ddd-in-angular-and-frontend/',
    pubDate: '2025-05-05T10:00:00Z',
    thumbnail: 'public/images/youre-misunderstanding-ddd.jpeg',
    author: {
      name: 'Tomasz Ducin',
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/tomasz-ducin.jpg',
    },
    categories: [
      'DDD',
      'Angular',
      'Frontend',
      'Architecture',
      'Best Practices',
    ],
  },
  {
    title: 'HTML Forms: The Unsung Heroes of Web Development',
    description:
      'Explore why HTML forms remain essential in modern web development. Discover their powerful features for data collection, their accessibility benefits, and how they integrate with JavaScript frameworks and modern API technologies...',
    link: 'https://medium.com/warsawjs/html-forms-the-unsung-heroes-of-web-development-539eaa231454',
    pubDate: '2025-04-19T10:00:00Z',
    thumbnail: 'public/images/HTML-Forms.jpeg',
    author: {
      name: 'WarsawJS',
      image: 'public/images/logo-warsawjs-with-dark-text.svg',
    },
    categories: [
      'HTML',
      'Web Development',
      'Forms',
      'Frontend',
      'Accessibility',
    ],
  },
  {
    title:
      "Bridging Mathematics and Programming: Professor Andrzej Blikle's Lingua Project",
    description:
      "Discover Professor Andrzej Blikle's groundbreaking Lingua project, which creates a unique bridge between mathematics and programming. Learn how this innovative system leverages denotational semantics to improve software reliability and reduce errors...",
    link: 'https://medium.com/@warsawjs/bridging-mathematics-and-programming-professor-andrzej-blikles-lingua-project-d8f8c6ca16fd',
    pubDate: '2025-04-17T10:00:00Z',
    thumbnail: 'public/images/blikle-denotations.jpg',
    author: {
      name: 'WarsawJS',
      image: 'public/images/logo-warsawjs-with-dark-text.svg',
    },
    categories: [
      'Computer Science',
      'Mathematics',
      'Programming Languages',
      'Research',
      'Denotational Semantics',
    ],
  },
  {
    title: 'What is Frontend Architecture?',
    description:
      'Explore the crucial considerations of frontend architecture, understanding its complexity beyond UI components. Learn about the planning and decisions that shape robust, maintainable frontend systems...',
    link: 'https://ducin.dev/what-is-frontend-architecture',
    pubDate: '2024-09-26T14:00:00Z',
    thumbnail: 'public/images/blog-it-javascript-frameworks.jpeg',
    author: {
      name: 'Tomasz Ducin',
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/tomasz-ducin.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/piotr-zientara.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/michal-zalecki.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/yonatan-kra.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/mateusz-chrzonstowski.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/iga-trydulska.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/mateusz-chrzonstowski.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/piotr-zientara.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/krzysiek-chojnacki.jpg',
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
      image:
        'https://s3.eu-central-1.amazonaws.com/www.warsawjs.com/static/images/people/krzysiek-chojnacki.jpg',
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
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const isAuthorMatch = (postAuthor, filterAuthor) => {
  // Normalize both strings for more consistent comparison
  const normalizedPostAuthor = postAuthor.toLowerCase().replace(/[-_]/g, ' ');
  const normalizedFilterAuthor = filterAuthor
    .toLowerCase()
    .replace(/[-_]/g, ' ');

  return (
    postAuthor === filterAuthor ||
    normalizedPostAuthor === normalizedFilterAuthor ||
    // Handle cases where the order of names is different
    (filterAuthor === 'Chojnacki Krzysiek' &&
      postAuthor === 'Krzysiek Chojnacki') ||
    (filterAuthor === 'Krzysiek Chojnacki' &&
      postAuthor === 'Chojnacki Krzysiek') ||
    // Handle 'Mateusz (mat3e)' vs 'Mateusz (mat3e)'
    (normalizedFilterAuthor.includes('mateusz') &&
      normalizedPostAuthor.includes('mateusz')) ||
    // Handle variations of Tomasz Ducin
    (normalizedFilterAuthor.includes('tomasz') &&
      normalizedPostAuthor.includes('ducin')) ||
    (normalizedFilterAuthor.includes('ducin') &&
      normalizedPostAuthor.includes('tomasz'))
  );
};

// Helper function to create a slug from a title
const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim(); // Trim any leading/trailing spaces
};

// Helper function to get speaker profile URL
const getSpeakerProfileUrl = (authorName) => {
  // Handle special cases
  if (authorName === 'WarsawJS') {
    return 'https://warsawjs.com';
  }

  if (authorName === 'Tomasz Ducin') {
    return 'https://ducin.dev/';
  }

  if (authorName === 'K-algo') {
    return 'https://algorytmy.substack.com/';
  }

  if (authorName === 'Mateusz (mat3e)') {
    return 'https://warsawjs.com/speakers/mateusz-chrzonstowski';
  }

  if (authorName === 'Michał Załęcki') {
    return 'https://warsawjs.com/speakers/michal-zalecki';
  }

  if (authorName === 'Yonatan Kra') {
    return 'https://warsawjs.com/speakers/yonatan-kra';
  }

  if (authorName === 'Iga Trydulska') {
    return 'https://warsawjs.com/speakers/iga-trydulska';
  }

  if (authorName === 'Piotr Zientara') {
    return 'https://warsawjs.com/speakers/piotr-zientara';
  }

  if (
    authorName === 'Chojnacki Krzysiek' ||
    authorName === 'Krzysiek Chojnacki'
  ) {
    return 'https://warsawjs.com/speakers/krzysiek-chojnacki';
  }

  // Default case: link to WarsawJS speakers profile
  const slug = authorName.toLowerCase().replace(/\s+/g, '-');
  return `https://warsawjs.com/speakers/${slug}`;
};

// Create blog post element
const createBlogPostElement = (post) => {
  const slug = createSlug(post.title);
  return `
    <article class="card" itemscope itemtype="https://schema.org/BlogPosting" data-post-id="${slug}">
      <a href="#${slug}" class="post-link" data-original-link="${
    post.link
  }" data-post-slug="${slug}">
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
          <span itemprop="author" itemscope itemtype="https://schema.org/Person" class="post-author-name" onclick="event.stopPropagation(); filterByAuthor('${
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
};

// Create popup HTML
const createPopupHTML = () => {
  return `
    <div id="post-popup" class="post-popup">
      <div class="popup-container">
        <div class="popup-header">
          <button class="close-popup" aria-label="Close popup">&times;</button>
        </div>
        <div class="popup-content">
          <!-- Content will be dynamically inserted here -->
        </div>
      </div>
    </div>
  `;
};

// Function to create popup content for a post
const createPopupContent = (post) => {
  return `
    <div class="popup-post">
      <div class="popup-post-header">
        <h2>${post.title}</h2>
        <div class="popup-post-meta">
          <div class="popup-author">
            ${
              post.author?.image
                ? `<a href="${getSpeakerProfileUrl(
                    post.author.name
                  )}" target="_blank" class="popup-author-link" title="View ${
                    post.author.name
                  }'s profile">
                    <img src="${post.author.image}" alt="${
                    post.author.name
                  }" class="popup-author-image">
                  </a>`
                : ''
            }
            <a href="${getSpeakerProfileUrl(
              post.author?.name || 'WarsawJS'
            )}" target="_blank" class="popup-author-name">
              ${post.author?.name || 'WarsawJS'}
            </a>
          </div>
          ${
            post.pubDate
              ? `<span class="popup-date">${formatDate(post.pubDate)}</span>`
              : ''
          }
        </div>
      </div>
      
      <div class="popup-post-columns">
        <div class="popup-post-content">
          <p class="popup-description">${post.description}</p>
          
          ${
            post.categories?.length
              ? `
            <div class="popup-categories">
              <h3>Categories:</h3>
              <div class="category-tags">
                ${post.categories
                  .map((cat) => `<span class="category-tag">${cat}</span>`)
                  .join('')}
              </div>
            </div>
            `
              : ''
          }
        </div>
        
        <div class="popup-post-image-container">
          <div class="popup-post-image">
            <img src="${
              post.thumbnail || 'public/images/default-thumbnail.jpg'
            }" alt="${post.title}">
          </div>
          <div class="popup-read-more">
            <a href="${
              post.link
            }" target="_blank" class="read-original">Read full article</a>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Initialize the blog
const initBlog = () => {
  const postsGrid = document.getElementById('posts-grid');
  const searchInput = document.getElementById('search-input');
  let currentPosts = [...posts];
  let activeAuthorFilter = null;
  let activePopupSlug = null;

  // Only proceed if we found the posts grid
  if (!postsGrid) {
    console.error('Posts grid element not found');
    return;
  }

  // Add popup to the DOM
  document.body.insertAdjacentHTML('beforeend', createPopupHTML());
  const popup = document.getElementById('post-popup');
  const popupContent = popup.querySelector('.popup-content');
  const closePopupButton = popup.querySelector('.close-popup');

  // Function to render posts
  const renderPosts = (posts) => {
    postsGrid.innerHTML = posts.length
      ? posts.map(createBlogPostElement).join('')
      : '<p>No posts found matching your search.</p>';

    // Add structured data for SEO
    addStructuredData(posts);

    // Add click events to author names in posts
    setupAuthorClickEvents();

    // Add click events to post links
    setupPostClickEvents();
  };

  // Function to find post by slug
  const findPostBySlug = (slug) => {
    return posts.find((post) => createSlug(post.title) === slug);
  };

  // Function to open popup for a post
  const openPostPopup = (slug) => {
    const post = findPostBySlug(slug);
    if (!post) return;

    // Set active slug
    activePopupSlug = slug;

    // Update URL without reloading the page
    if (history.pushState) {
      window.history.pushState({ slug }, post.title, `#${slug}`);
      document.title = `${post.title} - WarsawJS Blog`;
    }

    // Fill popup with content
    popupContent.innerHTML = createPopupContent(post);

    // Show popup
    popup.classList.add('active');
    document.body.classList.add('popup-open');
  };

  // Function to close popup
  const closePostPopup = () => {
    // Reset URL
    if (history.pushState && activePopupSlug) {
      window.history.pushState(
        {},
        'WarsawJS Blog - Community Articles',
        window.location.pathname
      );
      document.title = 'WarsawJS Blog - Community Articles';
    }

    // Hide popup
    popup.classList.remove('active');
    document.body.classList.remove('popup-open');

    // Reset active slug
    activePopupSlug = null;
  };

  // Set up click events for post links
  const setupPostClickEvents = () => {
    document.querySelectorAll('.post-link').forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const slug = this.getAttribute('data-post-slug');
        if (slug) {
          openPostPopup(slug);
        }
      });
    });
  };

  // Handle popup close button
  closePopupButton.addEventListener('click', closePostPopup);

  // Close popup when clicking outside the popup content
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      closePostPopup();
    }
  });

  // Handle back/forward browser navigation
  window.addEventListener('popstate', function (e) {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      openPostPopup(hash);
    } else {
      closePostPopup();
    }
  });

  // Check for hash in URL on page load
  const checkUrlForPost = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      openPostPopup(hash);
    }
  };

  // Run hash check after initial render
  setTimeout(checkUrlForPost, 100);

  // Setup click events for author names
  const setupAuthorClickEvents = () => {
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
  };

  // Set up author card click events
  const setupAuthorCards = () => {
    const authorCards = document.querySelectorAll('.author-card');
    if (authorCards?.length > 0) {
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
      console.warn('No author cards found in the document');
    }
  };

  // Helper function to remove filter indicator
  const removeFilterIndicator = () => {
    const filterIndicator = document.getElementById('filter-indicator');
    if (filterIndicator) {
      filterIndicator.remove();
    }
  };

  // Add structured data for SEO
  const addStructuredData = (posts) => {
    // Remove existing structured data if any
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Create blog posting structured data
    const blogPostings = posts.map((post) => {
      const slug = createSlug(post.title);
      return {
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
        // Add both original link and internal link
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://blog.warsawjs.com/#${slug}`,
        },
        url: `https://blog.warsawjs.com/#${slug}`,
        // Keep original link as sameAs
        sameAs: post.link,
        keywords: post.categories?.join(','),
      };
    });

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
  };

  // Initialize author cards
  setupAuthorCards();

  // Initial render
  renderPosts(currentPosts);

  // Filter by author function
  window.filterByAuthor = (authorName) => {
    if (!authorName) {
      console.error('No author name provided to filter');
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
      if (authorCards?.length > 0) {
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
    if (authorCards?.length > 0) {
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
      return isAuthorMatch(postAuthor, authorName);
    });

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
};

// Helper function to generate sitemap.xml content
const generateSitemap = () => {
  const today = new Date().toISOString().split('T')[0];
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://blog.warsawjs.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Add individual post URLs
  posts.forEach((post) => {
    const slug = createSlug(post.title);
    const lastmod = post.pubDate
      ? new Date(post.pubDate).toISOString().split('T')[0]
      : today;

    sitemapContent += `
  <url>
    <loc>https://blog.warsawjs.com/#${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemapContent += `
</urlset>`;

  return sitemapContent;
};

// Function to download sitemap (for administrators)
window.downloadSitemap = () => {
  const sitemapContent = generateSitemap();
  const blob = new Blob([sitemapContent], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sitemap.xml';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Handle author grid scrolling with arrow buttons
const initAuthorScrollButtons = () => {
  const authorsGrid = document.querySelector('.authors-grid');
  const leftButton = document.querySelector('.scroll-indicator.scroll-left');
  const rightButton = document.querySelector('.scroll-indicator.scroll-right');

  if (!authorsGrid || !leftButton || !rightButton) {
    console.warn('Author grid or scroll buttons not found');
    return;
  }

  // Function to scroll the grid
  const scrollGrid = (direction) => {
    const scrollAmount = 300; // Adjust the scroll amount as needed
    const currentScroll = authorsGrid.scrollLeft;
    const targetScroll =
      direction === 'left'
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    authorsGrid.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  // Add click events
  leftButton.addEventListener('click', () => scrollGrid('left'));
  rightButton.addEventListener('click', () => scrollGrid('right'));

  // Update button visibility based on scroll position
  const updateButtonVisibility = () => {
    // Hide left button if at the start
    leftButton.style.opacity = authorsGrid.scrollLeft <= 10 ? '0.3' : '0.7';

    // Hide right button if at the end
    const isAtEnd =
      authorsGrid.scrollLeft + authorsGrid.clientWidth >=
      authorsGrid.scrollWidth - 10;
    rightButton.style.opacity = isAtEnd ? '0.3' : '0.7';
  };

  // Check button visibility on initial load and scroll
  updateButtonVisibility();
  authorsGrid.addEventListener('scroll', updateButtonVisibility);

  // Also update on window resize
  window.addEventListener('resize', updateButtonVisibility);
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initBlog();
  initAuthorScrollButtons();
});

# Contributing to WarsawJS Blog

Thank you for your interest in contributing to WarsawJS Blog! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project. We aim to foster an inclusive and welcoming community.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion for improving the blog:

1. Check if the issue already exists in the GitHub issue tracker
2. If not, create a new issue with a descriptive title and clear description
3. Include steps to reproduce the issue if applicable
4. Add relevant screenshots if helpful

### Pull Requests

We welcome contributions through pull requests:

1. Fork the repository
2. Create a new branch for your changes (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Run tests and ensure code quality (see below)
5. Commit your changes with clear and descriptive commit messages
6. Push your branch to your forked repository
7. Open a pull request to the main repository's `main` branch

### Development Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/warsawjs-blog.git
cd warsawjs-blog
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start
```

## Code Quality Standards

Before submitting a pull request, ensure your code meets our quality standards:

1. Run linting

```bash
npm run lint
```

2. Format your code

```bash
npm run format
```

3. Make sure your changes are responsive and work across different browsers

## Adding a Blog Post

If you're adding a new blog post:

1. Follow the existing format in the code
2. Include all required metadata (title, description, author, date, etc.)
3. Provide appropriate images that match the WarsawJS style
4. Test your additions on different screen sizes

## Branching Strategy

- `main` branch contains the stable version
- Create feature branches for new features or bug fixes
- Use descriptive branch names prefixed with the type (e.g., `feature/`, `bugfix/`, `docs/`)

## Commit Message Guidelines

We follow conventional commit messages:

- `fix:` for bug fixes
- `feat:` for new features
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or modifying tests
- `chore:` for changes to the build process or auxiliary tools

## License

By contributing to this project, you agree that your contributions will be licensed under the project's ISC License.

Thank you for contributing to WarsawJS Blog!

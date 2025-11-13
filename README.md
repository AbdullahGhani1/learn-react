# Learn React 🚀

A comprehensive monorepo containing React learning projects, ranging from fundamental concepts to advanced patterns. Built with modern tooling including TypeScript, ESLint, Prettier, and Husky for maintaining code quality.

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.x-000000?style=flat-square&logo=bun&logoColor=white)](https://bun.sh/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Projects](#projects)
- [Code Quality Tools](#code-quality-tools)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This repository serves as a comprehensive learning path for React development, organized as a monorepo with multiple projects demonstrating various React concepts, patterns, and best practices. Each project is self-contained with its own dependencies and configuration.

## ✨ Features

- **Monorepo Architecture** - Organized workspace structure using Bun workspaces
- **TypeScript Support** - Full TypeScript integration across all projects
- **Modern Tooling** - ESLint, Prettier, and Husky for code quality
- **Pre-commit Hooks** - Automated linting and formatting before commits
- **React Best Practices** - Following official React documentation and community standards
- **Progressive Learning** - Projects organized from beginner to advanced concepts

## 📁 Project Structure

```
learn-react/
├── .husky/                    # Git hooks configuration
├── projects/
│   ├── 00_react/             # React fundamentals
│   │   ├── 01-vite-react-app
│   │   ├── 02-custom-react-app
│   │   ├── 03-tailwind-config
│   │   ├── 04-ngChanger
│   │   ├── 05-password-generator
│   │   ├── 06-currency-convertor
│   │   └── 07-react-router
│   ├── 01_react_dev/         # React development patterns
│   │   ├── 03-pizza-menu
│   │   └── 05-steps
│   ├── 1-Getting_Started/    # Basic JavaScript and React intro
│   ├── 2-Js_Refresher/       # JavaScript ES6+ concepts
│   ├── 3-expense-tracker/    # State management & lists
│   ├── 4-course-goal/        # Forms & styling
│   ├── 5-user-data/          # Portals & refs
│   ├── 6-user-login/         # Side effects & reducers
│   ├── learn-react-ts/       # TypeScript with React
│   │   ├── react-app
│   │   └── game-grid
│   └── react-essential/      # Core React essentials
├── eslint.config.js          # ESLint configuration
├── .prettierrc               # Prettier configuration
├── .lintstagedrc             # Lint-staged configuration
└── package.json              # Root package configuration
```

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **[Bun](https://bun.sh/)** v1.2.21 or higher
- **[Node.js](https://nodejs.org/)** v18 or higher (for some dependencies)
- **[Git](https://git-scm.com/)** for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/learn-react.git
cd learn-react
```

### 2. Install Dependencies

```bash
bun install
```

This will install all dependencies for the root workspace and all projects.

### 3. Run Individual Projects

Navigate to any project directory and run:

```bash
cd projects/00_react/05-password-generator
bun run dev
```

## 📜 Available Scripts

Run these commands from the root directory:

| Script           | Description                            |
| ---------------- | -------------------------------------- |
| `bun install`    | Install all dependencies for workspace |
| `bun run lint`   | Run ESLint on all projects             |
| `bun run format` | Format all files with Prettier         |
| `bun run dev`    | Run the root index.ts file             |

### Project-Specific Scripts

Within each project directory:

| Script            | Description              |
| ----------------- | ------------------------ |
| `bun run dev`     | Start development server |
| `bun run build`   | Build for production     |
| `bun run preview` | Preview production build |
| `bun run lint`    | Lint project files       |

## 🎓 Projects

### 00_react - React Fundamentals

#### 01. Vite React App

Basic Vite + React setup with modern build tooling.

#### 02. Custom React App

Understanding React's core principles by building a mini React implementation.

#### 03. Tailwind Config

Integrating Tailwind CSS with React for utility-first styling.

#### 04. Background Changer

Working with state and event handlers to dynamically change UI.

#### 05. Password Generator

**Concepts**: useState, useCallback, useRef, useEffect

- Generate secure random passwords
- Copy to clipboard functionality
- Real-time password customization

#### 06. Currency Converter

**Concepts**: Custom hooks, API integration, controlled components

- Real-time currency conversion
- Custom `useCurrencyInfo` hook
- API data fetching

#### 07. React Router

**Concepts**: React Router v7, routing, navigation

- Multi-page application setup
- Nested routes
- Navigation components

### 01_react_dev - Development Patterns

#### 03. Pizza Menu

**Concepts**: Component composition, props, conditional rendering

- Menu display with availability status
- Component-based architecture

#### 05. Steps

**Concepts**: State management, multi-step forms

- Step-by-step navigation
- State persistence

### Advanced Projects

#### 3. Expense Tracker

**Concepts**: Lists, keys, state lifting, derived state

- Add and filter expenses
- Chart visualization
- Dynamic expense lists

#### 4. Course Goal

**Concepts**: CSS modules, styled components, dynamic styling

- Goal management
- Form validation with visual feedback

#### 5. User Data

**Concepts**: Portals, refs, forward refs

- User data management
- Modal dialogs using portals
- Accessible form controls

#### 6. User Login

**Concepts**: useEffect, useReducer, Context API

- Authentication flow
- Side effects management
- Local storage integration

### learn-react-ts - TypeScript Integration

#### React App

Basic TypeScript + React patterns with Bootstrap integration.

#### Game Grid

**Concepts**: Chakra UI, TypeScript, component libraries

- Responsive game grid layout
- Dark mode support
- Modern UI components

## 🛠️ Code Quality Tools

### ESLint

Configured with:

- **typescript-eslint** - TypeScript-specific linting rules
- **eslint-plugin-react-hooks** - Enforces Rules of Hooks
- **eslint-plugin-react-refresh** - Validates Fast Refresh constraints
- **eslint-config-standard** - JavaScript Standard Style
- **eslint-config-prettier** - Disables conflicting Prettier rules

### Prettier

Automatic code formatting with consistent style across the entire codebase.

### Husky + lint-staged

Pre-commit hooks that automatically:

1. Run ESLint and auto-fix issues
2. Format code with Prettier
3. Block commits if linting errors exist

Configuration in `.lintstagedrc`:

```json
{
   "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
   "*.{css,md}": "prettier --write"
}
```

## 🔄 Git Workflow

### Branch Strategy

- `main` - Production-ready code
- `react-ts` - Development branch for TypeScript projects
- Feature branches - For specific features or fixes

### Commit Standards

Commits are automatically validated and formatted before being committed thanks to Husky pre-commit hooks.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run `bun run lint` and `bun run format`
5. Commit your changes (pre-commit hooks will run automatically)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Coding Standards

- Write meaningful commit messages
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed
- Ensure all linting passes before committing

## 📖 Learning Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Bun Documentation](https://bun.sh/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Abdullah Ghani**

- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Bun team for the blazing-fast runtime
- All contributors and the open-source community

---

<div align="center">
  <strong>Happy Learning! 🎉</strong>
  <br>
  <sub>Built with ❤️ using React and TypeScript</sub>
</div>

# Game Grid Project 🎮

A modern React + TypeScript application built with Vite, featuring a responsive grid layout powered by Chakra UI. This project demonstrates the implementation of a game discovery platform with advanced UI components and modern development practices.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-3.29.0-319795?style=flat-square&logo=chakra-ui&logoColor=white)](https://chakra-ui.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

## 📚 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Setup - Step by Step](#project-setup---step-by-step)
- [Development Journey](#development-journey)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Code Quality Setup](#code-quality-setup)
- [What I Learned](#what-i-learned)
- [Future Enhancements](#future-enhancements)

## 🎯 Project Overview

This game grid application is a learning project focused on building a responsive game discovery platform. It implements modern React patterns, TypeScript for type safety, and Chakra UI for a beautiful, accessible component library.

## ✨ Features

- **Responsive Grid Layout** - Adapts seamlessly from mobile to desktop
- **Chakra UI Integration** - Modern, accessible component library
- **Dark Mode Support** - Toggle between light and dark themes
- **TypeScript** - Full type safety throughout the application
- **ESLint Configuration** - Code quality and consistency
- **Fast Refresh** - Instant feedback during development with Vite

## 🛠️ Tech Stack

### Core Technologies

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Vite 7.2.2** - Build tool and dev server

### UI Framework

- **Chakra UI 3.29.0** - Component library
- **React Icons 5.5.0** - Icon library
- **next-themes 0.4.6** - Theme management

### Development Tools

- **ESLint** - Code linting
- **typescript-eslint** - TypeScript-specific linting
- **eslint-plugin-react-hooks** - React Hooks rules
- **eslint-plugin-react-refresh** - Fast Refresh validation

## 📋 Project Setup - Step by Step

### Step 1: Initial Project Creation

```bash
# Navigate to the learn-react-ts directory
cd projects/learn-react-ts

# Create a new Vite project with React and TypeScript
bun create vite game-grid --template react-ts

# Navigate into the project
cd game-grid
```

### Step 2: Install Dependencies

```bash
# Install core dependencies
bun install

# Install Chakra UI and its dependencies
bun add @chakra-ui/react @emotion/react

# Install additional UI libraries
bun add react-icons next-themes

# Install development dependencies
bun add -d @types/node vite-tsconfig-paths
```

### Step 3: Configure Chakra UI

Created the Chakra UI provider setup:

**File:** `src/components/ui/provider.tsx`

```typescript
import { ChakraProvider } from '@chakra-ui/react'

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}
```

### Step 4: Setup Theme Support

Implemented dark mode with next-themes:

**File:** `src/components/ui/color-mode.tsx`

- Created ColorModeProvider component
- Added theme toggle functionality
- Integrated with Chakra UI's color mode

### Step 5: Create Navigation Component

Built the main navigation bar:

**File:** `src/components/organism/NavBar.tsx`

```typescript
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../../assets/logo.webp'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
```

### Step 6: Setup Responsive Grid Layout

Implemented a responsive grid in `App.tsx`:

```typescript
<Grid
  templateAreas={{
    base: `"nav" "main"`,           // Mobile: stacked layout
    lg: `"nav nav" "aside main"`,   // Desktop: sidebar + main
  }}
  gap="4"
  padding="4"
>
  <GridItem area="nav">
    <NavBar />
  </GridItem>
  <GridItem area="aside" display={{ base: 'none', lg: 'block' }}>
    Aside
  </GridItem>
  <GridItem area="main">
    Main
  </GridItem>
</Grid>
```

### Step 7: Configure ESLint

Setup ESLint with TypeScript and React rules:

**File:** `eslint.config.js`

- Configured typescript-eslint
- Added React Hooks plugin
- Setup React Refresh plugin
- Configured import ordering rules

### Step 8: Setup Code Quality Tools (Root Level)

Configured project-wide code quality tools in the monorepo root:

1. **Prettier Configuration**

   ```json
   {
      "semi": true,
      "singleQuote": true,
      "tabWidth": 3,
      "trailingComma": "es5"
   }
   ```

2. **ESLint Configuration**
   - Added typescript-eslint
   - Configured eslint-plugin-react-hooks
   - Setup eslint-plugin-react-refresh
   - Added import order rules

3. **Husky Pre-commit Hooks**

   ```bash
   # Install husky
   bun add -d husky
   bun run prepare

   # Create pre-commit hook
   echo "bunx lint-staged" > .husky/pre-commit
   ```

4. **Lint-staged Configuration**
   ```json
   {
      "*.{ts,tsx,js,jsx}": ["eslint --fix", "prettier --write"],
      "*.{css,md}": "prettier --write"
   }
   ```

### Step 9: Git Workflow

#### Created Feature Branch

```bash
# Created react-ts branch for TypeScript development
git checkout -b react-ts

# Made commits for various features
git commit -m "install chakra UI"
git commit -m "responsive Design"
git commit -m "building a navbar"
git commit -m "setup prettier"
git commit -m "Setup husky"
git commit -m "add Eslinter"
```

#### Merged to Main

```bash
# Cleaned working directory
git submodule update --init
git checkout main

# Fast-forward merge
git merge react-ts
# Result: 286 files changed, 9,531 insertions(+), 5,988 deletions(-)
```

#### Created Production README

```bash
git commit -m "docs: add production-level README and fix CSS syntax error"
```

#### Pushed to Remote

```bash
git push origin main
```

#### Branch Cleanup

```bash
# Delete local branches
git branch -d react-ts pizza-menu

# Delete remote branches
git push origin --delete react-ts pizza-menu
```

#### Created Project Branch

```bash
# Create dedicated branch for game-grid development
git checkout -b project/game-grid
```

## 📁 Project Structure

```
game-grid/
├── src/
│   ├── components/
│   │   ├── organism/
│   │   │   └── NavBar.tsx          # Navigation component
│   │   └── ui/
│   │       ├── color-mode.tsx      # Dark mode implementation
│   │       ├── provider.tsx        # Chakra UI provider
│   │       ├── toaster.tsx         # Toast notifications
│   │       └── tooltip.tsx         # Tooltip component
│   ├── assets/
│   │   ├── logo.webp               # Project logo
│   │   └── react.svg               # React logo
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
├── public/
│   └── vite.svg                    # Vite logo
├── eslint.config.js                # ESLint configuration
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json               # App-specific TS config
├── tsconfig.node.json              # Node-specific TS config
├── vite.config.ts                  # Vite configuration
└── package.json                    # Project dependencies
```

## 📜 Available Scripts

### Development

```bash
# Start development server with hot reload
bun run dev
```

Runs the app at `http://localhost:5173`

### Build

```bash
# Type check and build for production
bun run build
```

Outputs to `dist/` directory

### Preview

```bash
# Preview production build locally
bun run preview
```

### Linting

```bash
# Run ESLint on all files
bun run lint

# Auto-fix linting issues
bun run lint --fix
```

## 🔧 Code Quality Setup

### Pre-commit Hooks

Every commit automatically:

1. ✅ Runs ESLint and auto-fixes issues
2. ✅ Formats code with Prettier
3. ✅ Blocks commit if unfixable errors exist

### ESLint Rules

- **typescript-eslint** - TypeScript best practices
- **react-hooks** - Enforces Rules of Hooks
- **react-refresh** - Fast Refresh constraints
- **import/order** - Consistent import ordering

### Import Order Convention

```typescript
// 1. External dependencies
import { Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';

// 2. Internal imports
import NavBar from './components/organism/NavBar';
import './styles.css';
```

## 🎓 What I Learned

### 1. **Chakra UI Mastery**

- Component composition patterns
- Responsive design with breakpoints
- Theme customization and dark mode
- Accessible UI components out of the box

### 2. **Grid Layout System**

- Template areas for semantic layouts
- Responsive grid configurations
- Mobile-first design approach
- Conditional rendering based on breakpoints

### 3. **TypeScript Integration**

- Type-safe component props
- Interface definitions for UI components
- Generic types in React components
- TypeScript configuration for React

### 4. **Modern Build Tools**

- Vite for fast development and builds
- Hot Module Replacement (HMR)
- TypeScript path aliases
- Optimized production builds

### 5. **Code Quality Automation**

- Pre-commit hooks with Husky
- Automatic code formatting with Prettier
- Linting with ESLint
- Git workflow best practices

### 6. **Git Workflow**

- Feature branch development
- Fast-forward merges
- Branch management and cleanup
- Semantic commit messages

### 7. **Monorepo Management**

- Workspace organization
- Shared tooling configuration
- Project isolation
- Dependency management

## 🚀 Future Enhancements

### Planned Features

- [ ] Game API integration
- [ ] Game cards with images and details
- [ ] Search and filter functionality
- [ ] Sorting options
- [ ] Pagination or infinite scroll
- [ ] Game details page
- [ ] Platform filtering
- [ ] Genre filtering
- [ ] Favorites/Wishlist feature
- [ ] User authentication

### Technical Improvements

- [ ] Add unit tests (Vitest)
- [ ] Setup E2E tests (Playwright)
- [ ] Implement state management (Zustand/Redux)
- [ ] Add React Query for data fetching
- [ ] Setup CI/CD pipeline
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] SEO optimization

## 📖 Resources & Documentation

### Official Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Chakra UI Docs](https://chakra-ui.com/docs/getting-started)
- [Vite Guide](https://vitejs.dev/guide/)

### Learning Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Chakra UI Examples](https://chakra-ui.com/examples)
- [Vite Plugin Ecosystem](https://vitejs.dev/plugins/)

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting (`bun run lint`)
5. Commit your changes (pre-commit hooks will run)
6. Push to the branch
7. Open a Pull Request

## 📝 Development Notes

### Design Decisions

1. **Chakra UI over Material-UI**
   - Better TypeScript support
   - More flexible theming system
   - Smaller bundle size
   - Better accessibility defaults

2. **Vite over Create React App**
   - Faster development server
   - Better build performance
   - Native ES modules support
   - More flexible configuration

3. **Bun over npm/yarn**
   - Faster package installation
   - Built-in TypeScript support
   - Better monorepo support
   - All-in-one JavaScript runtime

### Performance Considerations

- Using Grid layout for better performance than flexbox for complex layouts
- Lazy loading components (future implementation)
- Image optimization with WebP format
- Code splitting by route (future implementation)

### Accessibility Features

- Semantic HTML structure
- Keyboard navigation support (via Chakra UI)
- ARIA labels and roles (via Chakra UI)
- Color contrast compliance
- Screen reader support

## 👤 Author

**Abdullah Ghani**

- GitHub: [@AbdullahGhani1](https://github.com/AbdullahGhani1)
- Project: [learn-react](https://github.com/AbdullahGhani1/learn-react)

## 📄 License

This project is part of a learning repository and is available under the MIT License.

---

<div align="center">
  <strong>Built with ❤️ while learning React and TypeScript</strong>
  <br>
  <sub>Part of the learn-react monorepo</sub>
</div>

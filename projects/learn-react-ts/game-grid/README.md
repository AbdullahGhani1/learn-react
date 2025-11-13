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

## 📝 Development Notes

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

# Slumdog Millionaire

A "Who Wants to Be a Millionaire" style quiz game built with Next.js, inspired by the award-winning movie [Slumdog Millionaire](https://www.imdb.com/title/tt1010048/).

## Overview

This project recreates the popular quiz show format where players answer increasingly difficult questions to win virtual money.

## Tech Stack

- **Framework**: Next.js 15 with Turbopack
- **Frontend**: React 19, Zustand
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Linting**: ESLint with Airbnb config
- **Deployment**: Vercel

## Game Flow

1. **Welcome Screen**: Player starts the game
2. **Question Screen**: 
   - Multiple choice questions (A, B, C, D)
   - Increasing difficulty and prize value
   - Current prize status displayed
3. **Results Screen**: Shows final score and option to play again

## Getting Started

### Prerequisites

- Node.js 18+ (LTS)
- npm (Node Package Manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/vvfesik/slumdog-millionaire.git
cd slumdog-millionaire

# Install dependencies
npm install
```

### Development

```bash
# Start the development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Linting

```bash
# Run ESLint
npm run lint

# Fix automatically fixable issues
npm run lint:fix
```

### Design Tokens

The project uses Style Dictionary to manage design tokens and generate consistent design assets across the platform. Tokens are defined in JSON format and exported from Figma using the [Design Tokens plugin](https://github.com/lukasoppermann/design-tokens).

```bash
# Generate css variables from design tokens
npm run generate:tokens
```

This command uses the configuration in `style-dictionary.config.json` to transform design tokens from source format into various platform-specific formats.

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Project Structure

```
slumdog-millionaire/
├── src/
│   ├── app/                     # App router pages
│   ├── components/              # Shared components with collocated CSS modules
│   ├── lib/
│   │   ├── actions.ts           # Server actions
│   │   ├── config.json          # Game configuration (questions, answers, etc.)
│   │   ├── definitions.ts       # TypeScript definitions
│   │   └── utils/               # Utility functions
│   ├── store/                   # Zustand store
│   └── styles/                  # Global styles and design tokens
├── public/                      # Static assets
├── package.json                 # Project dependencies
└── style-dictionary.config.json # Config for design tokens generation
```

## Deployment

The application is configured for easy deployment on Vercel.

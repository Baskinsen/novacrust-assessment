# Novacrust Assessment - Crypto Swap Application

A modern, fully responsive crypto swap application built with React Router, featuring multi-step forms for cryptocurrency-to-cash conversions and recipient details management.

## 🎯 Project Overview

This application demonstrates a production-ready crypto swap interface with:

- **Multi-step form workflow** for crypto-to-cash conversions
- **Recipient details management** with bank account and contact information
- **Fully responsive design** optimized for mobile, tablet, and desktop
- **Modern UI/UX** with smooth animations and transitions
- **Type-safe forms** with comprehensive validation

## 🚀 Features

### Core Functionality
- ✅ Crypto-to-cash swap interface with amount input and currency selection
- ✅ Wallet selection (MetaMask, Coinbase, Trust Wallet, etc.)
- ✅ Two-step recipient details form:
  - **Step 1**: Bank selection, account number with auto-verification, account name
  - **Step 2**: Recipient email and phone number with country code selector
- ✅ Coming soon placeholders for Cash-to-Crypto and Cash-to-Fiat features

### Design & UX
- 🎨 **Responsive Design**: Mobile-first approach with breakpoints at 640px (sm), 768px (md), and 1024px (lg)
- 🎭 **Smooth Animations**: Framer Motion for page transitions and form step animations
- 🎯 **Pixel-perfect Styling**: Custom fonts (Outfit, Instrument Sans, Clash Display) with responsive scaling
- 🌗 **Dark Mode Ready**: CSS variables for easy theme switching
- ♿ **Accessible**: ARIA labels, semantic HTML, keyboard navigation support

## 📦 Tech Stack & Packages

### Core Framework
- **React 19.2.3** - Latest React with improved performance and features
- **React Router 7.10.1** - Modern routing with server-side rendering support
- **TypeScript 5.9.2** - Type safety and enhanced developer experience
- **Vite 7.1.7** - Fast build tool with HMR

### UI Components & Styling
- **Tailwind CSS 4.1.13** - Utility-first CSS framework for rapid UI development
- **@tailwindcss/vite 4.1.13** - Vite plugin for Tailwind CSS v4
- **tw-animate-css 1.4.0** - Animation utilities for Tailwind
- **Radix UI** - Headless, accessible component primitives:
  - `@radix-ui/react-select` - Accessible select/dropdown components
  - `@radix-ui/react-tabs` - Tab navigation components
  - `@radix-ui/react-slot` - Composition utility for component merging
- **class-variance-authority 0.7.1** - CVA for managing component variants
- **clsx 2.1.1** - Utility for constructing className strings
- **tailwind-merge 3.4.0** - Merge Tailwind classes without conflicts

### Form Management
- **react-hook-form 7.68.0** - Performant form library with:
  - Built-in validation
  - Controlled and uncontrolled inputs
  - TypeScript support
  - Minimal re-renders

### Animations
- **framer-motion 12.23.26** - Production-ready animation library for:
  - Page transitions
  - Form step animations (slide in/out effects)
  - Smooth micro-interactions

### Icons
- **lucide-react 0.561.0** - Beautiful, consistent icon set (ArrowLeft, ChevronDown, Search, etc.)

### Server & Deployment
- **@react-router/node 7.10.1** - Node.js server adapter
- **@react-router/serve 7.10.1** - Production server
- **isbot 5.1.31** - Bot detection for SSR optimization

## 🏗️ Project Structure

```
novacrust-assessment/
├── app/
│   ├── routes/                    # Page routes
│   │   ├── home.tsx              # Main swap interface with tabs
│   │   ├── recipient-details.tsx # Recipient details page
│   │   └── font-test.tsx         # Font testing page
│   ├── components/               # Reusable components
│   │   ├── CryptoSwapForm.tsx   # Main swap form
│   │   ├── CryptoInput.tsx      # Crypto amount input with search
│   │   ├── RecipientDetailsForm.tsx # Multi-step recipient form
│   │   └── ui/                  # Shadcn-style UI primitives
│   │       ├── input.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       └── button.tsx
│   ├── coming-soon/             # Coming soon component
│   ├── constants/               # App constants
│   │   └── data.ts             # Coin, wallet, bank, country data
│   ├── lib/                    # Utilities
│   │   └── utils.ts           # Helper functions (cn, etc.)
│   ├── app.css                # Global styles & Tailwind config
│   └── root.tsx               # Root layout with fonts
├── public/                    # Static assets
└── package.json
```

## 🎨 Design Decisions

### Responsive Strategy
- **Mobile-first approach**: Base styles target mobile (0px+), then scale up
- **Breakpoints**:
  - `sm:` 640px+ (small tablets, landscape phones)
  - `md:` 768px+ (tablets)
  - `lg:` 1024px+ (desktops)
- **Font sizing**: Pixel-based values that scale down on smaller viewports
  - Labels: `text-[14px] sm:text-[16px]`
  - Headings: `text-[18px] sm:text-[20px]`
- **Spacing**: Responsive padding and gaps
  - Containers: `p-4 sm:p-6`
  - Form gaps: `gap-4 sm:gap-6`
- **Input heights**: Consistent across all form elements
  - Mobile: `h-10` (40px)
  - Tablet+: `sm:h-12` (48px)

### Form Validation
- Real-time validation with `react-hook-form`
- Account number: 10-digit numeric validation with auto-verification
- Email: Pattern matching for valid email format
- Phone: Required field with country code selector
- Bank & Wallet: Required selections

### Animations
- **Page transitions**: Fade and scale effects (0.3s duration)
- **Form steps**: Horizontal slide animations (left/right)
- **Smooth easing**: `ease-out` for natural feel

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server with Hot Module Replacement:

```bash
npm run dev
```

Application runs at `http://localhost:5173`

### Type Checking

```bash
npm run typecheck
```

### Building for Production

```bash
npm run build
```

Outputs to `build/` directory:
- `build/client/` - Static assets
- `build/server/` - Server-side code

### Production Server

```bash
npm start
```

## 🐳 Docker Deployment

Build and run with Docker:

```bash
docker build -t novacrust-assessment .
docker run -p 3000:3000 novacrust-assessment
```

Deploy to any platform supporting Docker:
- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean
- Fly.io
- Railway

## 📱 Responsive Breakpoints Tested

- ✅ **Mobile**: 375×667 (iPhone SE)
- ✅ **Tablet**: 768×1024 (iPad)
- ✅ **Desktop**: 1440×900 (Standard Desktop)

All pages verified for:
- No horizontal scrolling
- Readable text at all sizes
- Usable forms and inputs
- Consistent spacing and visual hierarchy

## 🎯 What Was Achieved

### ✅ Completed Features
1. **Crypto Swap Interface**
   - Amount input with currency selection
   - Searchable coin dropdown
   - Wallet selection (Pay from/Pay to)
   - Form validation and submission

2. **Recipient Details Form**
   - Multi-step workflow (2 steps)
   - Bank account information collection
   - Auto-verification simulation for account numbers
   - Email and phone number with country codes
   - Smooth animations between steps

3. **Responsive Design**
   - Mobile-first implementation
   - Pixel-based font scaling
   - Adaptive layouts for all screen sizes
   - Consistent component heights
   - Optimized touch targets for mobile

4. **UI/UX Polish**
   - Custom font integration (Google Fonts + Fontshare)
   - Smooth page transitions
   - Accessible form controls
   - Error messaging
   - Loading states

### 🔮 Future Enhancements
- Cash-to-Crypto conversion flow
- Cash-to-Fiat loan application
- Backend API integration
- Real account verification
- Transaction history
- User authentication

## 📄 License

Private project for assessment purposes.

---

Built with ❤️ using React Router, TypeScript, and Tailwind CSS.

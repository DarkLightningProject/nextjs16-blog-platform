# Next.js 16 Blog Platform

A modern blog platform built with Next.js 16, TypeScript, Tailwind CSS, and Convex. It supports user authentication, blog creation, comments, search, and live presence features.

## Features

- Blog listing and detailed post pages
- Create and publish blog posts with image upload support
- User authentication with Better Auth
- Commenting system per post
- Live presence tracking for blog readers
- Search for blog posts
- Responsive UI with dark/light theme support
- Server-side caching and optimized data fetching

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Convex backend
- Better Auth
- Shadcn UI components
- Zod validation

## Project Structure

```bash
.
├── app/                 # App router pages and server actions
├── components/          # Reusable UI components
├── convex/              # Convex schema, auth, and functions
├── lib/                 # Auth and utility helpers
├── public/              # Static assets
├── schemas/             # Zod validation schemas
├── package.json         # Scripts and dependencies
├── next.config.ts       # Next.js config
├── tsconfig.json        # TypeScript config
├── pnpm-lock.yaml       # Lock file
└── README.md            # Project documentation
```

## Prerequisites

Before running the project, make sure you have:

- Node.js 20+
- pnpm
- A Convex account and deployment configured

## Installation

1. Clone the repository

```bash
git clone <your-repository-url>
cd nextjs-16-tutorial-yt
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CONVEX_SITE_URL=http://localhost:3000
SITE_URL=http://localhost:3000
```

You may also need to configure your Convex deployment if this project is connected to a remote environment.

## Running the Project

Start the Convex backend in one terminal:

```bash
npx convex dev
```

Start the Next.js app in another terminal:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

```bash
pnpm dev      # Start the development server
pnpm build    # Build the production app
pnpm start    # Start the production server
pnpm lint     # Run ESLint checks
```

## Authentication

This project uses Better Auth with Convex integration. Users can sign up, log in, and access protected blog features.

## Blog Features

- View all blog posts on the home blog page
- Open a full article page with post details
- Publish blog content with title, body, and image
- Add comments under each post
- Search posts by title

## Notes

This project is designed as a tutorial-style blog platform and is a great starting point for learning:

- App Router patterns in Next.js 16
- Convex database and real-time features
- Better Auth integration
- Next.js server actions and caching
- Component-driven UI with Tailwind and Shadcn

## License

This project is available for learning and personal use.

## Contributing

Contributions are welcome. If you want to improve the project, create a branch, make your changes, and open a pull request.

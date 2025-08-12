# Overview

ChallanSettle is a legal services web application that provides professional traffic challan (traffic violation ticket) settlement services. The application allows users to submit their traffic violation cases and have legal professionals handle the entire court process without requiring personal appearance. The platform features contact form submission, testimonial display, and a complete landing page showcasing the service offerings.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom color scheme and design tokens
- **Routing**: Wouter for client-side routing (lightweight React router)
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod schema validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API endpoints for contacts and testimonials
- **Validation**: Zod schemas for request/response validation
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Development**: Hot module replacement via Vite integration

## Database Schema
The application uses Drizzle ORM with PostgreSQL dialect for database operations:

### Tables:
- **contacts**: Stores user contact requests with fields for name, phone, email, description, and preferred contact method
- **testimonials**: Stores customer testimonials with name, location, rating, and content

### Key Design Decisions:
- UUID primary keys for all tables using PostgreSQL's `gen_random_uuid()`
- Zod schema integration for type-safe database operations
- Separate insert and select types for better type safety

## External Dependencies

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe database toolkit with schema migrations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI & Styling
- **shadcn/ui**: Pre-built accessible UI components
- **Radix UI**: Unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

### Development & Build Tools
- **Vite**: Fast build tool with HMR support
- **Replit Integration**: Development environment optimizations and error handling
- **TypeScript**: Static type checking across the entire codebase

### Third-party Services
- **Unsplash**: External image hosting for process step illustrations
- **Google Fonts**: Web font delivery for custom typography (Architects Daughter, DM Sans, Fira Code, Geist Mono)

The architecture follows a clean separation of concerns with shared schemas between frontend and backend, ensuring type safety across the full stack while maintaining flexibility for future database provider changes.
# Overview

This is a full-stack web application built with React (frontend) and Express.js (backend) that serves as a legal services website called "Challan Settle" with a contact form. The application features a modern UI built with shadcn/ui components and Tailwind CSS, with data persistence using Drizzle ORM and PostgreSQL. The application is designed for a law firm specializing in challan settlements, allowing potential clients to submit contact forms with their legal problems.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful API with JSON responses
- **Request Handling**: Express middleware for JSON parsing and URL encoding
- **Error Handling**: Centralized error handling middleware
- **Logging**: Custom request/response logging middleware for API endpoints
- **Development**: Hot reload with tsx for TypeScript execution

## Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Data Storage**: In-memory storage implementation with interface for easy database integration
- **Validation**: Zod schemas for runtime type validation and form validation

## Project Structure
- **Monorepo Layout**: Shared types and schemas in `/shared` directory
- **Client Code**: React application in `/client` directory
- **Server Code**: Express API in `/server` directory
- **Type Safety**: Shared TypeScript interfaces between frontend and backend

## Key Features
- Contact form submission with validation (name, phone, email, problem description)
- Email notifications to info.challansettle@gmail.com for all form submissions
- Admin endpoint to retrieve all contact submissions
- Responsive design with mobile-first approach
- Toast notifications for user feedback
- Form validation with detailed error messages

## Development Workflow
- **Development**: Single command runs both frontend and backend
- **Build Process**: Vite builds frontend, esbuild bundles backend
- **Database**: Drizzle Kit handles schema management and migrations
- **Type Checking**: TypeScript compilation without emission for type validation

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Connection**: Uses DATABASE_URL environment variable for connection

## Email Service
- **SendGrid**: Email delivery service (@sendgrid/mail)
- **Configuration**: Uses SENDGRID_API_KEY environment variable
- **Purpose**: Sends contact form submissions to info.challansettle@gmail.com

## UI Libraries
- **Radix UI**: Headless UI components for accessibility and behavior
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework
- **Class Variance Authority**: For component variant management

## Form & Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation for both client and server
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit environment
- **PostCSS**: CSS processing with Tailwind CSS plugin
- **TypeScript**: Full type safety across the stack

## Server Dependencies
- **Express.js**: Web server framework
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)
- **CORS**: Cross-origin resource sharing (implied for API access)

## Build & Development
- **Vite**: Frontend development server and build tool
- **esbuild**: Fast TypeScript/JavaScript bundler for backend
- **tsx**: TypeScript execution for development
- **Drizzle Kit**: Database schema management and migrations
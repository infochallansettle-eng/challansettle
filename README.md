# Challan Settle - Legal Services Website

A professional website for legal services specializing in challan settlements with court representation, ensuring no personal appearance is required.

## Features

- **No Personal Appearance Required**: Professional legal representation in court
- **Contact Form**: Validated form for client inquiries with email notifications
- **Responsive Design**: Mobile-first approach with modern UI
- **Professional Branding**: Navy and gold color scheme for legal services
- **Email Integration**: Automatic notifications via SendGrid

## Process

1. **Document Compilation**: Gather and prepare all necessary legal documents
2. **Filing**: Professional filing with appropriate court authorities
3. **Court Appearance**: Expert legal representation on your behalf
4. **Settlement**: Complete challan settlement with fine deposit

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Backend**: Express.js with TypeScript
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: SendGrid for notifications
- **Build Tools**: Vite for development and production

## Getting Started

### Prerequisites

- Node.js 20+
- SendGrid API Key
- PostgreSQL database (optional - uses in-memory storage by default)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd challan-settle
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
SENDGRID_API_KEY=your_sendgrid_api_key
DATABASE_URL=your_database_url (optional)
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment

### Replit Deployments (Recommended)
1. Click the "Deploy" button in your Replit workspace
2. Choose "Autoscale" deployment type
3. Add payment method if required
4. Deploy to get a live `.replit.app` URL

### Other Deployment Options
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Deploy frontend with serverless functions
- **VPS**: Traditional server deployment with PM2 and Nginx

## Email Setup

To receive contact form submissions:

1. Create a SendGrid account at [sendgrid.com](https://sendgrid.com)
2. Verify your sender email address (info.challansettle@gmail.com)
3. Generate an API key with "Mail Send" permissions
4. Add the API key to your environment variables

## Contact

For legal services and challan settlement inquiries, contact us through the website form or reach out directly.

## License

Private - All rights reserved
# Adventreon

Adventreon is a full-stack media platform for independent artists, performers, and event hosts. The application provides tools for publishing, organizing, and discovering digital shows and episodic video content.

The platform supports separate experiences for audience members, hosts, and administrators. Users can explore performers and shows by category, while approved hosts and managers can create and maintain profiles, shows, episodes, images, and video content.

> **Project status:** Adventreon is an experimental full-stack application and portfolio project. The current codebase targets an older JavaScript ecosystem and requires dependency, security, and infrastructure updates before production deployment.

## Features

* User registration and authentication
* JSON Web Token authentication
* Role-based access for users, hosts, and managers
* Public host, show, and episode profiles
* Category-based media discovery
* Show and episode creation tools
* Host and administrator control panels
* User, show, and episode management
* AWS S3 image uploads using signed URLs
* Vimeo video upload and playback integration
* Responsive React interface
* MySQL-backed content and user data
* Express REST API
* Production React build served through Express

## User Roles

### Users

Standard users can:

* Create an account and sign in
* Browse hosts, shows, and episodes
* Explore content by category
* View artist and show profiles
* Manage their account settings

### Hosts

Hosts receive additional tools for managing their content:

* Create and update a host profile
* Create shows
* Add episodes to shows
* Update existing shows and episodes
* Access host-specific settings and tools

### Managers

Managers have broader administrative access:

* Invite and manage hosts
* Invite additional managers
* Create and edit content
* Update user, show, and episode records
* Delete users, shows, and episodes
* Upload images and videos
* Access management-specific controls

## Content Model

The application is organized around three primary content entities:

* **Users and hosts** — Account information, profile details, biography, images, categories, and external links
* **Shows** — Show descriptions, hosts, categories, scheduling information, images, video links, and credits
* **Episodes** — Individual pieces of show content with their own descriptions, media, scheduling details, and credits

The database also includes support for tracking content that users have liked.

## Technology Stack

### Frontend

* React
* React Router
* React Context
* Redux and Redux Thunk
* Styled Components
* Material UI
* Axios
* React Hook Form
* React Dropzone
* Vimeo React components

### Backend

* Node.js
* Express
* Passport
* Passport JWT
* JSON Web Tokens
* MySQL
* Express File Upload
* AWS SDK
* Vimeo Node.js SDK
* Axios
* CORS
* dotenv

### Infrastructure and Services

* MySQL or JawsDB
* AWS S3
* Vimeo
* Heroku-compatible production build
* Express static file hosting

## Application Architecture

Adventreon uses a client-server architecture:

```text
React Client
    |
    | HTTP requests
    v
Express API
    |
    +-- Authentication and role validation
    +-- User, host, show, and episode routes
    +-- AWS S3 image upload signing
    +-- Vimeo video integration
    |
    v
MySQL Database
```

The React application is located in the `client` directory. During development, the React development server and Express API run concurrently. In production, Express serves the compiled React application from `client/build`.

## Repository Structure

```text
Shtiker_iso/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── API/            # Frontend API clients
│       ├── components/     # Shared UI components
│       ├── context/        # Authentication and role contexts
│       ├── pages/          # Application pages and management tools
│       ├── PrivateRoutes/  # Role-protected React routes
│       └── styles/         # Global and component styling
├── controllers/            # Database connection and query logic
├── data/
│   ├── schema.sql          # MySQL database schema
│   └── seeds.sql           # Development seed data
├── passport/               # Passport and JWT authorization
├── routes/
│   ├── api/                # Application API routes
│   ├── auth/               # Authentication routes
│   ├── pictures/           # AWS S3 integration
│   └── video/              # Vimeo integration
├── dbConfig.js             # Database configuration
├── jwtConfig.js            # Authentication configuration
├── server.js               # Express server entry point
└── package.json
```

## Prerequisites

The current project configuration expects:

* Node.js `12.18.3`
* Yarn `1.22.x`
* MySQL
* An AWS account and S3 bucket for image uploads
* A Vimeo developer application for video uploads

Because Node.js 12 is no longer supported, upgrading the application to a current Node.js LTS release is recommended.

## Local Installation

Clone the repository:

```bash
git clone https://github.com/Zevubu/Shtiker_iso.git
cd Shtiker_iso
```

Install the server and client dependencies:

```bash
yarn install
```

The root installation script also installs dependencies inside the `client` directory. They can be installed manually when necessary:

```bash
cd client
yarn install
cd ..
```

## Environment Configuration

Create a `.env` file in the root directory:

```bash
touch .env
```

Add the required configuration values:

```env
PORT=3001
NODE_ENV=development

# MySQL connection
JAWSDB_URL=mysql://DATABASE_USER:DATABASE_PASSWORD@DATABASE_HOST:3306/Shtiker_iso

# Authentication
JWT_ENCRYPTION=replace_with_a_long_random_secret
JWT_EXPIRATION=86400
CRYPTO_PASS=replace_with_a_secure_value
CRYPTO_SALT=replace_with_a_secure_value

# AWS S3
AWSAccessKeyId=your_aws_access_key
AWSSecretKey=your_aws_secret_key
AWSBucket=your_s3_bucket_name

# Vimeo
VIMEO_CLIENT_ID=your_vimeo_client_id
VIMEO_SECRET_KEY=your_vimeo_client_secret
VIMEO_ACCESS_TOKEN=your_vimeo_access_token
```

Never commit `.env` files, database passwords, access tokens, or cloud credentials to the repository.

## Database Setup

The MySQL schema is located at:

```text
data/schema.sql
```

Load it into a local MySQL instance:

```bash
mysql -u root -p < data/schema.sql
```

Alternatively, open the file in a MySQL client and execute it manually.

> **Warning:** The schema currently drops and recreates the `Shtiker_iso` database. Do not run it against a database containing information you need to preserve.

Update `JAWSDB_URL` in `.env` so that the application can connect to the newly created database.

## Running the Application

Start the React client and Express server together:

```bash
yarn start
```

The development environment normally uses:

* React client: `http://localhost:3000`
* Express API: `http://localhost:3001`

The React development server proxies application requests to the Express backend.

## Production Build

Create an optimized React build:

```bash
yarn build
```

Run the Express production server:

```bash
NODE_ENV=production yarn start:prod
```

In production mode, Express serves the compiled frontend from:

```text
client/build
```

## Available Commands

| Command           | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `yarn start`      | Starts either the development or production environment based on `NODE_ENV` |
| `yarn start:dev`  | Runs the Express API and React client concurrently                          |
| `yarn client`     | Starts only the React development server                                    |
| `yarn build`      | Creates a production React build                                            |
| `yarn start:prod` | Starts the Express production server                                        |

## API Organization

The Express application separates routes by access level:

```text
/auth          Authentication routes
/validate      Token validation
/api/opening   Routes available without authentication
/api/req       Authenticated user routes
/api/hreq      Host-only routes
/api/mreq      Manager-only routes
/img           AWS S3 image upload routes
/video         Vimeo-related routes
/upload        Video upload routes
/patch         Resumable video upload routes
```

Protected routes use Passport JWT authentication. Host and management routes also verify the authenticated user’s assigned role.

## Development Priorities

Before treating the application as production-ready, the following work is recommended:

1. Upgrade Node.js, React, Express, Passport, and other dependencies.
2. Remove all committed credentials and rotate affected secrets.
3. Add an `.env.example` file containing placeholder values.
4. Replace deprecated libraries and APIs.
5. Add automated API, authentication, and component tests.
6. Add request validation and standardized API error handling.
7. Review JWT storage and authentication security.
8. Review AWS S3 permissions and avoid unnecessary public access.
9. Complete and test the Vimeo resumable upload workflow.
10. Add database migrations rather than relying on a destructive schema script.
11. Restore or remove the currently configured database seed command.
12. Add continuous integration for tests and production builds.

## Background

Adventreon was conceived as a way for artists and performers to continue producing and distributing shows through an online platform. The application explores media publishing, artist discovery, role-based content administration, video hosting, and full-stack application architecture.

## License

This project is licensed under the Apache License 2.0.

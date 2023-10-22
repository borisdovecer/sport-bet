# Server

## Description
This is small server side application build with Node.js and Express framework to support frontend application

## Prerequisites
Ensure you have Node.js and npm installed. If not, you can download them from the official website:

[Download Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/)

## Installation

Install dependencies:

```bash
npm install
```

This command will install all the necessary dependencies required to run the project.

## Setup environment variables:

- Copy .env.example to .env.
- Update the .env file with your database credentials and other configurations.

### Run database seed data:

- Make sure your PostgreSQL server is running.
- Seed data with this command:

```bash
npm run seed
```



## Development
To start the development server run:
```bash
npm run dev
```

The application will start and is accessible at http://localhost:8080.

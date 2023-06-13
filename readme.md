# URL Shortener API

This is a simple URL shortener API built using Node.js, Express, and MongoDB. The API allows you to create short URLs for long, complex URLs.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

## Installation

1. Clone the repository:
```bash
 git clone nodeJS_URL-Shortner
```

2. Navigate to the project directory:

```bash
cd nodeJS_URL-Shortner

```

3. Install the dependencies:

```bash
npm install
```

4. Set up the MongoDB connection:

Make sure MongoDB is running on your machine.
Update the MongoDB connection string in src/config/db.js if necessary.

5. Start the server:

```bash
npm start

```

The server will start running at http://localhost:3000.

## API Endpoints

POST /api/url/shorten: Create a short URL.

Request body:

```bash
{
  "originalUrl": "<original-url>"
}
```

Response:

```bash
{
  "_id": "<url-id>",
  "originalUrl": "<original-url>",
  "shortUrl": "<short-url>",
  "createdAt": "<creation-date>"
}
```

GET /api/url/:shortUrl: Redirect to the original URL associated with the short URL.

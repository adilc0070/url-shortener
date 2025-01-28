# URLSpin

![URLSpin Banner](https://github.com/adilc0070/url-shortener/blob/main/app/favicon.ico)

## Overview

**URLSpin** is a modern web application built using **Next.js** and **MongoDB**. It allows users to shorten long URLs into compact, shareable links and manage them with analytics and customization options.

## Features

- **Quick URL Shortening**: Shorten long URLs into concise links instantly.
- **Custom Links**: Create personalized short links for branding.
- **Analytics Dashboard**: Track clicks, geographic data, and other stats for each link.
- **URL Management**: Edit or delete your shortened links easily.
- **API Access**: Integrate shortening functionality into your own applications.
- **Mobile-Friendly**: Fully responsive design for all devices.
- **Secure and Reliable**: Prioritizes user data protection and service uptime.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js (via Next.js API routes)
- **Database**: MongoDB
- **Styling**: Tailwind CSS
- **Hosting**: [Your Hosting Platform, e.g., Vercel or AWS]

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adilc0070/url-shortener.git
   ```

2. Navigate to the project directory:
   ```bash
   cd url-shortener
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the root directory with the following keys:
   ```env
   MONGODB_URI=your-mongodb-uri
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## API Endpoints

### 1. **Shorten URL**
   - **POST** `/api/shorten`
   - **Request Body:**
     ```json
     {
       "originalUrl": "https://example.com"
     }
     ```
   - **Response:**
     ```json
     {
       "shortCode": "eBUXJg",
       "shortUrl": "http://localhost:3000/eBUXJg"
     }
     ```

### 2. **Redirect to Original URL**
   - **GET** `/:shortCode`
   - Redirects to the original URL.

## Folder Structure

```
url-shortener/
├── app/
│   ├── api/
│   │   └── shorten/
│   │       └── route.js
│   ├── [shortCode]/
│   │   └── page.js
│   ├── features/
│   │   └── page.js
│   ├── privacy/
│   │   └── page.js
│   ├── terms/
│   │   └── page.js
│   └── page.js
├── components/
│   ├── ActionButtons.js
│   ├── Footer.js
│   ├── Header.js
│   └── UrlContent.js
├── models/
│   ├── Url.js
├── utils/
│   ├── generateShortCode.js
│   └── mongodb.js
└── public/
```

## Roadmap

- [ ] Add user authentication
- [ ] Enable link expiration feature
- [ ] Provide advanced analytics
- [ ] Implement dark mode

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: adilc0070@gmail.com
- **GitHub**: [adilc0070](https://github.com/adilc0070)
- **Website**: [adilc0070.site](https://adilc0070.site)

---

Thank you for using **URLSpin**! 🎉


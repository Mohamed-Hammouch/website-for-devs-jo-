# JordanDevJobs - Developer Job Board

A modern job board platform connecting developers with companies in Jordan. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🔍 Advanced job search and filtering
- 👨‍💻 Developer profiles
- 🏢 Company profiles and job posting
- 🔐 Secure authentication
- 📱 Responsive design
- 🌙 Dark/light mode (coming soon)

## Tech Stack

- **Frontend:**
  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - React Icons

- **Backend:**
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL

- **Authentication:**
  - NextAuth.js
  - OAuth (GitHub, Google)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/jordan-dev-jobs.git
   cd jordan-dev-jobs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/jordandevjobs"
   NEXTAUTH_SECRET="your-secret-key"
   GITHUB_ID="your-github-oauth-id"
   GITHUB_SECRET="your-github-oauth-secret"
   GOOGLE_ID="your-google-oauth-id"
   GOOGLE_SECRET="your-google-oauth-secret"
   ```

4. **Initialize the database:**
   ```bash
   npx prisma db push
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
jordan-dev-jobs/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── (auth)/         # Authentication routes
│   │   ├── (main)/         # Main application routes
│   │   └── layout.tsx      # Root layout
│   ├── components/         # React components
│   │   ├── auth/          # Authentication components
│   │   ├── jobs/          # Job-related components
│   │   ├── layout/        # Layout components
│   │   └── ui/            # Reusable UI components
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript types
├── prisma/                # Database schema and migrations
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/jordan-dev-jobs](https://github.com/yourusername/jordan-dev-jobs) 
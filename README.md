# 💻 ReLap - Refurbished & Secondhand Laptops E-commerce

![ReLap Banner](./public/banner/homepage.png)

> **ReLap** is a modern, full-featured e-commerce platform specialized in refurbished and secondhand laptops. Built with cutting-edge technologies to provide users with a seamless shopping experience for quality pre-owned laptops.

## 🌟 Features

- **🔐 Secure Authentication** - NextAuth.js integration with social login support
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🌙 Dark/Light Mode** - Theme switching with next-themes
- **🛒 Product Management** - Comprehensive product catalog with detailed specifications
- **📊 Dashboard** - Admin dashboard for product management
- **🔍 Product Search & Filter** - Advanced filtering and search capabilities
- **💳 Secure Transactions** - Built with security best practices
- **⚡ Performance Optimized** - Turbopack integration for faster builds
- **🎨 Modern UI/UX** - Radix UI components with shadcn/ui design system

## 🚀 Live Demo

🌐 **[Visit ReLap Website](https://relap-demo.vercel.app)** *(Replace with your actual live URL)*

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.5.0 (React 19.1.0)
- **Styling**: Tailwind CSS 4.0 with PostCSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React, React Icons
- **Form Handling**: React Hook Form
- **Notifications**: React Toastify
- **Theme**: next-themes for dark/light mode

### Backend & Database
- **Runtime**: Node.js with Next.js API Routes
- **Database**: MongoDB 6.18.0
- **Authentication**: NextAuth.js 4.24.11
- **Security**: bcrypt for password hashing

### Development Tools
- **Build Tool**: Turbopack (Next.js)
- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js config
- **Animation**: tw-animate-css

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **pnpm** (v8.0.0 or higher)
- **MongoDB** (v6.0 or higher)
- **Git**

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/relap.git
cd relap
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Database Configuration
NEXT_PUBLIC_MONGO_URI=mongodb://localhost:27017
# or for MongoDB Atlas
NEXT_PUBLIC_MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net
DB_NAME=reLapDB

# App Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
# For production, use your domain: https://yourdomain.com

# NextAuth Configuration
NEXTAUTH_SECRET=your-nextauth-secret-key-here
NEXTAUTH_URL=http://localhost:3000
# For production: https://yourdomain.com

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Database Setup

Make sure MongoDB is running locally or configure your MongoDB Atlas connection string in the environment variables.

### 5. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
relap/
├── 📁 public/                    # Static assets
│   └── 📁 banner/               # Banner images
├── 📁 src/
│   ├── 📁 app/                  # Next.js 13+ App Router
│   │   ├── 📄 globals.css       # Global styles
│   │   ├── 📄 layout.js         # Root layout
│   │   ├── 📄 page.js           # Home page
│   │   ├── 📁 actions/          # Server actions
│   │   ├── 📁 api/              # API routes
│   │   ├── 📁 auth/             # Authentication pages
│   │   ├── 📁 dashboard/        # Admin dashboard
│   │   └── 📁 products/         # Product pages
│   ├── 📁 components/           # Reusable components
│   │   ├── 📁 HomePage/         # Home page components
│   │   └── 📁 ui/               # shadcn/ui components
│   ├── 📁 lib/                  # Utility functions
│   └── 📁 Providers/            # Context providers
├── 📄 components.json           # shadcn/ui configuration
├── 📄 tailwind.config.mjs       # Tailwind configuration
└── 📄 next.config.mjs           # Next.js configuration
```

## 🚀 Available Scripts

```bash
# Development with Turbopack
pnpm dev

# Production build with Turbopack
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS 4.0 with PostCSS. Configuration can be found in `tailwind.config.mjs`.

### Next.js
Next.js configuration is in `next.config.mjs` with Turbopack enabled for faster builds.

### shadcn/ui
UI components configuration is in `components.json`. Add new components using:

```bash
npx shadcn-ui@latest add [component-name]
```

## 🔐 Authentication

ReLap uses NextAuth.js for authentication with support for:
- **Email/Password** authentication
- **Social login** providers (Google, GitHub, etc.)
- **Session management**
- **Protected routes**

## 📊 Database Schema

### Products Collection
```javascript
{
  _id: ObjectId,
  brand: String,
  model: String,
  processor: String,
  ram: String,
  storage: String,
  graphics: String,
  display: String,
  condition: String,
  battery: String,
  weight: String,
  os: String,
  price: Number,
  currency: String,
  year: Number,
  warranty: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment

```bash
# Build the project
pnpm build

# Start the production server
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [Md Mobarak Hossain](https://github.com/mdmhrz)
- LinkedIn: [Md Mobarak Hossain](https://linkedin.com/in/mdmhrz)
- Email: mdmobarakhossainrazu@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Radix UI](https://www.radix-ui.com/) - For accessible UI components
- [shadcn/ui](https://ui.shadcn.com/) - For the design system
- [MongoDB](https://www.mongodb.com/) - For the database
- [Vercel](https://vercel.com/) - For hosting

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/yourusername/relap/issues) page
2. Create a new issue if needed
3. Contact us at support@relap.com

---

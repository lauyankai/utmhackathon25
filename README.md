# 🚀 AI-Powered Employee Onboarding Platform

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-181818?style=flat&logo=supabase&logoColor=white)](https://supabase.com/)

A modern, intelligent onboarding platform that streamlines the employee integration process and facilitates optimal team placement through AI-driven insights.

## 📋 Overview

This platform revolutionizes the traditional onboarding experience by providing a comprehensive, automated system that guides new employees through their company introduction while gathering valuable insights for optimal team placement.

### ✨ Key Features

- **🎯 Personalized Onboarding Journey**
  - 🏢 Company culture introduction
  - 👥 Role-specific information
  - 🛠️ Tools and resources familiarization
  - 📚 Interactive learning modules

- **🤖 AI-Powered Task Management**
  - 📊 Skill-based task recommendations
  - 💡 Project suggestions based on user profile
  - 📈 Performance analysis and tracking
  - 🔄 Automated progress monitoring

- **🎯 Smart Team Placement**
  - 🧠 AI-driven skill assessment
  - 📊 Performance analytics
  - 🤝 Team compatibility analysis
  - 📑 Data-driven placement recommendations

## 🏗️ Technical Architecture

Our system is built using modern technologies to ensure scalability, performance, and reliability:

### 🎨 Frontend
- **⚛️ React + ⚡ Vite**
  - Modern UI framework with TypeScript support
  - Fast development experience with HMR
  - Optimized build performance
- Deployed on **▲ Vercel** for optimal delivery

### 🔧 Backend
- **📦 Node.js + Express.js**
  - RESTful API architecture
  - Robust server-side processing
  - Efficient data handling

### 🔐 Authentication
- **🔑 Supabase**
  - Secure user authentication
  - Role-based access control
  - Session management

### 🧠 AI Pipeline
- **🤗 Hugging Face Transformers (RAG pipeline)**
  - Document chunking for processing
  - Advanced embeddings generation
  - Vector retrieval system

### 💾 Databases
- **🐘 PostgreSQL**
  - Primary data storage
  - User information
  - Progress tracking
  - Performance metrics

- **🎨 Chroma**
  - Vector database
  - AI model data storage
  - Efficient similarity search

## 🚀 Getting Started

### 📋 Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- Supabase account
- Chroma DB setup

### ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/lauyankai/utmhackathon25.git
cd utmhackathon25
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server
```bash
npm run dev
```

## 🔑 Environment Variables

Create a `.env` file with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_API_URL=your_backend_api_url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Project Link: [https://github.com/lauyankai/utmhackathon25](https://github.com/lauyankai/utmhackathon25)

---
<div align="center">
Made with ❤️ for better employee onboarding
</div>

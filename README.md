# 🚀 AI-Powered Employee Onboarding Platform

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-181818?style=flat&logo=supabase&logoColor=white)](https://supabase.com/)

An intelligent employee onboarding and team placement platform that leverages AI to analyze new hire skills, automate the onboarding process, and make data-driven team placement recommendations.

1. Project Poster - [View Poster](https://drive.google.com/drive/folders/1zr9H8x9S6uoK3gwoSfQSqJCtTD7FN8-K?usp=sharing)
2. Project Video - [Watch Demo](https://drive.google.com/drive/folders/1IW_6R1-VZkp6ejag5rUf9x6r1oo2fM-K?usp=sharing)
3. Project Prototype - [Try Demo](https://utmhackathon25.vercel.app/)

## 📋 Overview

Our platform revolutionizes the traditional onboarding and team placement process through AI-driven insights:

1. 📄 **Skill Analysis**: AI automatically analyzes new hire skills and experience from their interview data
2. 🎯 **Personalized Tasks**: Generates tailored onboarding tasks based on the candidate's profile
3. 📊 **Performance Tracking**: Monitors task completion and assesses performance
4. 🤝 **Smart Team Matching**: Recommends optimal team placement based on skills and performance
5. 📈 **Company Insights**: Provides detailed analytics to management for informed decision-making

### ✨ Key Features

- **🧠 AI-Powered Skill Assessment**
  - 📄 Automated skill analysis from interview data
  - 🎯 Skill gap identification
  - 💡 Personalized development recommendations
  - 📊 Comprehensive skill profiling

- **🤖 Intelligent Task Management**
  - 📋 Custom task generation based on skill profile
  - 📈 Real-time performance tracking
  - 🎓 Adaptive learning paths
  - ✅ Progress validation and assessment

- **🎯 Data-Driven Team Placement**
  - 🔄 Real-time performance analysis
  - 👥 Team compatibility matching
  - 📊 Skill-based team recommendations
  - 📑 Detailed placement reports for management

## 🔄 How It Works

1. **Initial Assessment** 📋
   - AI analyzes existing interview data and resume
   - System evaluates candidate's skill profile
   - Generates personalized onboarding plan

2. **Onboarding Journey** 🛤️
   - Custom tasks based on skill profile
   - Interactive learning modules
   - Progress tracking and performance assessment

3. **Team Matching** 🤝
   - AI processes performance data
   - Analyzes team compatibility
   - Generates placement recommendations

4. **Management Insights** 📊
   - Detailed performance reports
   - Team placement recommendations
   - Skill gap analysis
   - ROI metrics

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
  - Interview data and resume analysis
  - Skill extraction and classification
  - Performance prediction
  - Team compatibility analysis

### 💾 Databases
- **🐘 PostgreSQL**
  - User profiles and progress
  - Team and company data
  - Performance metrics
  - Assessment results

- **🎨 Chroma**
  - Vector embeddings for skills
  - Interview data analysis
  - AI model storage
  - Similarity matching

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
Made with ❤️ for better employee onboarding and team placement
</div>

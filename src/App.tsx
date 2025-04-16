import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, CssBaseline, Fab } from '@mui/material';
import { Header, Footer, Sidebar, Chatbot, Team, RoleOverview, FAQ, Security, TechStack, Tools, WelcomeVideo } from './components';
import { LoginForm } from './components';
import { Chat as ChatIcon } from '@mui/icons-material';
import { CompanyCulture } from './components/onboarding/CompanyCulture';
import { DailyLife } from './components/onboarding/DailyLife';
import { Department} from './components/onboarding/Department';


const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual authentication
    console.log('Login attempt:', { email, password });
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <CssBaseline />
        <LoginForm onLogin={handleLogin} />
      </Box>
    );
  }

  return (
    <Router>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/welcome-video" replace />} />
            {/* Add routes for each onboarding section */}
            <Route path="/welcome-video" element={<WelcomeVideo/>} />
            <Route path="/company-culture" element={<CompanyCulture />} />
            <Route path="/daily-life" element={<DailyLife/>} />
            <Route path="/role-overview" element={<RoleOverview/>} />
            <Route path="/tech-stack" element={<TechStack/>} />
            <Route path="/tools" element={<Tools/>} />
            <Route path="/security" element={<Security/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/department" element={<Department/>} />
            <Route path="/faq" element={<FAQ/>} />
          </Routes>
          <Footer />
        </Box>
        {isChatOpen && <Chatbot />}
        <Fab
          color="primary"
          aria-label="chat"
          onClick={() => setIsChatOpen(!isChatOpen)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24
          }}
        >
          <ChatIcon />
        </Fab>
      </Box>
    </Router>
  );
};

export default App;

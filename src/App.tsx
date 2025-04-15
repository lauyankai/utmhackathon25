import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { Header, Footer, Sidebar } from './components/layout';
import { LoginForm } from './components';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

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
            <Route path="/welcome-video" element={<div>Welcome Video</div>} />
            <Route path="/company-culture" element={<div>Company Culture</div>} />
            <Route path="/daily-life" element={<div>Daily Life</div>} />
            <Route path="/role-overview" element={<div>Role Overview</div>} />
            <Route path="/tech-stack" element={<div>Tech Stack</div>} />
            <Route path="/tools" element={<div>Tools</div>} />
            <Route path="/security" element={<div>Security</div>} />
            <Route path="/team" element={<div>Team</div>} />
            <Route path="/department" element={<div>Department</div>} />
            <Route path="/faq" element={<div>FAQ</div>} />
          </Routes>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
};

export default App;

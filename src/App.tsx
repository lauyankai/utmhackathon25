import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, CssBaseline, Fab } from '@mui/material';
import { Header, Footer, Sidebar, Chatbot, Team, RoleOverview, FAQ, Security, TechStack, Tools, WelcomeVideo, ProgressHeader } from './components';
import { LoginForm } from './components';
import { Chat as ChatIcon } from '@mui/icons-material';
import { CompanyCulture } from './components/onboarding/CompanyCulture';
import { DailyLife } from './components/onboarding/DailyLife';
import { Department } from './components/onboarding/Department';
import { useOnboardingProgress } from './store/onboardingProgress';

const ProtectedRoute: React.FC<{ element: React.ReactElement; path: string }> = ({ element, path }) => {
  const canAccess = useOnboardingProgress(state => state.canAccessSection(path.substring(1)));
  const location = useLocation();

  if (!canAccess) {
    const currentSection = useOnboardingProgress(state => state.getCurrentSection());
    return <Navigate to={`/${currentSection}`} state={{ from: location }} replace />;
  }

  return element;
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const completionPercentage = useOnboardingProgress(state => state.getCompletionPercentage());

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
      <Box sx={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(145deg, #f6f8fc 0%, #ffffff 100%)' }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 2, sm: 3, md: 4 },
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '200px',
              background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
              pointerEvents: 'none'
            }
          }}
        >
          <ProgressHeader title="Onboarding Progress" completionPercentage={completionPercentage} />
          <Routes>
            <Route path="/" element={<Navigate to="/welcome-video" replace />} />
            <Route path="/welcome-video" element={<ProtectedRoute path="/welcome-video" element={<WelcomeVideo />} />} />
            <Route path="/company-culture" element={<ProtectedRoute path="/company-culture" element={<CompanyCulture />} />} />
            <Route path="/daily-life" element={<ProtectedRoute path="/daily-life" element={<DailyLife />} />} />
            <Route path="/role-overview" element={<ProtectedRoute path="/role-overview" element={<RoleOverview />} />} />
            <Route path="/tech-stack" element={<ProtectedRoute path="/tech-stack" element={<TechStack />} />} />
            <Route path="/tools" element={<ProtectedRoute path="/tools" element={<Tools />} />} />
            <Route path="/security" element={<ProtectedRoute path="/security" element={<Security />} />} />
            <Route path="/team" element={<ProtectedRoute path="/team" element={<Team />} />} />
            <Route path="/department" element={<ProtectedRoute path="/department" element={<Department />} />} />
            <Route path="/faq" element={<ProtectedRoute path="/faq" element={<FAQ />} />} />
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

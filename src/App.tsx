import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Fab } from '@mui/material';
import { Header, Footer, Chatbot, Team, RoleOverview, FAQ, Security, TechStack, Tools, WelcomeVideo, ProgressHeader } from './components';
import { LoginForm } from './components';
import { Chat as ChatIcon } from '@mui/icons-material';
import { CompanyCulture } from './components/onboarding/CompanyCulture';
import { DailyLife } from './components/onboarding/DailyLife';
import { Department } from './components/onboarding/Department';
import { TechnicalLayout } from './components/layout/TechnicalLayout';
import { TechnicalSection } from './components/onboarding/TechnicalSection';
import { SkillAnalysis } from './components/onboarding/SkillAnalysis';
import { AvailableProjects } from './components/onboarding/AvailableProjects';
import { useOnboardingProgress } from './store/onboardingProgress';
import { Welcome } from './components/onboarding/Welcome';
import { WelcomeLanding } from './components/onboarding/WelcomeLanding';
import { Sidebar } from './components/Sidebar/Sidebar';

const ProtectedRoute: React.FC<{ element: React.ReactElement; path: string }> = ({ element, path }) => {
  const canAccess = useOnboardingProgress(state => state.canAccessSection(path.substring(1)));
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const currentSection = useOnboardingProgress(state => state.getCurrentSection());

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  
  return element;
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const completionPercentage = useOnboardingProgress(state => state.getCompletionPercentage());
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('hasStartedOnboarding');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(145deg, #f6f8fc 0%, #ffffff 100%)' }}>
      <CssBaseline />
      <Header onLogout={handleLogout} />
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
        {children}
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
  );
};

const AppContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  
  const [hasStartedOnboarding, setHasStartedOnboarding] = React.useState(() => {
    return localStorage.getItem('hasStartedOnboarding') === 'true';
  });

  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);
  
  useEffect(() => {
    // Listen for changes to hasStartedOnboarding in localStorage
    const handleStorageChange = () => {
      setHasStartedOnboarding(localStorage.getItem('hasStartedOnboarding') === 'true');
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual authentication
    console.log('Login attempt:', { email, password });
    setIsAuthenticated(true);
    localStorage.removeItem('hasStartedOnboarding');
    setHasStartedOnboarding(false);
  };

  if (!isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <CssBaseline />
        <LoginForm onLogin={handleLogin} />
      </Box>
    );
  }
  
  // Show welcome landing page if onboarding hasn't started yet
  if (!hasStartedOnboarding) {
    // Handle any route when onboarding hasn't started yet
    return (
      <Routes>
        <Route path="*" element={<WelcomeLanding />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {/* Main Onboarding Routes */}
      <Route path="/" element={<MainLayout><Navigate to="/welcome-video" replace /></MainLayout>} />
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      <Route path="/welcome" element={<MainLayout><ProtectedRoute path="/welcome" element={<Welcome />} /></MainLayout>} />
      <Route path="/welcome-video" element={<MainLayout><ProtectedRoute path="/welcome-video" element={<WelcomeVideo />} /></MainLayout>} />
      <Route path="/company-culture" element={<MainLayout><ProtectedRoute path="/company-culture" element={<CompanyCulture />} /></MainLayout>} />
      <Route path="/daily-life" element={<MainLayout><ProtectedRoute path="/daily-life" element={<DailyLife />} /></MainLayout>} />
      <Route path="/role-overview" element={<MainLayout><ProtectedRoute path="/role-overview" element={<RoleOverview />} /></MainLayout>} />
      <Route path="/tech-stack" element={<MainLayout><ProtectedRoute path="/tech-stack" element={<TechStack />} /></MainLayout>} />
      <Route path="/tools" element={<MainLayout><ProtectedRoute path="/tools" element={<Tools />} /></MainLayout>} />
      <Route path="/security" element={<MainLayout><ProtectedRoute path="/security" element={<Security />} /></MainLayout>} />
      <Route path="/team" element={<MainLayout><ProtectedRoute path="/team" element={<Team />} /></MainLayout>} />
      <Route path="/department" element={<MainLayout><ProtectedRoute path="/department" element={<Department />} /></MainLayout>} />
      <Route 
        path="/faq" 
        element={
          <MainLayout>
            <ProtectedRoute 
              path="/faq" 
              element={
                <FAQ key={location?.state?.from || 'default'} />
              } 
            />
          </MainLayout>
        } 
      />

      {/* Technical Assessment Routes */}
      <Route path="/technical-section/*" element={
        <TechnicalLayout>
          <Routes>
            <Route index element={<Navigate to="/technical-section/skill-analysis" replace />} />
            <Route path="skill-analysis" element={<SkillAnalysis onContinue={() => {}} />} />
            <Route path="projects" element={<AvailableProjects />} />
            <Route path="my-tasks" element={<div>My Tasks</div>} />
            <Route path="performance" element={<div>Performance</div>} />
          </Routes>
        </TechnicalLayout>
      } />
      
      {/* Catch-all route - redirect to welcome video if no other routes match */}
      <Route path="*" element={<Navigate to="/welcome-video" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

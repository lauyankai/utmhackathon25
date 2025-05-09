import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Fab } from '@mui/material';
import { Header, Footer, Chatbot, ProgressHeader } from './components';
import { LoginForm } from './components';
import { Chat as ChatIcon } from '@mui/icons-material';
import { useOnboardingProgress } from './store/onboardingProgress';
import { Sidebar } from './components/Sidebar/Sidebar';
import { CompanyCulture, DailyLife, Department, FAQ, RoleOverview, Security, Team, TechStack, 
  Tools, Welcome, WelcomeVideo } from './components/onboarding/non_tech';
import { WelcomeLanding } from './components/onboarding/non_tech/WelcomeLanding';
import { AvailableProjects, TechnicalIntro, SkillAnalysis,
  MyTasks, Performance } from './components/onboarding/tech';
import { TechnicalLayout } from './components/layout/TechnicalLayout';
import { useScrollToTop } from './hooks/useScrollToTop';
import { Dashboard, UserManagement, Analytics } from './components';

const ProtectedRoute: React.FC<{ element: React.ReactElement; path: string }> = ({ element }) => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  return element;
};

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const completionPercentage = useOnboardingProgress(state => state.getCompletionPercentage());
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  // Add scroll to top behavior
  useScrollToTop();

  const handleLogout = () => {
    // Clear all authentication and state data
    localStorage.clear(); // This will clear all localStorage items
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
        {!isAdmin && <ProgressHeader title="Onboarding Progress" completionPercentage={completionPercentage} />}
        {children}
        <Footer />
      </Box>
      {!isAdmin && isChatOpen && <Chatbot />}
      {!isAdmin && (
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
      )}
    </Box>
  );
};

const AppContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  
  const [isAdmin, setIsAdmin] = React.useState(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());
  }, [isAuthenticated]);

  const handleLogin = (email: string, password: string) => {
    // Basic admin authentication
    if (email === 'admin' && password === 'Admin123') {
      setIsAuthenticated(true);
      setIsAdmin(true);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setIsAuthenticated(true);
      setIsAdmin(false);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', 'false');
      
      // Check if this is the first login
      const hasStartedOnboarding = localStorage.getItem('hasStartedOnboarding');
      if (!hasStartedOnboarding) {
        navigate('/welcome-landing', { replace: true });
      } else {
        navigate('/welcome-video', { replace: true });
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        <CssBaseline />
        <LoginForm onLogin={handleLogin} />
      </Box>
    );
  }
  
  // Show technical intro page if the user completed the FAQ section
  if (location.pathname === '/technical-intro' && !isAdmin) {
    return <TechnicalIntro />;
  }

  return (
    <Routes>
      {/* Main Onboarding Routes */}
      <Route path="/" element={<MainLayout><Navigate to={isAdmin ? "/admin/dashboard" : "/welcome-landing"} replace /></MainLayout>} />
      <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
      <Route path="/welcome-landing" element={<WelcomeLanding />} />
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

      {/* Technical Introduction - This is now handled directly in the component rendering logic */}
      {/* <Route path="/technical-intro" element={<Navigate to="/technical-intro" replace />} /> */}

      {/* Technical Assessment Routes */}
      <Route path="/technical-section/*" element={
        <TechnicalLayout>
          <Routes>
            <Route path="skill-analysis" element={<SkillAnalysis onContinue={() => {}} />} />
            <Route path="projects" element={<AvailableProjects />} />
            <Route path="my-tasks" element={<MyTasks />} />
            <Route path="performance" element={<Performance />} />
          </Routes>
        </TechnicalLayout>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={
        <MainLayout>
          <ProtectedRoute path="/admin/dashboard" element={isAdmin ? <Dashboard /> : <Navigate to="/welcome-video" replace />} />
        </MainLayout>
      } />
      <Route path="/admin/users" element={
        <MainLayout>
          <ProtectedRoute path="/admin/users" element={isAdmin ? <UserManagement /> : <Navigate to="/welcome-video" replace />} />
        </MainLayout>
      } />
      <Route path="/admin/analytics" element={
        <MainLayout>
          <ProtectedRoute path="/admin/analytics" element={isAdmin ? <Analytics /> : <Navigate to="/welcome-video" replace />} />
        </MainLayout>
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
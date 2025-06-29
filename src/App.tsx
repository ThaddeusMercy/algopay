import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import DashboardLayout from './components/DashboardLayout';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './hooks/useAuth';
import { supabase } from './lib/supabase';

function App() {
  const { user, loading: authLoading } = useAuth();
  
  // Initialize activeTab from localStorage or default to 'landing'
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem('algopay_active_tab');
    return savedTab || 'landing';
  });
  
  const [showAuth, setShowAuth] = useState(false);
  const [companyName, setCompanyName] = useState('');

  // Save activeTab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('algopay_active_tab', activeTab);
  }, [activeTab]);

  // Fetch company name when user is authenticated
  useEffect(() => {
    const fetchCompanyName = async () => {
      if (!user) {
        setCompanyName('');
        return;
      }

      try {
        const { data, error } = await supabase
          .from('users')
          .select('company_name')
          .eq('id', user.id)
          .single();

        if (error) throw error;

        if (data) {
          setCompanyName(data.company_name || '');
        }
      } catch (err) {
        console.error('Failed to fetch company name:', err);
        setCompanyName('');
      }
    };

    fetchCompanyName();
  }, [user]);

  // Handle authentication state changes
  useEffect(() => {
    if (user && activeTab === 'landing') {
      // User is authenticated and on landing page, redirect to dashboard
      setActiveTab('dashboard');
      setShowAuth(false);
    } else if (!user && !authLoading && !['landing', 'auth'].includes(activeTab)) {
      // User is not authenticated and not on landing/auth page, redirect to landing
      setActiveTab('landing');
    }
  }, [user, authLoading, activeTab]);

  const handleGetStarted = () => {
    if (user) {
      // User is already authenticated, go to dashboard
      setActiveTab('dashboard');
    } else {
      // User needs to authenticate - show auth page directly
      setShowAuth(true);
    }
  };

  const handleAuth = (companyName: string) => {
    setShowAuth(false);
    setCompanyName(companyName);
    setActiveTab('dashboard');
  };

  const handleBackToLanding = () => {
    setShowAuth(false);
    setActiveTab('landing');
  };

  const renderActiveComponent = () => {
    // Show loading while checking authentication
    if (authLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-gray-900 font-medium">Loading...</div>
          </div>
        </div>
      );
    }

    // If user is authenticated, show dashboard layout for all dashboard tabs
    if (user && ['dashboard', 'employees', 'bulk-transfer', 'ai-assistant-chat', 'ai-assistant-history', 'settings'].includes(activeTab)) {
      return <DashboardLayout companyName={companyName || 'My Company'} />;
    }

    // If user is not authenticated, always show landing page
    if (!user) {
      return <LandingPage onGetStarted={handleGetStarted} />;
    }

    // Fallback to landing page
    return <LandingPage onGetStarted={handleGetStarted} />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="relative z-10">
        {/* Only show header on landing page */}
        {!user && !showAuth && (
          <Header
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isWalletConnected={false}
            walletAddress=""
            onConnectWallet={() => {}}
            onDisconnectWallet={() => {}}
            onGetStarted={handleGetStarted}
            user={user}
          />
        )}

        <main className="relative">
          <AnimatePresence mode="wait">
            {showAuth ? (
              <AuthPage
                onAuth={handleAuth}
                onBack={handleBackToLanding}
              />
            ) : (
              <motion.div
                key={user ? 'dashboard' : 'landing'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderActiveComponent()}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

export default App;
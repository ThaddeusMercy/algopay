import React from 'react';
import AlgopayLandingPage from './AlgopayLandingPage';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <AlgopayLandingPage onGetStarted={onGetStarted} />
  );
};
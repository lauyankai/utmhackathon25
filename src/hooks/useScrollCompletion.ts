import { useEffect } from 'react';
import { useOnboardingProgress } from '../store/onboardingProgress';

export const useScrollCompletion = (sectionId: string) => {
  const completeSection = useOnboardingProgress(state => state.completeSection);

  useEffect(() => {
    // Skip for welcome-video as it requires video completion
    if (sectionId === 'welcome-video') return;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Check if user has scrolled to the bottom (with a small threshold)
      const threshold = 50; // pixels from bottom
      const hasReachedBottom = windowHeight + scrollTop >= documentHeight - threshold;

      if (hasReachedBottom) {
        completeSection(sectionId);
        // Remove scroll listener after completion
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

    // Empty effect during content development
  }, [sectionId, completeSection]);
};
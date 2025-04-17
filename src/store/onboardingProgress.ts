import { create } from 'zustand';

interface OnboardingSection {
  id: string;
  completed: boolean;
  order: number;
}

interface OnboardingProgressState {
  sections: {
    [key: string]: OnboardingSection;
  };
  currentSection: string;
  completionPercentage: number;
  completeSection: (sectionId: string) => void;
  canAccessSection: (sectionId: string) => boolean;
  getCurrentSection: () => string;
  getCompletionPercentage: () => number;
}

const sectionOrder = [
  'welcome-video',
  'company-culture',
  'daily-life',
  'role-overview',
  'tech-stack',
  'tools',
  'security',
  'team',
  'department',
  'faq',
  'technical-intro',
  'technical-section'
];

export const useOnboardingProgress = create<OnboardingProgressState>((set, get) => ({
  sections: sectionOrder.reduce((acc, section, index) => ({
    ...acc,
    [section]: {
      id: section,
      completed: false,
      order: index
    }
  }), {}),
  currentSection: 'welcome-video',
  completionPercentage: 0,

  completeSection: (sectionId: string) => {
    set((state) => {
      const updatedSections = {
        ...state.sections,
        [sectionId]: {
          ...state.sections[sectionId],
          completed: true
        }
      };

      // Find next incomplete section
      const nextIncompleteSection = sectionOrder.find(
        (section) => !updatedSections[section].completed
      ) || sectionId;

      // Calculate completion percentage
      const completedCount = Object.values(updatedSections).filter(
        (section) => section.completed
      ).length;
      const completionPercentage = (completedCount / sectionOrder.length) * 100;

      return {
        sections: updatedSections,
        currentSection: nextIncompleteSection,
        completionPercentage
      };
    });
  },

  canAccessSection: (sectionId: string) => {
    const state = get();
    const targetSection = state.sections[sectionId];
    
    return targetSection !== undefined;
  },

  getCurrentSection: () => get().currentSection,
  getCompletionPercentage: () => get().completionPercentage
}));
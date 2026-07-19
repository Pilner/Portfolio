import { useSyncExternalStore } from 'react';

const MediaQueryAssignment = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
} as const;

export function useMediaQuery(query: keyof typeof MediaQueryAssignment): boolean {
  const mediaQuery = MediaQueryAssignment[query];

  const getSnapshot = () => window.matchMedia(mediaQuery).matches;

  const subscribe = (callback: () => void) => {
    const media = window.matchMedia(mediaQuery);
    media.addEventListener('change', callback);
    return () => media.removeEventListener('change', callback);
  };

  return useSyncExternalStore(subscribe, getSnapshot);
}

import { useState } from 'react';
import { PersonalizationContext, type TLogoView } from './context';

export function PersonalizationProvider({ children }: { children: React.ReactNode }) {
  const [logoView, setLogoView] = useState<TLogoView>(() => {
    const storedValue = localStorage.getItem('logoView');
    if (storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue);
        if (parsedValue === '2d' || parsedValue === '3d') return parsedValue;
      } catch {
        /* Ignore parse error */
      }
    }
    localStorage.setItem('logoView', '2d');
    return '2d';
  });

  return (
    <PersonalizationContext.Provider
      value={{
        logoView,
        setLogoView: (value: TLogoView) => {
          setLogoView(value);
          localStorage.setItem('logoView', JSON.stringify(value));
        },
      }}
    >
      {children}
    </PersonalizationContext.Provider>
  );
}

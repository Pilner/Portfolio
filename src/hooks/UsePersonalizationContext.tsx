import { PersonalizationContext } from '@src/contexts/Personalization/context';
import { useContext } from 'react';

export function usePersonalizationContext() {
  const context = useContext(PersonalizationContext);
  return context;
}

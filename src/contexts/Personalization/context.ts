import { createContext } from 'react';

export type TLogoView = '2d' | '3d';
interface IPersonalizationContextProps {
  logoView: TLogoView;
  setLogoView: (value: TLogoView) => void;
}

export const PersonalizationContext = createContext({} as IPersonalizationContextProps);

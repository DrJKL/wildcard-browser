import { createContext } from 'react';

export interface WildcardSettings {
  wildcardWrap: string;
  basePath: string;
}

export const DEFAULT_SETTINGS: WildcardSettings = {
  wildcardWrap: '__',
  basePath: '/wildcards',
};

export const WildcardSettingsContext = createContext(DEFAULT_SETTINGS);

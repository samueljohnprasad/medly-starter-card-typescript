import { defaultTheme as medlyDefaultTheme, Theme as MedlyTheme } from '@medly-components/theme';
import { coreDefaultTheme } from './core';
import { theme } from '../components/layout/Card/theme';
export const defaultTheme = {
    ...medlyDefaultTheme,
    ...coreDefaultTheme,
    ...theme
};

export type Theme = MedlyTheme;

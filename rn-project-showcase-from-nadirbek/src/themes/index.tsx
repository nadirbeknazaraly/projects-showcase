import { colors } from './Colors';
import { shadows } from './Shadows';
import { typography } from './Typography';
import { components } from './Components';
import React, { PropsWithChildren } from 'react';
import { DefaultTheme, Theme } from '@react-navigation/native';
import { ThemeProvider, createTheme, TypographyType } from '@rneui/themed';

const _theme = createTheme({
  lightColors: colors.lightColors,
  darkColors: colors.darkColors,
  typography: typography as TypographyType,
  spacing: {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 40,
  },
  shadows,
  components,
});

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider theme={_theme}>{children}</ThemeProvider>
    </>
  );
};

export const NavigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.lightColors.primary,
    background: colors.lightColors.background,
  },
};

export default AppThemeProvider;

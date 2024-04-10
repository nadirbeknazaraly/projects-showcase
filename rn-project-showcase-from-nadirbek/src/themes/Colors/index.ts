import palette from './palette';
import { lightColors, darkColors } from '@rneui/themed';

const _lightColors = {
  ...lightColors,
  ...palette,
};
const _darkColors = {
  ...darkColors,
  ...palette,
};

export const colors = {
  lightColors: _lightColors,
  darkColors: _darkColors,
};

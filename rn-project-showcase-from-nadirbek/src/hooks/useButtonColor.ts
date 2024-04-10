import { useTheme } from '@rneui/themed';
import { Severities } from 'types/common/severity';

export const useButtonColor = (severity: Severities) => {
  const { theme } = useTheme();

  if (severity === Severities.Error) return theme.colors.error;

  return theme.colors.primary;
};

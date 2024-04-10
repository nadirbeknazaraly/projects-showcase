import React from 'react';
import { makeStyles, useTheme } from '@rneui/themed';
import { ActivityIndicator, View } from 'react-native';

export const Loader = () => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

const useStyles = makeStyles(() => ({
  loader: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

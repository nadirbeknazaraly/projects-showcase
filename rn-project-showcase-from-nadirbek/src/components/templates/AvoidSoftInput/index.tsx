import {
  AvoidSoftInputView,
  AvoidSoftInput as __AvoidSoftInput,
} from 'react-native-avoid-softinput';
import { makeStyles } from '@rneui/themed';
import React, { PropsWithChildren } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export const AvoidSoftInput = (props: PropsWithChildren) => {
  const { children } = props;
  const styles = useStyles();

  const onFocusEffect = React.useCallback(() => {
    __AvoidSoftInput.setEnabled(true);

    return () => {
      __AvoidSoftInput.setShouldMimicIOSBehavior(false);
      __AvoidSoftInput.setEnabled(false);
    };
  }, []);

  useFocusEffect(onFocusEffect);

  return (
    <AvoidSoftInputView style={styles.container}>{children}</AvoidSoftInputView>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
  },
}));

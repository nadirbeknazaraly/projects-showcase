import { forwardRef } from 'react';
import { Input } from 'types/common/input';
import { Icon, Text } from 'components/atoms';
import { TextInput, View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { Input as RNEUIInput, makeStyles } from '@rneui/themed';

const Input = forwardRef<PropsWithChildren<TextInput>, IInput>((props, ref) => {
  const {
    key,
    errorMessage,
    successMessage,
    hideAnyMessage,
    inputContainerStyle,
    ...other
  } = props;
  const styles = useStyles(props);
  const hasErrorMessage = !!errorMessage;
  const hasSuccessMessage = !!successMessage;
  const hasMessage = hasErrorMessage || hasSuccessMessage;

  return (
    <>
      <RNEUIInput
        {...other}
        ref={ref}
        inputStyle={styles.inputStyle}
        inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
      />
      {hasMessage && !hideAnyMessage && (
        <View style={styles.container}>
          {hasErrorMessage && (
            <>
              <Icon
                name="icon--Property-1=x-circle-contained"
                size={24}
                color="error"
                style={styles.icon}
              />
              <Text variant="p3" color="error">
                {errorMessage}
              </Text>
            </>
          )}
          {hasSuccessMessage && (
            <>
              <Icon
                name="icon--Property-1=check-broken"
                size={24}
                color="colorC"
                style={styles.icon}
              />
              <Text variant="p3" color="colorC">
                {successMessage}
              </Text>
            </>
          )}
        </View>
      )}
    </>
  );
});

const useStyles = makeStyles((theme, props: IInput) => {
  const { disabled, errorMessage, successMessage } = props;
  const isDisabled = !!disabled;
  const hasErrorMessage = !!errorMessage;
  const hasSuccessMessage = !!successMessage;

  return {
    inputStyle: {
      color: theme.colors.grey1,
    },
    inputContainerStyle: {
      ...(!isDisabled &&
        hasErrorMessage && {
          borderColor: theme.colors.error,
        }),
      ...(!isDisabled &&
        hasSuccessMessage && {
          borderColor: theme.colors.colorC,
        }),
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      ...(isDisabled && { display: 'none' }),
    },
    icon: {
      marginRight: theme.spacing.xs * 0.5,
    },
  };
});

export default Input;

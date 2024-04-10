import { useState } from 'react';
import { View } from 'react-native';
import { ButtonProps } from './types';
import { shadows } from 'themes/Shadows';
import { makeStyles } from '@rneui/themed';
import { Button as RNEUIButton } from '@rneui/themed';

const Button = (props: ButtonProps) => {
  const {
    type = 'solid',
    shadow,
    color = 'primary',
    children,
    title,
    ...other
  } = props;
  const isSolid = type === 'solid';
  const isShadowed = !!shadow && isSolid;
  const isPrimary = color === 'primary';
  const isSuccess = color === 'success';
  const isError = color === 'error';
  const [isPressed, setIsPressed] = useState(false);
  const styles = useStyles();

  const toggleIsPressed = () => {
    setIsPressed(prevState => !prevState);
  };

  return (
    <View
      style={[
        isShadowed && styles.shadow,
        isPrimary && styles.shadowPrimary,
        isSuccess && styles.shadowSuccess,
        isError && styles.shadowError,
      ]}
    >
      <RNEUIButton
        type={type}
        color={color}
        onPressIn={toggleIsPressed}
        onPressOut={toggleIsPressed}
        buttonStyle={[
          isPressed &&
            ((isPrimary && styles.buttonPrimaryPressed) ||
              (isSuccess && styles.buttonSuccessPressed) ||
              (isError && styles.buttonErrorPressed)),
          props.buttonStyle,
        ]}
        titleStyle={[
          isPressed &&
            ((isPrimary && styles.titlePrimaryPressed) ||
              (isSuccess && styles.titleSuccessPressed) ||
              (isError && styles.titleErrorPressed)),
        ]}
        {...other}
      >
        {children || title}
      </RNEUIButton>
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  shadow: {
    ...shadows.shadowA,
  },
  shadowPrimary: {
    shadowColor: theme.colors.primary,
  },
  shadowSuccess: {
    shadowColor: theme.colors.success,
  },
  shadowError: {
    shadowColor: theme.colors.error,
  },
  buttonPrimaryPressed: {
    borderColor: theme.colors.colorA,
    backgroundColor: theme.colors.colorA,
  },
  buttonSuccessPressed: {
    borderColor: theme.colors.colorC,
    backgroundColor: theme.colors.colorC,
  },
  buttonErrorPressed: {
    borderColor: theme.colors.colorF,
    backgroundColor: theme.colors.colorF,
  },
  titlePrimaryPressed: {
    color: theme.colors.background,
  },
  titleSuccessPressed: {
    color: theme.colors.black,
  },
  titleErrorPressed: {
    color: theme.colors.colorH,
  },
}));

export default Button;

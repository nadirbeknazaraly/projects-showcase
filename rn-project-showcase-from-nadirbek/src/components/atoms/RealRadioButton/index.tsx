import React from 'react';
import { View } from 'react-native';
import { RadioButtonProps } from './types';
import { CheckBox, makeStyles } from '@rneui/themed';

const RealRadioButton = (props: RadioButtonProps) => {
  const {
    checkedIcon,
    uncheckedIcon,
    children,
    checked = false,
    onChangeValue,
    containerStyle,
    wrapperStyle,
    onPress,
    style,
    ...other
  } = props;
  const styles = useStyles();

  return (
    <View style={[styles.container, style]}>
      <CheckBox
        onPress={onPress}
        wrapperStyle={[styles.checkBoxWrapperStyle, wrapperStyle]}
        checkedIcon={checkedIcon || <View style={styles.checkedIcon} />}
        containerStyle={[styles.checkBoxContainerStyle, containerStyle]}
        uncheckedIcon={uncheckedIcon || <View style={styles.uncheckedIcon} />}
        checked={checked}
        {...other}
      />
    </View>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  checkBoxContainerStyle: {
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'transparent',
  },
  checkBoxWrapperStyle: {
    margin: 0,
    padding: 0,
    marginLeft: 0,
    marginRight: 0,
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  checkedIcon: {
    width: theme.spacing.sm,
    height: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
    backgroundColor: theme.colors.primary,
  },
  uncheckedIcon: {
    borderWidth: 2,
    borderStyle: 'solid',
    width: theme.spacing.sm,
    height: theme.spacing.sm,
    backgroundColor: 'transparent',
    borderRadius: theme.spacing.sm,
    borderColor: theme.colors.grey1,
  },
}));

export default RealRadioButton;

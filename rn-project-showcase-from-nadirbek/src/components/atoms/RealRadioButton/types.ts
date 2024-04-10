import { ReactElement } from 'react';
import { CheckBoxProps } from '@rneui/themed';
import { StyleProp, ViewStyle } from 'react-native';

export interface RadioButtonProps
  extends Omit<CheckBoxProps, 'checked' | 'style'> {
  style?: StyleProp<ViewStyle>;
  checkedIcon?: ReactElement;
  uncheckedIcon?: ReactElement;
  checked?: CheckBoxProps['checked'];
  onChangeValue?: (value: boolean) => void;
}

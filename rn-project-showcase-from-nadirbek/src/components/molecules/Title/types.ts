import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface TitleProps {
  title: string;
  rightPressable?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

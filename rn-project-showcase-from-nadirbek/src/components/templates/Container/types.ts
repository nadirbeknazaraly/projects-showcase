import {
  StyleProp,
  ViewStyle,
  ScrollView,
  ScrollViewProps,
} from 'react-native';
import { PropsWithChildren } from 'react';

export interface ContainerProps extends PropsWithChildren {
  isScrollEnabled?: boolean;
  style?: StyleProp<ViewStyle>;
  scrollViewProps?: ScrollViewProps;
  scrollViewRef?: React.RefObject<ScrollView>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

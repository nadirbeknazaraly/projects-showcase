import { iconType } from 'types/common/icon';
import { colorType } from 'types/common/color';
import { IconProps as __IconProps } from 'react-native-vector-icons/Icon';

export interface IconProps extends __IconProps {
  name: iconType;
  color?: colorType | string;
}

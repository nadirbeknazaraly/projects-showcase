import { textType } from 'types/common/typography';
import { Sizes, sizeType } from 'types/common/size';

export interface SelectSizeProps {
  title: string | number;
  size?: sizeType;
  checked: boolean;
  onPress: () => void;
}

export type VariantType = {
  [key in Sizes]: textType;
};

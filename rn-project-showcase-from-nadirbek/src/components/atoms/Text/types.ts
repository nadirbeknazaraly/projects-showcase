import { PropsWithChildren } from 'react';
import { colorType } from 'types/common/color';
import { textType } from 'types/common/typography';
import { TextProps as __TextProps } from '@rneui/themed';

export interface TextProps extends PropsWithChildren, __TextProps {
  variant: textType;
  color?: colorType;
  highlightText?: string;
  highlightColor?: colorType;
}

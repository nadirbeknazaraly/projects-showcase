import { PropsWithChildren } from 'react';

export interface GenericProps {
  size?: string;
  variant?: string;
}

export interface BaseProps extends PropsWithChildren, GenericProps {}

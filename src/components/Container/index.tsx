import React from 'react';
import { PropsWithChildren } from 'react';
import { Container as MUIContainer } from '@mui/material';

export const Container = (props: PropsWithChildren) => {
  const { children } = props;

  return <MUIContainer maxWidth="sm">{children}</MUIContainer>;
};

import React from 'react';
import { Base } from './Base';
import styled from 'styled-components';
import { VARIANT } from 'constants/controls';
import { GenericProps } from 'components/Ad/types';

const Image = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://www.skittles.com/sites/g/files/fnmzdf586/files/skittleslogo-10-26-21.svg');
`;

export const Ad = (props: GenericProps) => {
  const { variant, size } = props;

  if (variant === VARIANT.WITH_IMAGE) {
    return (
      <Base size={size} variant={variant}>
        <Image />
      </Base>
    );
  }

  return <Base size={size} variant={variant} />;
};

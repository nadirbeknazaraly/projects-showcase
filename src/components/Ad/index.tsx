import React from 'react';
import { Base } from './Base';
import { VARIANT } from 'constants/controls';
import { GenericProps } from 'components/Ad/types';

export const Ad = (props: GenericProps) => {
  const { variant, size } = props;

  if (variant === VARIANT.WITH_IMAGE) {
    return (
      <Base size={size} variant={variant}>
        <img
          width="100%"
          height="100%"
          alt="skittles-logo-10-26-21"
          src="https://www.skittles.com/sites/g/files/fnmzdf586/files/skittleslogo-10-26-21.svg"
        />
      </Base>
    );
  }

  return <Base size={size} variant={variant} />;
};

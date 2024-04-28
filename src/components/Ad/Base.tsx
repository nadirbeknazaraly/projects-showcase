import React from 'react';
import { SIZE } from 'constants/controls';
import { Title } from 'components/Ad/Title';
import { Button } from 'components/Ad/Button';
import { Wrapper } from 'components/Ad/Wrapper';
import { BaseProps } from 'components/Ad/types';
import { SubTitle } from 'components/Ad/SubTitle';
import { Container } from 'components/Ad/Container';

export const Base = (props: BaseProps) => {
  const { children, size, variant } = props;

  // Comment: different layout strategy can also be done using named grids, but so far this approach is better for this scenario
  return (
    <Container size={size} variant={variant}>
      {size === SIZE.BIG && children}
      <Wrapper variant={variant}>
        <Title size={size} variant={variant}>
          Dive into the rainbow
        </Title>
        <SubTitle size={size} variant={variant}>
          Experience unforgettable tangy skittles taste
        </SubTitle>
      </Wrapper>
      {size === SIZE.SMALL && children}
      <Button>Taste the rainbow - shop now</Button>
    </Container>
  );
};

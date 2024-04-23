import styled from 'styled-components';
import { GenericProps } from 'components/Ad/types';
import { SIZE, VARIANT } from 'constants/controls';

export const Title = styled.h1<GenericProps>`
  margin: 0;
  text-align: center;
  text-transform: uppercase;

  ${({ size, variant }) => {
    if (size === SIZE.BIG) {
      return `
        font-size: 32px;
      `;
    }

    if (variant === VARIANT.WITH_IMAGE) {
      return `
        font-size: 27px;
      `;
    } else {
      return `
        font-size: 23px;
      `;
    }
  }}
`;

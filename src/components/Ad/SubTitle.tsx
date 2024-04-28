import styled from 'styled-components';
import { GenericProps } from 'components/Ad/types';
import { SIZE, VARIANT } from 'constants/controls';

export const SubTitle = styled.p<GenericProps>`
  margin: 0;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  ${({ size, variant }) => {
    if (size === SIZE.BIG) {
      return `
        font-size: 18px;
      `;
    }

    if (variant === VARIANT.WITH_IMAGE) {
      return `
        font-size: 11px;
      `;
    } else {
      return `
        font-size: 13px;
      `;
    }
  }}
`;

import styled from 'styled-components';
import { VARIANT } from 'constants/controls';
import { GenericProps } from 'components/Ad/types';

export const Wrapper = styled.div<GenericProps>`
  gap: 6px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ variant }) => (variant === VARIANT.WITH_IMAGE ? 'flex-start' : 'center')};
`;

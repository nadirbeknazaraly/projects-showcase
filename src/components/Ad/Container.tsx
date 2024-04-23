import styled from 'styled-components';
import { GenericProps } from 'components/Ad/types';
import { SIZE, VARIANT } from 'constants/controls';

export const Container = styled.div<GenericProps>`
  width: 300px;
  padding: 24px;
  display: grid;
  color: #ffffff;
  grid-row-gap: 6px;
  box-sizing: border-box;
  background-size: cover;
  grid-template-columns: 1fr;
  background-position: center;
  background-repeat: no-repeat;
  grid-template-rows: ${({ variant }) =>
    variant === VARIANT.WITH_IMAGE ? 'auto 1fr auto' : '1fr auto'};
  height: ${({ size }) => (size === SIZE.BIG ? '600px' : '250px')};
  background-image: url('https://img.freepik.com/premium-photo/energetic-background-with-dynamic-gradient-transition-from-fiery-red-vibrant-yellow_879736-434.jpg?w=1800');
`;

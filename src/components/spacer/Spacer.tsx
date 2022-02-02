import React from 'react';
import styled from 'styled-components/native';
import {Direction, Size, Spacing} from '../../theme/layout';

interface SpacerProps {
  direction: Direction;
  size: Size;
}

function getProperty(direction: Direction) {
  return direction === 'vertical' ? 'height' : 'width';
}

const View = styled.View<SpacerProps>`
  ${({direction, size}) => `${getProperty(direction)}:${Spacing[size]}px`};
`;

const Spacer = ({size = 'xs', direction = 'vertical'}: SpacerProps) => {
  return <View size={size} direction={direction} />;
};

export default Spacer;

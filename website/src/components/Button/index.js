import React from 'react';
import styled from '@emotion/styled';
import { rgba } from 'utils/css-utils';
import { Flex } from 'reflexbox';

import Icon from 'components/Icon';
import { getThemeSpacePx, getThemeColor } from 'utils/css-utils';

const Button = styled.button`
  color: ${(p) => p.theme.colors[p.color || 'button']};
  border: ${(p) =>
    p.type === 'ghost'
      ? 'none'
      : `1px solid ${p.theme.colors[p.color || 'button']}`};
  background: ${(p) =>
    p.active
      ? rgba(p.color ? p.theme.colors[p.color] : p.theme.colors.button, 0.2)
      : 'none'};
  padding: ${getThemeSpacePx(2)} ${getThemeSpacePx(3)};
  border-radius: 25px;
  outline: none;
  cursor: pointer;
  font-size: ${(p) => p.theme.fontSizesPx[1]};
  letter-spacing: 0.5px;
  line-height: 1;
  transition: 0.075s all ease-in-out;

  &:visited,
  &:focus,
  &:active {
    color: ${(p) => p.theme.colors[p.color || 'button']};
  }

  &:hover {
    opacity: 1;
    color: ${getThemeColor('background')};
    background-color: ${getThemeColor('button')};

    svg {
      path,
      circle,
      rect,
      line,
      polyline {
        stroke: ${getThemeColor('background')};
      }
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default ({
  icon,
  color = 'button',
  children,
  type = 'normal',
  iconWidth = '32px',
  ...props
}) => (
  <Button color={color} type={type} {...props}>
    <Flex alignItems="center" justifyContent="center">
      {icon && (
        <Icon
          strokeColor={color}
          name={icon}
          colorizeStroke
          width={iconWidth}
          mr={1}
        />
      )}
      {children}
    </Flex>
  </Button>
);

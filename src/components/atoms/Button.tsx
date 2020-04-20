import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

type ButtonPosition = 'left' | 'right' | 'center';

const ButtonStyle = styled.button<{
  width: string;
  height: string;
  bgColor: string;
  disabled: boolean;
  borderColor: string;
  position: ButtonPosition;
}>`
  padding: 0.3rem;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: ${({ position }) => {
    switch (position) {
      case 'center':
        return '0 auto';
      case 'right':
        return '0 0 0 auto;';
      default:
        return '';
    }
  }};

  &:hover {
    ${({ disabled }) =>
      disabled ? '' : 'box-shadow: 0 0 8px ' + color.shadow.gray};
  }
`;

type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  width?: string;
  height?: string;
  bgColor?: string;
  form?: string;
  onClick?: () => void;
  disabled?: boolean;
  borderColor?: string;
  position?: ButtonPosition;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  width = '10rem',
  height = '3rem',
  form = '',
  bgColor = color.bg.white,
  onClick = () => {},
  disabled = false,
  borderColor = '',
  position = 'left'
}) => {
  return (
    <ButtonStyle
      type={type}
      width={width}
      height={height}
      bgColor={bgColor}
      form={form}
      onClick={() => onClick()}
      disabled={disabled}
      borderColor={borderColor}
      position={position}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

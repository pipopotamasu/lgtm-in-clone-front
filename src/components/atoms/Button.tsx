import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

const ButtonStyle = styled.button<{
  width: string;
  height: string;
  bgColor: string;
  disabled: boolean;
  borderColor: string;
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
  borderColor = ''
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
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

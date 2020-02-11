import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

const ButtonStyle = styled.button<{
  width: string;
  height: string;
  bgColor: string;
}>`
  padding: 0.3rem;
  border: 1px solid ${color.border.darkGray};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};

  &:hover {
    box-shadow: 0 0 8px ${color.shadow.gray};
  }
`;

type ButtonProps = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  width?: string;
  height?: string;
  bgColor?: string;
  form?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  width = '10rem',
  height = '3rem',
  form = '',
  bgColor = color.bg.white
}) => {
  return (
    <ButtonStyle
      type={type}
      width={width}
      height={height}
      bgColor={bgColor}
      form={form}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;

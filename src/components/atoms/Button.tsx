import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

const ButtonStyle = styled.button<{ width: string, height: string, bgColor: string }>`
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
`

type ButtonProps = {
  width?: string,
  height?: string,
  bgColor?: string
}

const Button: React.FC<ButtonProps> = ({ children, width = '10rem', height = '3rem', bgColor = color.bg.white }) => {
  return (
    <ButtonStyle width={width} height={height} bgColor={bgColor} >
      { children }
    </ButtonStyle>
  )
}

export default Button;
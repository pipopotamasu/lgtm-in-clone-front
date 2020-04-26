import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';
import { FieldError } from 'react-hook-form';

const InputStyle = styled.input<{
  isError: boolean;
}>`
  padding: 0.5rem;
  border: 1px solid
    ${({ isError }) => (isError ? color.border.error : color.border.darkGray)};
  border-radius: 4px;
  color: ${color.input.gray};
`;

const ErrorStyle = styled.span`
  margin-top: 0.2rem;
  color: ${color.text.error};
`;

type InputProps = {
  type: Dom.InputType | 'password';
  defaultValue: string;
  id: string;
  name: string;
  validation?: any;
  error?: FieldError;
};

const Input: React.FC<InputProps> = ({
  type,
  defaultValue,
  id,
  name,
  validation,
  error,
}) => {
  return (
    <>
      <InputStyle
        type={type}
        defaultValue={defaultValue}
        id={id}
        name={name}
        ref={validation}
        isError={!!error}
      />
      {error && <ErrorStyle>・{error.message}</ErrorStyle>}
    </>
  );
};

export default Input;

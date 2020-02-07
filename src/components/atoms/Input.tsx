import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

const InputStyle = styled.input`
  padding: 0.5rem;
  border: 1px solid ${color.border.darkGray};
  border-radius: 4px;
  color: ${color.input.gray};
`;

type InputProps = {
  type: Dom.InputType;
  defaultValue: string;
  id: string;
  name: string;
};

const Input: React.FC<InputProps> = ({ type, defaultValue, id, name }) => {
  return (
    <InputStyle type={type} defaultValue={defaultValue} id={id} name={name} />
  );
};

export default Input;

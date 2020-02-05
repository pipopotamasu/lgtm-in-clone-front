import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';
import { InputTypeEnum } from '../../enums/elements';

const InputStyle = styled.input`
  padding: 0.5rem;
  border: 1px solid ${color.border.darkGray};
  border-radius: 4px;
  color: ${color.input.gray};
`

type InputProps = {
  type: InputTypeEnum,
  value: string,
  id: string,
  name: string
}

const Input: React.FC<InputProps> = ({ type, value, id, name }) => {
  return (
    <InputStyle type={type} value={value} id={id} name={name} />
  )
}

export default Input;

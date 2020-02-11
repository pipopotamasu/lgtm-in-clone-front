import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  cursor: pointer;
  padding: 0.3rem 1rem;
  border: solid 1px #888;
  color: #888;
  > input {
    display: none;
  }

  &::after {
    content: '+';
    color: #888;
    padding-left: 1rem;
    position: relative;
    top: -0.05rem;
  }
`;

const FileInput: React.FC<{
  onChange: (e: ChangeEvent) => void;
  name: string;
}> = ({ onChange, name }) => {
  return (
    <Label>
      Select File
      <input onChange={(e) => onChange(e)} name={name} type="file" />
    </Label>
  );
};

export default FileInput;

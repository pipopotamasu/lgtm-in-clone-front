import React from 'react';
import styled from 'styled-components';

const Label = styled.label<{
  required: boolean;
}>`
  margin-bottom: 0.2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.8rem;

  ${({ required }) => {
    if (required) {
      return `
        &:after {
          padding-left: 5px;
          color: #cb2431;
          content: "*";
        }
      `;
    }
  }}
`;

type LabelProps = {
  required?: boolean;
  htmlFor?: string;
};

const SignupForm: React.FC<LabelProps> = ({
  children,
  required = false,
  htmlFor = ''
}) => {
  return (
    <Label required={required} htmlFor={htmlFor}>
      {children}
    </Label>
  );
};

export default SignupForm;

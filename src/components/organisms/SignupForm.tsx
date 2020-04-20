import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import InputLabel from '../atoms/InputLabel';
import Button from '../atoms/Button';
import FormGroup from '../atoms/FormGroup';

const SignupFormBlock = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const SignupForm: React.FC = () => {
  return (
    <SignupFormBlock>
      <FormGroup>
        <InputLabel required={true} htmlFor="email">
          Email
        </InputLabel>
        <Input type="text" defaultValue="" name="email" id="email" />
      </FormGroup>
      <FormGroup>
        <InputLabel required={true} htmlFor="password">
          Password
        </InputLabel>
        <Input type="password" defaultValue="" name="password" id="password" />
      </FormGroup>
      <FormGroup>
        <InputLabel required={true} htmlFor="passwordConfirmation">
          PasswordConfirmation
        </InputLabel>
        <Input
          type="password"
          defaultValue=""
          name="passwordConfirmation"
          id="passwordConfirmation"
        />
      </FormGroup>
      <Button position="center">Create account</Button>
    </SignupFormBlock>
  );
};

export default SignupForm;

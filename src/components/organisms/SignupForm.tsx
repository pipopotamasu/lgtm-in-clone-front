import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import InputLabel from '../atoms/InputLabel';
import Button from '../atoms/Button';
import FormGroup from '../atoms/FormGroup';
import { useForm } from 'react-hook-form';

const SignupFormBlock = styled.form`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const SignupForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => { console.log(data) }

  return (
    <SignupFormBlock id="signup-form" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <InputLabel required={true} htmlFor="email">
          Email
        </InputLabel>
        <Input
          type="text"
          defaultValue=""
          name="email"
          id="email"
          validation={register({ pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </FormGroup>
      <FormGroup>
        <InputLabel required={true} htmlFor="password">
          Password
        </InputLabel>
        <Input
          type="password"
          defaultValue=""
          name="password"
          id="password"
          validation={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}
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
          validation={register({ required: true })}
        />
        {errors.passwordConfirmation && <span>This field is required</span>}
      </FormGroup>
      <Button position="center" type="submit" form="signup-form">Create account</Button>
    </SignupFormBlock>
  );
};

export default SignupForm;

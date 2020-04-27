import React, { useCallback } from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import InputLabel from '../atoms/InputLabel';
import Button from '../atoms/Button';
import FormGroup from '../atoms/FormGroup';
import { useForm } from 'react-hook-form';
import AuthService from '../../services/AuthService';

const SignupFormBlock = styled.form`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

type FormParams = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormParams>();

  const onSubmit = useCallback(async (data: FormParams) => {
    const { email, password, confirmPassword } = data;
    const res = await AuthService.signup(email, password, confirmPassword);
    console.log(res);
  }, []);

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
          validation={register({
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email form',
            },
            required: 'This field is required',
          })}
          error={errors.email}
        />
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
          validation={register({
            required: 'This field is required',
            minLength: {
              value: 4,
              message: 'Password must be more than 3 characters',
            },
          })}
          error={errors.password}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel required={true} htmlFor="passwordConfirmation">
          PasswordConfirmation
        </InputLabel>
        <Input
          type="password"
          defaultValue=""
          name="confirmPassword"
          id="confirmPassword"
          validation={register({
            required: 'This field is required',
            minLength: {
              value: 4,
              message: 'Password must be more than 3 characters',
            },
          })}
          error={errors.confirmPassword}
        />
      </FormGroup>
      <Button position="center" type="submit" form="signup-form">
        Create account
      </Button>
    </SignupFormBlock>
  );
};

export default SignupForm;

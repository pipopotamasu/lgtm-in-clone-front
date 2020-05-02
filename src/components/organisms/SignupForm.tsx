import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/atoms/Input';
import InputLabel from 'src/components/atoms/InputLabel';
import Button from 'src/components/atoms/Button';
import FormGroup from 'src/components/atoms/FormGroup';
import { useForm } from 'react-hook-form';
import { useSignup, FormParams } from 'src/hooks/useSignup';

const SignupFormBlock = styled.form`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const SignupForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormParams>();
  const { signup, loading } = useSignup();

  return (
    <SignupFormBlock id="signup-form" onSubmit={handleSubmit(signup)}>
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
      <Button
        disabled={loading}
        position="center"
        type="submit"
        form="signup-form"
      >
        Create account
      </Button>
    </SignupFormBlock>
  );
};

export default SignupForm;

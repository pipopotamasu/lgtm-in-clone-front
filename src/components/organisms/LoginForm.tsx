import React from 'react';
import styled from 'styled-components';
import Input from 'src/components/atoms/Input';
import InputLabel from 'src/components/atoms/InputLabel';
import Button from 'src/components/atoms/Button';
import FormGroup from 'src/components/atoms/FormGroup';
import { useForm } from 'react-hook-form';
import { useLogin, FormParams } from 'src/hooks/useLogin';
import { emailValidator, passwordValidator } from 'src/validators';

const LoginFormBlock = styled.form`
  width: 50%;
  margin: 0 auto;
  padding-bottom: 4rem;
`;

const LoginForm: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormParams>();
  const { login, loading } = useLogin();

  return (
    <LoginFormBlock id="login-form" onSubmit={handleSubmit(login)}>
      <FormGroup>
        <InputLabel required={true} htmlFor="email">
          Email
        </InputLabel>
        <Input
          type="text"
          defaultValue=""
          name="email"
          id="email"
          validation={emailValidator(register)}
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
          validation={passwordValidator(register)}
          error={errors.password}
        />
      </FormGroup>
      <Button
        disabled={loading}
        position="center"
        type="submit"
        form="login-form"
      >
        Login
      </Button>
    </LoginFormBlock>
  );
};

export default LoginForm;

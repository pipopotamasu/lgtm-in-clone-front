export const emailValidator = (register: any) => {
  return register({
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Invalid email form',
    },
    required: 'This field is required',
  });
};

export const passwordValidator = (register: any) => {
  return register({
    required: 'This field is required',
    minLength: {
      value: 4,
      message: 'Password must be more than 3 characters',
    },
  });
};

export const passwordConfirmationValidator = (register: any, watch: any) => {
  return register({
    required: 'This field is required',
    minLength: {
      value: 4,
      message: 'Password must be more than 3 characters',
    },
    validate: (value: string) =>
      value === watch('password') || 'Passwords do not match.',
  });
};

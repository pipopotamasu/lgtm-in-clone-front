export const emailValidator = (register: Function) => {
  return register({
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: 'Invalid email form',
    },
    required: 'This field is required',
  });
};

export const passwordValidator = (register: Function) => {
  return register({
    required: 'This field is required',
    minLength: {
      value: 4,
      message: 'Password must be more than 3 characters',
    },
  });
};

export const passwordConfirmationValidator = (
  register: Function,
  watch: Function
) => {
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

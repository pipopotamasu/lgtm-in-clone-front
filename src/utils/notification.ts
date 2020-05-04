import { toast } from 'react-toastify';

export function success(message: string) {
  toast(message, {
    position: 'top-center',
    autoClose: 3000,
    type: 'success',
  });
}

export function error(message: string) {
  toast(message, {
    position: 'top-center',
    autoClose: 10000,
    type: 'error',
  });
}

export function info(message: string) {
  toast(message, {
    position: 'top-center',
    autoClose: 5000,
    type: 'info',
  });
}

export function warning(message: string) {
  toast(message, {
    position: 'top-center',
    autoClose: 10000,
    type: 'warning',
  });
}

export const $notification = {
  success,
  error,
  info,
} as Readonly<{
  success: typeof success;
  error: typeof error;
  info: typeof info;
  warning: typeof warning;
}>;

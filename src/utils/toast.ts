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

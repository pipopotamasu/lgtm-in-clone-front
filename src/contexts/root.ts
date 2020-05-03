import { createContext } from 'react';
import { $notification } from 'src/utils/notification';
import { $api } from 'src/services';

export const context = {
  $api,
  $notification,
};

export const RootContext = createContext(context);

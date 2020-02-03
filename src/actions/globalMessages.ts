export enum GlobalMessagesActionEnum {
  ERROR_MESSAGE = 'globalMessages/ERROR_MESSAGE'
}

export const showErrorMessage = (message: string) => {
  return {
    type: GlobalMessagesActionEnum.ERROR_MESSAGE,
    payload: message
  };
};

interface ErrorMessageAction extends ReturnType<typeof showErrorMessage> {
  type: GlobalMessagesActionEnum.ERROR_MESSAGE;
}


export type GlobalMessagesActions = ErrorMessageAction;

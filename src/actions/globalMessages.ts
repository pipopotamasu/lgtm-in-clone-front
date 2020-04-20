export enum GlobalMessagesActionEnum {
  ERROR_MESSAGE = 'globalMessages/ERROR_MESSAGE',
}

export const handleErrorMessage = (message: string) => {
  return {
    type: GlobalMessagesActionEnum.ERROR_MESSAGE as const,
    payload: message,
  };
};

export type GlobalMessagesActions = ReturnType<typeof handleErrorMessage>;

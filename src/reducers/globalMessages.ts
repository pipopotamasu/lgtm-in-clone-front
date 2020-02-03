import { GlobalMessagesActionEnum, GlobalMessagesActions } from '../actions/globalMessages';

const initialState = {
  errorMessage: '',
};

export default (
  state = initialState,
  action: GlobalMessagesActions
) => {
  switch (action.type) {
    case GlobalMessagesActionEnum.ERROR_MESSAGE:
      return {
        ...state,
        ...{ errorMessage: action.payload }
      };
    default:
      return state;
  }
};

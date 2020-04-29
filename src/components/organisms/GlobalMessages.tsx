import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'src/reducers/store';
import ErrorModal from 'src/components/molecules/ErrorModal';
import { handleErrorMessage as handleErrorMessageCreator } from 'src/actions/globalMessages';

const globalMessagesSelector = (state: AppState) => state.globalMessages;

const GlobalMessages: React.FC = () => {
  const globalMessages = useSelector(globalMessagesSelector);
  const dispatch = useDispatch();

  const onClcikModal = useCallback((): void => {
    dispatch(handleErrorMessageCreator(''));
  }, [dispatch]);
  return (
    <>
      <ErrorModal
        message={globalMessages.errorMessage}
        onClick={onClcikModal}
      />
    </>
  );
};

export default GlobalMessages;

import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

const ModalContainer = styled.div<{ display: CSS.Display }>`
  display: ${(props) => (props.display)};
  position: absolute;
  z-index: 9998;
  top: 0;
  right: 0;
  left: 0;
  width: 40%;
  margin: 0 auto;
  padding: 5px 20px;
  background-color: ${color.bg.error};
  color: ${color.text.white};
  border-radius: 2px;
  box-shadow: 0 2px 8px ${color.shadow.gray};
  animation: fadeIn 0.5s ease 0s;
  text-align: center;
  cursor: pointer;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalBody = styled.div`
  margin: 10px 0;
`;

const ErrorModal: React.FC<{ message: string; onClick: () => void }> = ({
  message,
  onClick
}) => {
  return (
    <ModalContainer display={!!message ? 'block' : 'none'} onClick={() => onClick()}>
      <ModalBody>{message}</ModalBody>
    </ModalContainer>
  );
};

export default ErrorModal;

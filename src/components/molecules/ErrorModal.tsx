import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div<{ display: boolean }>`
  display: ${props => props.display ? 'block' : 'none'};
  position: absolute;
  z-index: 9998;
  top: 0;
  right: 0;
  left: 0;
  width: 40%;
  margin: 0 auto;
  padding: 5px 20px;
  background-color: #ea352d;
  color: white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
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
`

const ModalBody = styled.div`
  margin: 10px 0;
`

const ErrorModal: React.FC<{ message: string, onClick: () => void }> = ({ message, onClick }) => {
  return (
      <ModalContainer display={!!message} onClick={() => onClick()}>
        <ModalBody>
          { message }
        </ModalBody>
      </ModalContainer>
  )
}

export default ErrorModal;

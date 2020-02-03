import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';
import ActionList from './ActionList';
import Card from '../atoms/BaseCard';

const ImgDummyWrapper = styled.div`
  height: 80%;
  background-color: ${color.placeholder.img};
  margin-bottom: 0.3rem;
  animation: fading 1.5s infinite;

  @keyframes fading {
    0% {
      opacity: 0.1;
    }

    50% {
      opacity: 0.2;
    }

    100% {
      opacity: 0.1;
    }
  }
`;

const ImgDummy = styled.p`
  height: 180px;
`;

const LgtmCard: React.FC = () => {
  return (
    <>
      <Card>
        <ImgDummyWrapper>
          <ImgDummy />
        </ImgDummyWrapper>
        <ActionList />
      </Card>
    </>
  );
};

export default LgtmCard;
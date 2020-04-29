import React from 'react';
import styled from 'styled-components';
import { color } from 'src/constants/cssVariables';
import ActionList from 'src/components/molecules/ActionList';
import Card from 'src/components/atoms/BaseCard';
import { Post } from 'src/reducers/posts';

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
        <ActionList
          post={{} as Post}
          onClickBookmark={() => {}}
          loggedIn={false}
        />
      </Card>
    </>
  );
};

export default LgtmCard;

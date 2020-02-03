import React from 'react';
import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown, FiHeart } from 'react-icons/fi';
import { color, fontSize } from '../../constants/cssVariables';

const Card = styled.div`
  width: 16.6667%;
  border: 1px solid ${color.border.gray};
  padding: 0.2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  max-height: 240px;

  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const ImgDummyWrapper = styled.div`
  height: 80%;
  background-color: ${color.placeholder.img};
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

const ActionList = styled.ul`
  display: flex;
`;

const ActionItem = styled.li<{ right?: boolean }>`
  list-style: none;
  padding: 0.4rem;
  ${({ right }) => (right ? 'margin-left: auto;' : '')}
`;

const LgtmCard: React.FC = () => {
  return (
    <>
      <Card>
        <ImgDummyWrapper>
          <ImgDummy />
        </ImgDummyWrapper>
        <ActionList>
          <ActionItem>
            <FiThumbsUp color={color.icon.blue} size={fontSize.icon.base} />
          </ActionItem>
          <ActionItem>
            <FiHeart color={color.icon.blue} size={fontSize.icon.base} />
          </ActionItem>
          <ActionItem right>
            <FiThumbsDown color={color.icon.blue} size={fontSize.icon.base} />
          </ActionItem>
        </ActionList>
      </Card>
    </>
  );
};

export default LgtmCard;

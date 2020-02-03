import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';
import { Post } from '../../reducers/posts';
import Card from '../atoms/BaseCard';
import ActionList from './ActionList';

const ImgWrapper = styled.div`
  height: 80%;
  background-color: ${color.bg.gray};
  margin-bottom: 0.3rem;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;

const LgtmCard: React.FC<{ post: Post; onClick: (post: Post) => void }> = ({
  post,
  onClick
}) => {
  return (
    <Card>
      <ImgWrapper>
        <Img src={post.src} onClick={() => onClick(post)} />
      </ImgWrapper>
      <ActionList />
    </Card>
  );
};

export default LgtmCard;

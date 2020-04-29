import React from 'react';
import styled from 'styled-components';
import { color } from 'src/constants/cssVariables';
import { Post } from 'src/reducers/posts';
import Card from 'src/components/atoms/BaseCard';
import ActionList from 'src/components/molecules/ActionList';
import { Link } from 'react-router-dom';

const ImgWrapper = styled.div`
  height: 80%;
  background-color: ${color.bg.gray};
  margin-bottom: 0.3rem;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const LgtmCard: React.FC<{
  post: Post;
  onClickImg: (post: Post) => void;
  loggedIn: boolean;
  onClickBookmark: (post: Post) => void;
}> = ({ post, onClickImg, loggedIn, onClickBookmark }) => {
  return (
    <Card>
      <Link to={`/posts/${post.id}`}>
        <ImgWrapper>
          <Img src={post.src} onClick={() => onClickImg(post)} />
        </ImgWrapper>
      </Link>
      <ActionList
        post={post}
        onClickBookmark={onClickBookmark}
        loggedIn={loggedIn}
      />
    </Card>
  );
};

export default LgtmCard;

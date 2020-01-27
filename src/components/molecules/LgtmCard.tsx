import React from 'react';
import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown, FiHeart } from 'react-icons/fi';
import { color, fontSize } from '../../constants/cssVariables';
import { Post } from '../../reducers/posts';

const Card = styled.div`
  width: 16.6667%;
  border: 1px solid ${color.border.gray};
  padding: 0.2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const Img = styled.img`
  max-width: 100%;
  cursor: pointer;
`;

const ActionList = styled.ul`
  display: flex;
`;

const ActionItem = styled.li<{ right?: boolean }>`
  list-style: none;
  padding: 0.4rem;
  ${({ right }) => (right ? 'margin-left: auto;' : '')}
`;

const LgtmCard: React.FC<{ post: Post, onClick: (post: Post) => void }> = ({ post, onClick }) => {
  return (
    <>
      <Card>
        <Img src={post.src} onClick={() => onClick(post)} />
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
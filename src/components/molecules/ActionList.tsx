import React from 'react';
import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown, FiHeart } from 'react-icons/fi';
import { color, fontSize } from 'src/constants/cssVariables';
import { Post } from 'src/reducers/posts';

const ActionUl = styled.ul`
  display: flex;
`;

const ActionItem = styled.li<{ right?: boolean; disabled: boolean }>`
  list-style: none;
  padding: 0.4rem;
  ${({ right }) => (right ? 'margin-left: auto;' : '')}
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const ActionList: React.FC<{
  post: Post;
  loggedIn: boolean;
  onClickBookmark: (post: Post) => void;
}> = ({ post, loggedIn, onClickBookmark }) => {
  return (
    <ActionUl>
      <ActionItem disabled={!loggedIn}>
        <FiThumbsUp color={color.icon.blue} size={fontSize.icon.base} />
      </ActionItem>
      <ActionItem disabled={!loggedIn} onClick={() => onClickBookmark(post)}>
        <FiHeart
          fill={post.bookmarked ? color.icon.blue : 'white'}
          color={color.icon.blue}
          size={fontSize.icon.base}
        />
      </ActionItem>
      <ActionItem disabled={!loggedIn} right>
        <FiThumbsDown color={color.icon.blue} size={fontSize.icon.base} />
      </ActionItem>
    </ActionUl>
  );
};

export default ActionList;

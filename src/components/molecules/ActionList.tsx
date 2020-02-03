import React from 'react';
import styled from 'styled-components';
import { FiThumbsUp, FiThumbsDown, FiHeart } from 'react-icons/fi';
import { color, fontSize } from '../../constants/cssVariables';

const ActionUl = styled.ul`
  display: flex;
`;

const ActionItem = styled.li<{ right?: boolean }>`
  list-style: none;
  padding: 0.4rem;
  ${({ right }) => (right ? 'margin-left: auto;' : '')}
`;

const ActionList: React.FC = () => {
  return (
    <ActionUl>
      <ActionItem>
        <FiThumbsUp color={color.icon.blue} size={fontSize.icon.base} />
      </ActionItem>
      <ActionItem>
        <FiHeart color={color.icon.blue} size={fontSize.icon.base} />
      </ActionItem>
      <ActionItem right>
        <FiThumbsDown color={color.icon.blue} size={fontSize.icon.base} />
      </ActionItem>
    </ActionUl>
  );
};

export default ActionList;

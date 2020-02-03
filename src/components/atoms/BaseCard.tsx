import React from 'react';
import styled from 'styled-components';
import { color } from '../../constants/cssVariables';

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

const BaseCard: React.FC = ({ children }) => {
  return <Card>{children}</Card>;
};

export default BaseCard;
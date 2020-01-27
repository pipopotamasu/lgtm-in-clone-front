import React from 'react';
import styled from 'styled-components';
import LgtmCard from '../molecules/LgtmCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const LgtmCards: React.FC = () => {
  const Cards = [0,1,2,3,4,5,6,7,8,9].map((e, i) => <LgtmCard key={i} />)

  return (
    <Container>
      { Cards }
    </Container>
  );
};

export default LgtmCards;

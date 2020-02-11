import React from 'react';
import styled from 'styled-components';

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

const PreviewImage: React.FC<{ src: string | null }> = ({ src }) => {
  return (
    <Figure>
      <Img src={src || 'no_image.svg'} alt="" />
    </Figure>
  );
};

export default PreviewImage;

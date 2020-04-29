import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';
import { fontSize } from 'src/constants/cssVariables';
import styled from 'styled-components';
import { color } from 'src/constants/cssVariables';

const Wrapper = styled.span`
  &:hover {
    color: ${color.text.black};
  }
`;

const Hamburger: React.FC<{ onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <Wrapper>
      <GiHamburgerMenu onClick={() => onClick()} size={fontSize.icon.base}>
        {{ children }}
      </GiHamburgerMenu>
    </Wrapper>
  );
};

export default Hamburger;

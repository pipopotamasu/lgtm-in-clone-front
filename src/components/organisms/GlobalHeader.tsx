import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { color, width } from '../../constants/cssVariables';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = styled.header`
  width: 100%;
  background-color: ${color.bg.gray};
  border-bottom: 1px solid ${color.border.gray};
`;

const Nav = styled.nav`
  width: ${width.base};
  margin: 0 auto;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li<{ right?: boolean }>`
  color: ${color.text.gray};
  padding: 0.8rem 1rem;
  cursor: pointer;
  ${({ right }) => (right ? 'margin-left: auto;' : '')}

  &:hover {
    color: ${color.text.black};
  }
`;

const GlobalHeader: React.FC = () => {
  const { initAuth0, login, logout, currentUser } = useAuth();

  useEffect(() => {
    initAuth0();
  }, [initAuth0]);

  const AuthItem = useMemo(() => {
    console.log(currentUser);
    if (currentUser) {
      return (
        <Item onClick={() => logout({})} right>
          Logout
        </Item>
      );
    }

    return (
      <Item onClick={() => login({})} right>
        Login
      </Item>
    );
  }, [login, logout, currentUser]);

  return (
    <Header>
      <Nav>
        <List>
          <Item>
            <Link to="/">Home</Link>
          </Item>
          <Item>
            <Link to="/random">Random</Link>
          </Item>
          <Item>
            <Link to="/submit">Submit</Link>
          </Item>
          <Item>
            <Link to="/browse">Browse</Link>
          </Item>
          {AuthItem}
        </List>
      </Nav>
    </Header>
  );
};

export default GlobalHeader;

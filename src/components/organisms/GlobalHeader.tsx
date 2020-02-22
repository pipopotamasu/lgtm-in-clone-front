import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { color, width } from '../../constants/cssVariables';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import HamburgerMenu from '../molecules/HamburgerMenu';

const Header = styled.header`
  width: 100%;
  background-color: ${color.bg.gray};
  border-bottom: 1px solid ${color.border.gray};
  height: 50px;
`;

const Nav = styled.nav`
  width: ${width.base};
  margin: 0 auto;
  height: inherit;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  height: inherit;
  align-items: center;
`;

const ItemLeft = styled.li`
  color: ${color.text.gray};
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: ${color.text.black};
  }
`;

const ItemRight = styled.li`
  color: ${color.text.gray};
  padding: 0 1rem;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const GlobalHeader: React.FC = () => {
  const { initAuth0, login, logout, currentUser } = useAuth();

  useEffect(() => {
    initAuth0();
  }, [initAuth0]);

  const AuthItem = useMemo(() => {
    if (currentUser) {
      return (
        <ItemRight>
          <HamburgerMenu onClickLogout={logout} />
        </ItemRight>
        // <Item onClick={() => logout({})} right>
        //   Logout
        // </Item>
      );
    }

    return (
      <ItemRight onClick={() => login({})}>
        Login
      </ItemRight>
    );
  }, [login, logout, currentUser]);

  return (
    <Header>
      <Nav>
        <List>
          <Link to="/">
            <ItemLeft>Home</ItemLeft>
          </Link>
          <Link to="/random">
            <ItemLeft>Random</ItemLeft>
          </Link>
          <Link to="/submit">
            <ItemLeft>Submit</ItemLeft>
          </Link>
          <Link to="/browse">
            <ItemLeft>Browse</ItemLeft>
          </Link>
          {AuthItem}
        </List>
      </Nav>
    </Header>
  );
};

export default GlobalHeader;

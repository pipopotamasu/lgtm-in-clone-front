import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Hamburger from '../atoms/Hamburger';
import { color } from '../../constants/cssVariables';

const Wrapper = styled.div`
  position: relative;
`

const MenuList = styled.ul`
  position: absolute;
  list-style: none;
  background-color: white;
  padding: 0.8rem 0;
  box-shadow: 0 2px 8px ${color.shadow.gray};
  top: 1.5rem;
  left: -4.5rem;
  width: 8rem;
  z-index: 4;

  &:before {
    content: "";
    border-color: transparent transparent #fff;
    border-style: solid;
    border-width: 15px 20px;
    left: 2.5rem;
    pointer-events: none;
    top: -25px;
    z-index: 5;
    position: absolute;
  }
`

const MenuItem = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.2rem 0 0.2rem 1rem;

  &:last-child {
    margin-bottom: 0rem;
  }

  &:hover {
    color: ${color.text.black};
    background-color: ${color.bg.gray};
  }
`

const MenuBg = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  bottom: 0;
  opacity: 0;
  z-index: 1;
`

const HamburgerMenu: React.FC<{ onClickLogout: (params: Object) => void }> = ({ onClickLogout }) => {
  const [open, setOpen] = useState(false);
  const toggleHamburger = useCallback(() => {
    setOpen(!open)
  }, [open]);

  const Menu = useMemo(() => {
    return <div onClick={toggleHamburger}>
            <MenuBg />
            <Wrapper>
              <MenuList>
                <MenuItem>My List</MenuItem>
                <MenuItem onClick={() => { onClickLogout({}) }}>Logout</MenuItem>
              </MenuList>
            </Wrapper>
           </div>
  }, [toggleHamburger, onClickLogout])

  return (
    <>
      <Hamburger onClick={toggleHamburger} />
      { open && Menu }
    </>
  )
}

export default HamburgerMenu;
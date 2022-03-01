import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { scaleDown as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../responsive';
import menuStyles from './menuStyles';

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    
    `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
        text-sm
        md:text-base
        text-black
        font-medium
        mr-1
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        md:hover:text-gray-700    
        hover:text-gray-400
    `}
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  if (isMobile)
    return (
      <Menu
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
        right
        styles={menuStyles}
      >
        
        <ListContainer>
          <NavItem menu>
            <a  href="/#about" onClick={closeSideBar}>
              About
            </a>
          </NavItem>
          <NavItem menu>
            <a href="/#cars" onClick={closeSideBar}>Cars</a>
          </NavItem>
          <NavItem menu>
            <a href="/#services" onClick={closeSideBar}>Services</a>
          </NavItem>
          <NavItem menu>
            <a href="/#contact" onClick={closeSideBar}>Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="/#about">About</a>
      </NavItem>
      <NavItem>
        <a href="/#cars">Cars</a>
      </NavItem>
      <NavItem>
        <a href="/#services">Services</a>
      </NavItem>
      <NavItem>
        <a href="/#contact">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
}

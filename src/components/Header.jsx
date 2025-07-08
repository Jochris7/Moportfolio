import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2c313a;
  padding: 15px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3c424a;
  border-radius: 8px;
  margin: 0px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
`;

const NavLinkWrapper = styled(Link)`
  color: #abb2bf;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

const SayHelloButton = styled(Link)`
  background-color: transparent;
  color: #00bf8f;
  border: 2px solid #00bf8f;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1.0em;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #00bf8f;
    color: #ffffff;
  }
`;

function Header({ navLinks, sayHelloLink }) {
  return (
    <HeaderContainer>
      <nav>
        <NavList>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLinkWrapper to={link.path}>{link.name}</NavLinkWrapper>
            </li>
          ))}
        </NavList>
      </nav>
      <SayHelloButton to={sayHelloLink.path}>{sayHelloLink.name}</SayHelloButton>
    </HeaderContainer>
  );
}

Header.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  sayHelloLink: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
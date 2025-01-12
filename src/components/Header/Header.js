import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  &:hover {
    color: #d61c62;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background: #d61c62;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Header = () => {
  const { logout } = useAuth();

  return (
    <HeaderContainer>
      <Nav>
        <Logo>La-Wasit</Logo>
        <NavLinks>
          <StyledNavLink to="#">Buy</StyledNavLink>
          <StyledNavLink to="#">Rent</StyledNavLink>
          <StyledNavLink to="#">Sell</StyledNavLink>
          <StyledNavLink to="#">Commercial</StyledNavLink>
          <StyledNavLink to="/list-property">Post Property</StyledNavLink>
          <Button onClick={logout}>Logout</Button>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1700px;
  padding: 10px 0;
  background-color: ${(props) => props.theme.background.primary};
  font-weight: 500;
  margin: 0 auto;
  transition: 0.3s;

  &.sticky {
    position: sticky;
    top: 0;
    z-index: 100;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  gap: 2rem;
  background-color: transparent;
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.background.secondary};
  background-color: ${(props) => props.theme.background.primary};
  text-decoration: none;
  padding: 0.7rem 3rem;
  border-radius: 10px;

  &.active {
    background-color: ${(props) => props.theme.background.componentBackground};
  }
`;

export const RightNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
`;

export const SearchWrapper = styled.div`
  color: ${(props) => props.theme.background.secondary};
  background-color: ${(props) => props.theme.background.componentBackground};
  padding: 0.7rem;
  padding-left: 1.4rem;
  display: flex;
  border-radius: 10px;
  width: 350px;
`;

export const ThemeChangeWrapper = styled.div`
  background-color: ${(props) => props.theme.background.componentBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 0;
  width: 47px;
  border-radius: 10px;
`;

export const CurrencyChangeWrapper = styled.div`
  background-color: ${(props) => props.theme.background.componentBackground};
  border-radius: 10px;
  padding: 0.45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const CurrencyChanger = styled.select`
  background-color: ${(props) => props.theme.background.componentBackground};
  color: ${(props) => props.theme.background.secondary};
  border: none;
  font-size: 17px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
`;

export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  color: ${(props) => props.theme.background.secondary};
  padding-left: 0.7rem;
  &::placeholder {
    color: ${(props) => props.theme.background.secondary};
    font-weight: 500;
  }

  &:focus {
    outline: none;
    font-weight: 500;
    color: ${(props) => props.theme.background.secondary};
  }
`;

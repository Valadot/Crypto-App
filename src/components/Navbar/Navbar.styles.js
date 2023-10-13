import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #191b1f; */
  border-radius: 10px 10px 0 0;
  padding: 10px;
  font-weight: 500;

  * {
    box-sizing: border-box;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  gap: 2rem;
  background-color: transparent;
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.textcolor};
  background-color: ${(props) => props.bgcolor};
  text-decoration: none;
  padding: 0.7rem 3rem;
  border-radius: 10px;
`;

export const RightNavbar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
`;

export const SearchWrapper = styled.div`
  background-color: ${(props) => props.bgcolor};
  padding: 0.7rem;
  padding-left: 1.4rem;
  display: flex;
  border-radius: 10px;
  width: 350px;
`;

export const ThemeChangeWrapper = styled.div`
  background-color: ${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 0;
  width: 47px;
  border-radius: 10px;
`;

export const CurrencyChangeWrapper = styled.div`
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
  padding: 0.45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const CurrencyChanger = styled.select`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.textcolor};
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
  color: ${(props) => props.textcolor};
  padding-left: 0.7rem;
  &::placeholder {
    color: ${(props) => props.textcolor};
    font-weight: 500;
  }

  &:focus {
    outline: none;
    font-weight: 500;
    color: ${(props) => props.textcolor};
  }
`;

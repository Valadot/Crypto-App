import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "475px",
  tablet: "800px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1700px;
  padding: 10px 1rem;
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

  @media ${devices.tablet} {
    display: none;
  }
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

  @media ${devices.tablet} {
    border-radius: 0;
    background-color: transparent;
    text-align: right;
    padding: 0.3rem 0.2rem 0.3rem 2rem;
    border-radius: 8px;
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
  position: relative;

  @media ${devices.laptopL} {
    width: 250px;
    margin-left: 1rem;
  }

  @media ${devices.mobileL} {
    width: 150px;
    margin-left: 1rem;
  }
`;

export const ThemeChangeWrapper = styled.div`
  background-color: ${(props) => props.theme.background.componentBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 0;
  width: 47px;
  border-radius: 10px;

  @media ${devices.tablet} {
    display: none;
  }
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

export const FilteredDropdown = styled.div`
  position: absolute;
  padding-left: 1rem;
  z-index: 99;
  top: 50px;
  left: 2px;
  width: 100%;
  display: flex;
  background-color: ${(props) => props.theme.background.componentBackground};
  flex-direction: column;
  border-radius: 10px;

  @media ${devices.mobileL} {
    width: 235px;
  }
`;

export const DropdownItem = styled(NavLink)`
  width: 100%;
  border-radius: 10px;
  padding: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.background.secondary};
`;

export const MobileRightNavbar = styled.div`
  display: none;
  cursor: pointer;
  position: relative;

  @media ${devices.tablet} {
    display: block;
    padding-right: 1rem;
  }
`;

export const MobileNavLinkWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 60px;
  z-index: 2;
  margin-top: 1rem;
  padding-right: 0.4rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  background-color: ${(props) => props.theme.background.componentBackground};
  text-align: right;
  border-radius: 8px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const MobileThemechange = styled.p`
  border-radius: 0;
  background-color: transparent;
  text-align: right;
  padding: 0.3rem 0.2rem 0.3rem 2rem;
  border-radius: 8px;
`;

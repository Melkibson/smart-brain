import styled from "styled-components"
import Logo from "../Logo/Logo"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;
`;

export default function Navigation() {
  return (
    <Nav>
      <Logo />
    </Nav>
  );
}
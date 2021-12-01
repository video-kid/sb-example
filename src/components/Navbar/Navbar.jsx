import styled from "styled-components";
import { navbarStyles } from "./navbarStyles";

const Navbar = ({
  children,
  className = "",
  padding = "1rem 1.5rem",
  align = "left",
  width = "100%",
}) => {
  return <nav className={`navbar ${className}`}>{children}</nav>;
};

export default styled(Navbar)`
  ${navbarStyles}
`;

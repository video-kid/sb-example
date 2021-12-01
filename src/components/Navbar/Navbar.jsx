import styled from "styled-components";
import { navbarStyles } from "./navbarStyles";

/**
 * Navbar component
 *
 * @param {string} [className=""] Custom class names
 * @param {string} [padding="1rem 1.5rem"] Navbars padding, default is "1rem 1.5rem"
 * @param {string} [align="left"] Navbars childrens direction, default left
 * @param {string} [width="100%"] Navbars width, default is "100%"
 * @returns {HTMLElement} Return Navbar Component
 */

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

import { css } from "styled-components";

const alignments = {
  left: "row",
  right: "row-reverse",
};

export const navbarStyles = css`
  background-color: ${({ theme }) => theme.navbars.background};
  color: ${({ theme }) => theme.navbars.color};
  padding: ${({ padding = "1rem 1.5rem" }) => padding};
  filter: ${({ theme }) => theme.navbars.filter};
  display: flex;
  align-items: center;
  flex-direction: ${({ align = "left" }) => alignments[align]};
  justify-content: space-between;
  width: ${({ width = "100%" }) => width};
`;

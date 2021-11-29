import styled, { css } from "styled-components";

const buttonColorSchemes = {
  primary: {
    background: "#3700b3",
    text: "#ffffff",
    border: "#3700b3",
  },
  secondary: {
    background: "#ffffff",
    text: "#3700b3",
    border: "#3700b3",
  },
  danger: {
    background: "#b00020",
    text: "#ffffff",
    border: "#b00020",
  },
};

export const ButtonResetCss = css`
  color: inherit;
  margin: 0;
  padding: 0;
  background-color: transparent;
  font-size: inherit;
  font-family: inherit;
  border: none;
  cursor: pointer;
  display: block;
  &:focus {
    outline: none;
  }
`;

export const ButtonStyles = css`
  ${ButtonResetCss}
  overflow: visible;
  border: 1px solid
    ${({ variant = "primary" }) => buttonColorSchemes[variant].border};
  background-color: ${({ variant = "primary" }) =>
    buttonColorSchemes[variant].background};
  color: ${({ variant = "primary" }) => buttonColorSchemes[variant].text};
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-size: 1.6rem;
  &:focus {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
  }
`;

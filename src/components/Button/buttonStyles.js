import { css } from "styled-components";

export const buttonResetCss = css`
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

export const buttonStyles = css`
  ${buttonResetCss}
  overflow: visible;
  border: 1px solid
    ${({ variant = "primary", theme }) => theme.buttons[variant].border};
  background-color: ${({ variant = "primary", theme }) =>
    theme.buttons[variant].background};
  color: ${({ variant = "primary", theme }) => theme.buttons[variant].text};
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-size: 1.6rem;
  &:focus {
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
  }
  ${({ href, to }) => (href || to ? linkButtonStyles : null)};
  ${({ disabled }) => (disabled ? disabledButtonStyles : null)};
`;

export const linkButtonStyles = css`
  text-decoration: none;
  width: max-content;
`;

export const disabledButtonStyles = css`
  filter: grayscale(100%);
  cursor: not-allowed;
`;

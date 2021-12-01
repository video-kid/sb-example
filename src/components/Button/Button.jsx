import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonStyles } from "./buttonStyles";

/**
 * Button component
 *
 * @param {string} variant Variants are "danger", "secondary", if theres no special version then default is primary
 * @param {boolean} disabled make button disabled, but better than html disabled
 * @returns {HTMLElement} Return Button with proper attributes
 */

const Button = ({
  variant,
  disabled = false,
  onClick = null,
  href = false,
  to = false,
  children,
  ...props
}) => {
  if (href) {
    return (
      <a
        role="button"
        aria-disabled={disabled}
        {...(disabled ? { ...props } : { href, ...props })}
      >
        {children}
      </a>
    );
  } else if (to) {
    return (
      <Link
        role="button"
        aria-disabled={disabled}
        {...(disabled ? { ...props } : { to, ...props })}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      aria-disabled={disabled}
      {...(disabled ? { ...props } : { onClick, ...props })}
    >
      {children}
    </button>
  );
};

export default styled(Button)`
  ${buttonStyles}
`;

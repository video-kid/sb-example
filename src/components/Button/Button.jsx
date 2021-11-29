import React from "react";
import styled from "styled-components";
import { ButtonStyles } from "./buttonStyles";

const Button = ({ variant, children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default styled(Button)`
  ${ButtonStyles}
`;

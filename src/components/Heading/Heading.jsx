import styled from "styled-components";

const Primary = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.heading.primary.fontSize};
  font-family: ${({ theme }) => theme.heading.primary.fontFamily};
  line-height: 1;
  font-weight: 600;
`;

const Secondary = styled.h2`
  margin: 0;
  font-size: 20px;
  font-family: ${({ theme }) => theme.heading.secondary.fontFamily};
  line-height: 1;
  font-weight: 600;
`;

const Subheader = styled.h3`
  margin: 0;
  font-size: 16px;
  font-family: ${({ theme }) => theme.heading.subheader.fontFamily};
  line-height: 1;
  font-weight: 600;
`;

export { Primary, Secondary, Subheader };

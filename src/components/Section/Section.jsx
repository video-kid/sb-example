import styled from "styled-components";

const Section = styled.section`
  margin: 0;
  padding: 2rem 4rem;
  h1,
  h2,
  h3 {
    margin-bottom: 1rem;
  }
  &:first-child {
    padding-top: 4rem;
  }
  &:last-child {
    padding-bottom: 4rem;
  }
`;

export default Section;

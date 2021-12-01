import * as Heading from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
};

export const HeadingPrimary = () => (
  <Heading.Primary>Heading Primary Text</Heading.Primary>
);

export const HeadingSecondary = () => (
  <Heading.Secondary>Heading Secondary Text</Heading.Secondary>
);

export const HeadingTerciary = () => (
  <Heading.Subheader>Subheader Text</Heading.Subheader>
);

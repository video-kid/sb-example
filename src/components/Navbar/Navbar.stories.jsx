import Button from "../Button/Button";
import Navbar from "./Navbar";
import * as Heading from "../Heading/Heading";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    padding: {
      control: { type: "text" },
    },
    width: {
      control: { type: "text" },
    },
    align: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const RegularNavbar = Template.bind({});
RegularNavbar.args = {
  children: "Navbar text",
};

export const NavbarWithButton = Template.bind({});
NavbarWithButton.args = {
  children: (
    <>
      <Heading.Primary>Lorem Ipsum</Heading.Primary>{" "}
      <Button variant="secondary">Button</Button>
    </>
  ),
};

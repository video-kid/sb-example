import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args}>btn text</Button>;

export const RegularButton = Template.bind({});
RegularButton.args = {
  disabled: false,
  onClick: () => {
    console.log("clicked");
  },
};

export const HrefButton = Template.bind({});
HrefButton.args = {
  disabled: false,
  href: "#",
};

export const RouterButton = Template.bind({});
RouterButton.args = {
  disabled: false,
  to: "",
};

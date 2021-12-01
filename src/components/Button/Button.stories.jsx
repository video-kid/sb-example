/* eslint-disable import/no-default-export */
import React from "react";
import Button from "./Button";

export default {
  title: "Components/Buttons",
  component: {},
};

export const Buttons = () => (
  <>
    <Button
      onClick={() => {
        console.log("lorem ipsum");
      }}
    >
      Button primary
    </Button>
    <Button
      onClick={() => {
        console.log("lorem ipsum");
      }}
      variant="secondary"
    >
      Button secondary
    </Button>
    <Button
      onClick={() => {
        console.log("lorem ipsum");
      }}
      variant="danger"
    >
      Button danger
    </Button>
  </>
);

import React from "react";
import Button from "../components/Button/Button";

const Index = () => {
  return (
    <div>
      Index
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
      <Button href="#">Link like Button primary</Button>
      <Button href="#" variant="secondary">
        Link like Button secondary
      </Button>
      <Button href="#" variant="danger">
        Link like Button danger
      </Button>
      <Button to="/">Router Link like Button primary</Button>
      <Button to="/" variant="secondary">
        Router Link like Button secondary
      </Button>
      <Button to="/" variant="danger">
        Router Link like Button danger
      </Button>
      <Button
        disabled
        onClick={() => {
          console.log("lorem ipsum");
        }}
      >
        Disabled Button primary
      </Button>
      <Button
        disabled
        onClick={() => {
          console.log("lorem ipsum");
        }}
        variant="secondary"
      >
        Disabled Button secondary
      </Button>
      <Button
        disabled
        onClick={() => {
          console.log("lorem ipsum");
        }}
        variant="danger"
      >
        Disabled Button danger
      </Button>
    </div>
  );
};

export default Index;

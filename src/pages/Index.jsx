import React from "react";
import Button from "../components/Button/Button";
import Navbar from "../components/Navbar/Navbar";
import * as Heading from "../components/Heading/Heading";

const Index = () => {
  return (
    <div>
      <Navbar>
        <Heading.Primary>Index</Heading.Primary>
        <Button to="/admin" variant="secondary">
          Link to Admin
        </Button>
      </Navbar>
    </div>
  );
};

export default Index;

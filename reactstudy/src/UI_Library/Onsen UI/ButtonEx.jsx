import React from "react";
import { Button, Page } from "react-onsenui";
export default function ButtonEx() {
  const handleOnClick = () => {
    alert("pressed");
  };
  return (
    <div>
      <Button onClick={handleOnClick}>Tap me</Button>
      <Button disabled={true}>Disabled</Button>
      <Button modifier="outline">outline</Button>
      <Button modifier="light">light</Button>
      <Button modifier="quiet">quiet</Button>
      <Button modifier="cta">cta</Button>
      <Button modifier="large-quiet">large-quiet</Button>
      <Button modifier="material">material</Button>
      <Button modifier="outline">outline</Button>
    </div>
  );
}

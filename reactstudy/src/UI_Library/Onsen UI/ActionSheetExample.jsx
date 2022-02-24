import React, { useState } from "react";
import { Button, ActionSheet, ActionSheetButton } from "react-onsenui";

export default function ActionSheetExample() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleClick}>Action Sheet</Button>
      <ActionSheet isOpen={open} title="action sheet">
        <ActionSheetButton>Label 1</ActionSheetButton>
        <ActionSheetButton>Label 2</ActionSheetButton>
        <ActionSheetButton>Label 3</ActionSheetButton>
        <ActionSheetButton modifier="destructive">Cancel</ActionSheetButton>
      </ActionSheet>
    </div>
  );
}

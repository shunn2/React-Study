import React from "react";
// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import { Page } from "react-onsenui";
import ActionSheetExample from "./ActionSheetExample";
import ButtonEx from "./ButtonEx";
export default function OnsenUIExample() {
  return (
    <div>
      <Page>
        {/* <ButtonEx /> */}
        <ActionSheetExample />
      </Page>
    </div>
  );
}

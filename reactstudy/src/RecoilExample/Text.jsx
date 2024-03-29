import React from "react";
import { useRecoilState } from "recoil";
import { fontSizeState } from "./store";

export default function Text() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  return <div style={{ fontSize }}>This text will increase in size too</div>;
}

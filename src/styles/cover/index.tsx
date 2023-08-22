import React from "react";
import { Title36, Title64 } from "styles/typography";

export default function LoadingPlaceholderAndCover() {
  return (
    <div
      style={{
        top: "0",
        width: "100%",
        height: "100%",
        background: "#008080",
        zIndex: "9999",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Title64>8-bit Twitter</Title64>
      <Title36>
        an app by <a href="https://github.com/arpitkarnatak">Arpit Karnatak</a>
      </Title36>
    </div>
  );
}

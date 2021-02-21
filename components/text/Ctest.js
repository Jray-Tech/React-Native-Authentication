import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Ctext(props) {
  const [fontS, setFont] = useState("");
  const setFontType = (type) => {
    switch (type) {
      case "bold":
        return "NBold";
      case "bold-italic":
        return "NboldItalic";
      case "italic":
        return "NItalic";
      default:
        return "NRegular";
    }
  };
  const font = setFontType(props.font ? props.font : "NRegular");
//   setFont(font);
  return (
    <Text
      style={{
        ...props.style,
        fontFamily: font,
      }}
    >
      {props.children}
    </Text>
  );
}

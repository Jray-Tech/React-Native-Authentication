import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Dimensions from "../../constants/Dimensions";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function BasicInput(props) {
  const [borderColor, setBorderColor] = useState(Colors.lightgrey);
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={{
        ...styles.container,
        //   borderColor: this.props.borderColor || Colors.main,
        borderBottomColor: borderColor,
        width: props.width || Dimensions.width * 0.8,
        ...props.style,
      }}
    >
      {props.iconName ? (
        <AntDesign name={props.iconName} size={24} color={borderColor} />
      ) : null}
      <TextInput
        placeholder={props.placeholder || "Generic"}
        style={{
          ...styles.textInputStyle,
          ...props.textInputStyle,
          // elevation: this.state.focused ? 10 : 0,
        }}
        onChangeText={(text) => props.onTextChange(text)}
        underlineColorAndroid="transparent"
        maxLength={props.maxLength || 10}
        onFocus={() => {
          setBorderColor(Colors.main);
          setFocused(true);
        }}
        onBlur={() => {
          setBorderColor(Colors.lightgrey);
          setFocused(false);
        }}
        secureTextEntry={props.isPassword ? true : false}
        // {...this.props.textInput}
      />
      {props.iconname && props.iconColor2  ? (
        <AntDesign name={props.iconname2} size={24} color={props.iconColor2} />
      ) : null}   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingBottom: 1,
  },
  textInputStyle: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 5,
    paddingBottom: 0,
    fontSize: 16,
    color: "black",
    fontWeight: "800",
    fontFamily: "NRegular",
  },
});

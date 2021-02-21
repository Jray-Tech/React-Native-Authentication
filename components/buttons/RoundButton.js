import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import Ctext from "../text/Ctest";
import Colors from "../../constants/Colors";

export default function RoundButton(props) {
  return (
    <TouchableOpacity onPress={() => props.pressed()}>
      <View
        style={{

          ...styles.container,
          backgroundColor: props.color ? props.color : Colors.maio,
          ...props.style,
        }}
      >
        <Ctext
        font={props.font}
        style={{
            color: props.textColor,
            ...props.textStyle,
        }}
        >{props.children}</Ctext>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});

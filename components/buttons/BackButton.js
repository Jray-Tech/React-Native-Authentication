import { AntDesign } from "@expo/vector-icons";
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
import Colors from "../../constants/Colors";

export default function BackButton(props) {
  return (
    <TouchableOpacity onPress={() => props.pressed()}>
      <AntDesign
        name="left"
        size={props.size ? props.size : 28}
        color={props.color ? props.color : "black"}
      />
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

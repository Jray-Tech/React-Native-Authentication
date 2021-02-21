import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Colors from "../constants/Colors";
import BackButton from "../components/buttons/BackButton";
import Ctext from "../components/text/Ctest";
import Dimensions from "../constants/Dimensions";

export default function SignUpScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={false}
        barStyle="dark-content"
        backgroundColor="white"
      />
      <BackButton
        pressed={() => props.navigation.goBack()}
        color={Colors.main}
      />
      <View style={styles.headerTextView}>
        <Ctext style={styles.headerTextMain} font="bold">
          Get Started
        </Ctext>
        <Ctext style={styles.headerTextSub}>
          Please fill in the details to create your account.
        </Ctext>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  headerTextView: {
    alignItems: "center",
    alignSelf: "center",
    width: Dimensions.width * 0.7,
  },
  headerTextMain: {
    fontSize: 24,
    color: Colors.main,
    textAlign: "center",
  },
  headerTextSub: {
    fontSize: 12,
    color: "grey",
    textAlign: "center",
  },
});

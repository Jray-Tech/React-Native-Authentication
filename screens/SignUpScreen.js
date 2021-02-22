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
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Colors from "../constants/Colors";
import BackButton from "../components/buttons/BackButton";
import Ctext from "../components/text/Ctest";
import Dimensions from "../constants/Dimensions";
import BasicInput from "../components/input/BasicInput";
import RoundButton from "../components/buttons/RoundButton";

export default function SignUpScreen(props) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const [inputTypes, setInputTypes] = useState([
    {
      name: "First name",
      passed: true,
      isPassword: false,
      err: new Set(),
    },
    {
      name: "Last name",
      passed: true,
      isPassword: false,
      err: new Set(),
    },
    {
      name: "Email",
      passed: true,
      isPassword: false,
      err: new Set(),
    },
    {
      name: "Password",
      passed: true,
      isPassword: true,
      err: new Set(),
    },
    {
      name: "Confirm Password",
      passed: true,
      isPassword: true,
      err: new Set(),
    },
  ]);

  const setValue = (value, type) => {
    switch (type) {
      case "First name":
        setFirstName(value);
      case "Last name":
        setlastname(value);
      case "Password":
        setpassword(value);
      case "Confirm Password":
        setconfirmpassword(value);
      case "Email":
        setemail(value);
    }
  };

  const checkEmpty = () => {
    console.log("reached!!");
    err = "can not be empty ";
    
    let newArr = inputTypes.map((i) => {
      if (i.name === "First name") {
        if (firstname === "") {
          i.err = i.err.add(err);
          i.passed = false;
        }
        if (firstname !== "") {
          i.err.delete(err);
          i.passed = true;
        }
      }
      if (i.name === "Last name") {
        if (lastname === "") {
          i.err = i.err.add(err);
          i.passed = false;
        } 
         if (lastname !== "") {
          i.err.delete(err);
          i.passed = true;
        }
      }
      if (i.name === "Password") {
        if (password === "") {
          i.err.add(err);
          i.passed = false;
        } 
         if (password !== "") {
          i.err.delete(err);
          i.passed = true;
        }
      }
      if (i.name === "Email") {
        if (email === "") {
          i.err.add(err);
          i.passed = false;
        } 
         if (email !== "") {
          i.err.delete(err);
          i.passed = true;
        }
      }
      if (i.name === "Confirm Password") {
        if (confirmpassword === "") {
          i.err.add(err);
          i.passed = false;
        } 
        if (confirmpassword !== "") {
          i.err.delete(err);
          i.passed = true;
        }
      }

      return i;
    });
    setInputTypes(newArr);
  };
  const getStartedPressed = () => {
    checkEmpty();
    // call other functions and do nedful with them ....
    // if all test are passed do needful also .... move on to nxt place
    let v = inputTypes[0];
    console.log(v.err);
  };
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
          Please fill in the details to create your account. {firstname}
        </Ctext>
      </View>
      <ScrollView
        style={{
          ...styles.scrollStyle,
          flex: 1,
          marginTop: 20,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flex: 1,
            width: "100%",
            alignItems: "center",
          }}
        >
          {inputTypes.map((type) => (
            <View key={type.name}>
              <BasicInput
                width={Dimensions.width * 0.7}
                onTextChange={(value) => setValue(value, type.name)}
                placeholder={type.name}
                textInputStyle={{ fontSize: 14 }}
                maxLength={50}
                style={styles.inputStyle}
                status={type.passed}
                isPassword={type.isPassword}
              />
              {type.err !== "" ? (
                <Ctext
                  style={{
                    color: "black",
                  }}
                >
                  {type.err}
                </Ctext>
              ) : null}
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonView}>
        <RoundButton
          style={styles.buttonCustom}
          textColor="white"
          font="bold"
          color={Colors.main}
          pressed={() => {
            getStartedPressed();
          }}
        >
          Sign Up
        </RoundButton>
        <View style={styles.bottomInfoView}>
          <Ctext style={styles.bottomInfoText}>Already Have An Account? </Ctext>
          <TouchableOpacity>
            <Ctext style={styles.bottomButtonText}> Sign In</Ctext>
          </TouchableOpacity>
        </View>
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

  inputContainer: {
    alignItems: "center",
  },
  scrollStyle: {},
  inputStyle: {
    marginBottom: 35,
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCustom: {
    width: Dimensions.width * 0.6,
    paddingVertical: 15,
    marginVertical: 15,
  },
  bottomInfoView: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "center",
  },
  bottomInfoText: {
    color: "grey",
    fontSize: 12,
  },
  bottomButtonText: {
    color: Colors.main,
    fontSize: 12,
  },
});

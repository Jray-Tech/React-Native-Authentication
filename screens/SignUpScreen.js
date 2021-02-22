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

  const [firstnamePassed, setFirstNamePassed] = useState(true);
  const [lastnamePassed, setlastnamePassed] = useState(true);
  const [passwordPassed, setpasswordPassed] = useState(true);
  const [emailPassed, setemailPassed] = useState(true);
  const [confirmpasswordPassed, setconfirmpasswordPassed] = useState(true);

  const [firstnameErrors, setFirstNameErrors] = useState([]);
  const [lastnameErrors, setlastnameErrors] = useState([]);
  const [passwordErrors, setpasswordErrors] = useState([]);
  const [emailErrors, setemailErrors] = useState([]);
  const [confirmpasswordErrors, setconfirmpasswordErrors] = useState([]);

  const [inputTypes, setInputTypes] = useState([
    {
      name: "First name",
      isPassword: false,
    },
    {
      name: "Last name",
      isPassword: false,
    },
    {
      name: "Email",
      isPassword: false,
    },
    {
      name: "Password",
      isPassword: true,
    },
    {
      name: "Confirm Password",
      isPassword: true,
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
    let err = "can not be empty ";
    if (firstname === "") {
      setFirstNamePassed(false);
      setFirstNameErrors((v) => {
        if (v.includes(err)) {
          return v;
        } else {
          v.push(err);
          return v;
        }
      });
    } else {
      setFirstNamePassed(true);
      let newArr = firstnameErrors.filter((value) => value !== err);
      setFirstNameErrors(newArr);
    }

    // setting values of empty erro for the other inputs.... this took over 6 hours lol
    if (lastname === "") {
      setlastnamePassed(false);
      setlastnameErrors((v) => {
        if (v.includes(err)) {
          return v;
        } else {
          v.push(err);
          return v;
        }
      });
    } else {
      setlastnamePassed(true);
      let newArr = lastnameErrors.filter((value) => value !== err);
      setlastnameErrors(newArr);
    }
    // i am writintg more code .....Code is better efficient tho!
    if (password === "") {
      setpasswordPassed(false);
      setpasswordErrors((v) => {
        if (v.includes(err)) {
          return v;
        } else {
          v.push(err);
          return v;
        }
      });
    } else {
      setpasswordPassed(true);
      let newArr = passwordErrors.filter((value) => value !== err);
      setpasswordErrors(newArr);
    }

    if (email === "") {
      setemailPassed(false);
      setemailErrors((v) => {
        if (v.includes(err)) {
          return v;
        } else {
          v.push(err);
          return v;
        }
      });
    } else {
      setemailPassed(true);
      let newArr = emailErrors.filter((value) => value !== err);
      setemailErrors(newArr);
    }

    if (confirmpassword === "") {
      setconfirmpasswordPassed(false);
      setconfirmpasswordErrors((v) => {
        if (v.includes(err)) {
          return v;
        } else {
          v.push(err);
          return v;
        }
      });
    } else {
      setconfirmpasswordPassed(true);
      let newArr = confirmpasswordErrors.filter((value) => value !== err);
      setconfirmpasswordErrors(newArr);
    }
  };

  const getStartedPressed = () => {
    checkEmpty();
    // call other functions and do nedful with them ....
    // if all test are passed do needful also .... move on to nxt place
    console.log(firstnameErrors);
    console.log("fiiii");
  };

  const returnError = (type) => {
    switch (type) {
      case "First name":
          console.log('valueeeeeee')
        return firstnameErrors;
      case "Last name":
        return lastnameErrors;
      case "Password":
        return passwordErrors;
      case "Confirm Password":
        return confirmpasswordErrors;
      case "Email":
        return emailErrors;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        // i am writintg more code .....Code is better written tho!
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
                // status={type.passed}
                isPassword={type.isPassword}
              />
              <Ctext
                style={{
                  color: "black",
                }}
              >
                  {
                      returnError(type.name)
                  }
              </Ctext>
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

import React from "react";
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import RoundButton from "../components/buttons/RoundButton";
import Ctext from "../components/text/Ctest";
const { width, height } = Dimensions.get("window");
import Colors from "../constants/Colors";

export default function WelcomeScreen(props) {
  const getStartedPressed = () => {
    console.log("spagehtti is lovely ");
    props.navigation.navigate("SignUpScreen");
  };
  const loginPressed = () => {
    console.log(" he wan log in lolg stupid boy loool ");
  };
  return (
    <View style={styles.container}>
      <StatusBar
      translucent={false}
      barStyle="light-content"
      />
      <View style={styles.topView}>
        <Image
          source={require("../assets/image/welcome/boy.png")}
          resizeMode="center"
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.bottomView}>
        <View style={styles.moveUp}>
          <Ctext style={styles.headerText} font="bold">
            Welcome
          </Ctext>
          <Ctext style={styles.regularText}>
            vClass is a virtal learning system. Now you can learn anything
            anywhere with this.
          </Ctext>
        </View>
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
            Get Started
          </RoundButton>
          <RoundButton
            style={styles.buttonCustom}
            textColor={Colors.main}
            font="bold"
            color="white"
            pressed={() => loginPressed()}
          >
            Log In
          </RoundButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topView: {
    flex: 6,
    backgroundColor: "white",
    justifyContent: "center",
  },
  imageStyle: {
    width: width,
    height: height * 0.4,
    position: "relative",
    top: 10,
  },
  bottomView: {
    flex: 4,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: Colors.main,
  },
  regularText: {
    fontSize: 12,
    paddingTop: 5,
    color: "grey",
    textAlign: "center",
    lineHeight: 24,
    width: width * 0.7,
  },
  moveUp: {
    position: "relative",
    bottom: 20,
    alignItems: "center",
  },
  buttonView: {
    flex: 1,
    justifyContent: "center",
  },
  buttonCustom: {
    width: width * 0.6,
    paddingVertical: 15,
    marginBottom: 5,
  },

  /// this s not good for other phomes oo. Test and fix. Love from jray!
});

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";

// cahce images and fomt...
// do logic for naviagation ....
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
    };
  }
  async componentDidMount() {
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e, "   was returned you code shit thats why !!!");
    }
    this.prepareResources();
  }
  prepareResources = async () => {
    try {
      await this.cacheFonts();
      await this.cacheImages([require("./assets/image/welcome/boy.png")]);
    } catch (err) {
      console.warn(
        err,
        "Hey shit head you coded shit... you piece of shit coder! "
      );
    } finally {
      this.setState(
        {
          appIsReady: true,
        },
        async () => {
          await SplashScreen.hideAsync();
        }
      );
    }
  };
  cacheImages = (images) => {
    return images.map((image) => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  };
  cacheFonts = async () => {
    const fonts = {
      NBold: require("./assets/fonts/NotoSans-Bold.ttf"),
      NboldItalic: require("./assets/fonts/NotoSans-BoldItalic.ttf"),
      NItalic: require("./assets/fonts/NotoSans-Italic.ttf"),
      NRegular: require("./assets/fonts/NotoSans-Regular.ttf"),
    };
    await Font.loadAsync(fonts);
  };
  render() {
    if (!this.state.appIsReady) {
      return null;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // transitionSpec: {
            //   open: config,
            //   close: closeConfig,
            // },
          }}
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;

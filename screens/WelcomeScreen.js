import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View
      style={styles.topView}
      >

      </View>
      <View
      style={styles.bottomView}
      >
        
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topView:{
    flex: 5,
    backgroundColor: 'blue'
  },
  bottomView: {
    flex: 5,
    backgroundColor: 'white'
  }
});

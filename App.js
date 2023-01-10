import { StyleSheet, Text, Platform, StatusBar } from "react-native";

import SafeAreaView from "react-native-safe-area-view";

import React from "react";

import Focus from "./features/Focus";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Focus />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#252250",
  },
});

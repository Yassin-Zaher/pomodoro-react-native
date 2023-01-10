import { StyleSheet, Text, Platform, View, StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import React, { useState } from "react";
import Focus from "./features/Focus";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <Focus addSubject={setCurrentSubject} />
        ) : (
          <View>
            <Text style={{ color: "white" }}>
              The timer page for {currentSubject}
            </Text>
          </View>
        )}
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

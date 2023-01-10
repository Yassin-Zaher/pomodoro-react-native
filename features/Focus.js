import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

const Focus = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(value) => setInputValue(value)}
          label="What do you want to focus on?"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    padding: 50,
  },
  text: {
    color: "white",
  },
});

export default Focus;

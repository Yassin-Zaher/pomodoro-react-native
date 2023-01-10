import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(value) => setSubject(value)}
          label="What do you want to focus on?"
          style={styles.textInput}
        />

        <View style={styles.buttonContainer}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    justifyContent: "flex-start",
    padding: 25,
    flexDirection: "row",
  },
  buttonContainer: {
    justifyContent: "center",
    padding: 5,
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
});

export default Focus;

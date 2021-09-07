import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/colors";

const TickButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableNativeFeedback activeOpacity={0.65} onPress={props.onPress}>
        <View style={styles.button}>
          <Ionicons name="checkmark" size={32} color={Colors.text} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 14,
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: Colors.accent,
  },
  buttonText: {
    color: "black",
    fontFamily: "product-sans-medium",
    fontSize: 15,
  },
});

export default TickButton;

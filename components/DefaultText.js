import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const DefaultText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "product-sans-black",
    color: Colors.text,
  },
});

export default DefaultText;

import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 7,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    // elevation: 7,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
  },
  title: {
    fontFamily: "product-sans-medium",
    fontSize: 19,
    color: "#032b2b",
    textAlign: "right",
  },
});

export default CategoryGridTile;

import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { DrawerItems } from "react-navigation-drawer";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Colors from "../constants/colors";

const CustomDrawerContentComponent = (props) => (
  <ScrollView style={{ backgroundColor: Colors.primary }}>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.appName}>
        <Text style={styles.text}>Meals App</Text>
      </View>
      <View style={styles.appNameSeparator} />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "20%",
  },
  appName: {
    alignItems: "center",
  },
  appNameSeparator: {
    borderBottomColor: Colors.accent,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 29,
    fontFamily: "samsung-sharp-regular",
    margin: 29,
    color: Colors.text,
  },
});

export default CustomDrawerContentComponent;

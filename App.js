import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "product-sans-medium": require("./assets/fonts/ProductSans-Medium.ttf"),
    "product-sans-black": require("./assets/fonts/ProductSans-Black.ttf"),
    "samsung-sharp-regular": require("./assets/fonts/SamsungSharpSansRegular-Regular.ttf"),
    "samsung-sharp-bold": require("./assets/fonts/samsung_s_sharp_by_629lyric-d8y77l9.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
      <StatusBar style="dark" backgroundColor="#2dc2b2" />
    </Provider>
  );
}

import React from "react";
import { Platform, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  TransitionPresets,
} from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";

import CustomDrawerContentComponent from "../components/CustomDrawerContent";

import Colors from "../constants/colors";

const defaultStackNavOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.text,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontFamily: "product-sans-black",
    fontSize: 22,
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={20} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "#00bfab",
      tabStyle: {
        height: 300,
      },
      tabBarLabel: (
        <Text style={{ fontFamily: "product-sans-medium" }}>Meals</Text>
      ),
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={22} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.primary,
      tabBarLabel: (
        <Text style={{ fontFamily: "product-sans-medium" }}>Favorites</Text>
      ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        showIcon: true,
        showLabel: false,
        lazyLoad: true,
        // tabStyle: {
        //   height: 400,
        // },

        barStyle: {
          backgroundColor: "transparent",
          // borderTopWidth: 0,
          borderRadius: 9,
          // borderWidth: 5,
          borderTopColor: Colors.primary,
          overflow: "hidden",

          position: "absolute",
          left: 45,
          right: 45,
          bottom: 25,
          height: "6.5%",
        },
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          animationEnabled: true,
          activeTintColor: Colors.accent,
          style: {
            margin: 5,
          },
        },
      });

// const FiltersNavigator = createStackNavigator(
//   {
//     Filters: FiltersScreen,
//   },
//   {
//     // navigationOptions: {
//     //   drawerLabel: "Filters!!!",
//     // },
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );

// const MainNavigator = createDrawerNavigator(
//   {
//     Mealsfavs: {
//       screen: MealsFavTabNavigator,
//       navigationOptions: {
//         drawerLabel: "Meals",
//       },
//     },
//     Filters: FiltersNavigator,
//   },
//   {
//     edgeWidth: 150,
//     contentComponent: CustomDrawerContentComponent,
//     contentOptions: {
//       activeTintColor: Colors.text,
//       inactiveTintColor: "#3c3d3d",
//       labelStyle: {
//         fontWeight: "normal",
//         fontFamily: "product-sans-black",
//         fontSize: 15,
//       },
//     },
//   }
// );

export default createAppContainer(MealsFavTabNavigator);

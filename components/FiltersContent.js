import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Switch, BackHandler } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import DefaultText from "../components/DefaultText";
import Colors from "../constants/colors";
import TickButton from "../components/TickButton";
import { setFilters } from "../store/actions/meals";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText style={{ fontSize: 16 }}>{props.label}</DefaultText>
      <Switch
        trackColor={{ true: Colors.text, false: "" }}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersContent = (props) => {
  const currentFilters = useSelector((state) => state.meals.currentFilters);

  const [isGlutenFree, setIsGlutenFree] = useState(currentFilters.glutenFree);
  const [isLactoseFree, setIsLactoseFree] = useState(
    currentFilters.lactoseFree
  );
  const [isVegan, setIsVegan] = useState(currentFilters.vegan);
  const [isVegetarian, setIsVegetarian] = useState(currentFilters.vegetarian);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
    props.onPress();
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  // useEffect(() => {
  //   navigation.setParams({ save: saveFilters });
  // }, [saveFilters]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>Available Filters</Text>

        <TickButton onPress={saveFilters} />
      </View>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => {
          setIsGlutenFree(newValue);
          // currentFilters.glutenFree = newValue;
        }}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => {
          setIsLactoseFree(newValue);
          // currentFilters.lactoseFree = newValue;
        }}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => {
          setIsVegan(newValue);
          // currentFilters.vegan = newValue;
        }}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => {
          setIsVegetarian(newValue);
          // currentFilters.vegetarian = newValue;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "samsung-sharp-bold",
    fontSize: 20,
    margin: 18,
    // textAlign: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "product-sans-medium",
    textAlign: "center",
    color: "grey",
    margin: 18,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "10%",
    marginVertical: 15,
    // marginTop: 10,
  },
  container: {
    backgroundColor: Colors.primary,
    elevation: 8,
    padding: 8,
    justifyContent: "space-between",
    borderRadius: 30,
    // margin: 10,
  },
});

export default FiltersContent;

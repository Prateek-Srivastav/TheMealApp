import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { BottomSheet } from "react-native-elements";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { CATEGORIES } from "../data/dummy-data";
import CustomHeaderButton from "../components/HeaderButton";
import CategoryGridTile from "../components/CategoryGridTile";
import FiltersContent from "../components/FiltersContent";

const CategoriesScreen = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const openFilters = useCallback(() => {
    return setIsVisible(true);
  }, [isVisible]);

  useEffect(() => {
    props.navigation.setParams({
      openFilters: openFilters,
    });
  }, [openFilters]);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={{ paddingBottom: "22%" }}
        data={CATEGORIES}
        renderItem={renderGridItem}
        numColumns={2}
      />
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{
          backgroundColor: "rgba(0.5, 0.25, 0, 0.2)",
        }}
      >
        <FiltersContent onPress={() => setIsVisible(false)} />
      </BottomSheet>
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  const openFilters = navData.navigation.getParam("openFilters");

  return {
    headerTitle: "Meal Categories",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="options" onPress={openFilters} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CategoriesScreen;

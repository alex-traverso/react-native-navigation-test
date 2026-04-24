import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import React from "react";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      // navigation.dispatch(StackActions.pop());
      router.back();
      // navigation.goBack();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#F5F5F5",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "chevron-back-outline" : "menu-outline"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack!)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home Screen",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products Screen",
        }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Product Details",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile Screen",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings Screen",
        }}
      />
    </Stack>
  );
};

export default StackLayout;

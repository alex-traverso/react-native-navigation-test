import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-5 gap-y-2">
        <CustomButton color="primary" onPress={() => router.push("/products")}>
          Products
        </CustomButton>
        <CustomButton color="secondary" onPress={() => router.push("/profile")}>
          Profile
        </CustomButton>

        <CustomButton color="tertiary" onPress={() => router.push("/settings")}>
          Settings
        </CustomButton>

        <CustomButton color="primary" onPress={onToggleDrawer}>
          Open menu
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton
            variant="text-only"
            color="primary"
            // onPress={() => router.push("/products")}
          >
            Products
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5 gap-y-2">
        <CustomButton
          color="primary"
          onPress={() => router.push("/tabs/(stack)/products")}
        >
          Products
        </CustomButton>
        <CustomButton
          color="secondary"
          onPress={() => router.push("/tabs/profile")}
        >
          Profile
        </CustomButton>

        <CustomButton
          color="tertiary"
          onPress={() => router.push("/tabs/settings")}
        >
          Settings
        </CustomButton>

        <Link href="/tabs/products" asChild>
          <CustomButton
            variant="text-only"
            color="primary"
            // onPress={() => router.push("/products")}
          >
            Products
          </CustomButton>
        </Link>

        {/* <Link className="mb-5" href="/products">
          Products
        </Link>
        <Link className="mb-5" href="/profile">
          Profile
        </Link>
        <Link className="mb-5" href="/settings">
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const productId = params.id;

  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? "Product Details",
    });
  }, [product]);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-4">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="font-work-regular">{product.description}</Text>
      <Text className="font-work-bold text-xl text-green-600">
        ${product.price.toFixed(2)}
      </Text>
    </View>
  );
};

export default ProductScreen;

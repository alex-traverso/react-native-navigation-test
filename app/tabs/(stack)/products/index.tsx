import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-4 rounded bg-white p-4 shadow">
            <Text className="text-2xl font-work-bold">{item.title}</Text>
            <Text>{item.description}</Text>

            <View className="flex flex-row justify-between">
              <Text className="font-work-black text-green-600">
                {item.price}
              </Text>
              <Link
                href={`/tabs/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

export default ProductsScreen;

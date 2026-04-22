import "@/global.css";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-200">
      <Text className="text-xl font-bold text-red-500">
        Welcome to Nativewind!
      </Text>

      <Text style={{ color: "red", fontSize: 18, marginTop: 10 }}>
        Prueba con style
      </Text>
    </View>
  );
}

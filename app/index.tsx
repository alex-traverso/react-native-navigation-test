import "@/global.css";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 items-center justify-center bg-slate-200">
        {/* <Text style={{ fontFamily: "WorkSans-Regular" }} className="text-xl ">
          Welcome to Nativewind!
        </Text> */}
        <Text className="text-xl font-work-regular text-primary">
          Welcome to Nativewind!
        </Text>
        <Text className="text-xl text-secondary">Welcome to Nativewind!</Text>
        <Text className="text-xl font-work-regular text-secondary-100">
          Welcome to Nativewind!
        </Text>
        <Text className="text-xl font-work-regular text-secondary-200">
          Welcome to Nativewind!
        </Text>
        <Text className="text-xl text-tertiary ">Welcome to Nativewind!</Text>
      </View>
    </SafeAreaView>
  );
}

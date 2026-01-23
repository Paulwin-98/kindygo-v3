import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Payments() {
  return (
    <View className="flex-1 bg-[#F3F4F6] justify-start items-center">
      {/* Header with Back Button */}
      <View className="w-full flex-row items-center justify-between px-[10px] mt-[10px] mb-[20px]">
        <Pressable onPress={() => router.back()} className="pr-[12px] py-[6px]">
          <Ionicons name="chevron-back" size={28} color="blue" />
        </Pressable>
        <Text className="text-[18px]">Children</Text>

        <Pressable onPress={() => console.log("Plus pressed")}>
          <Ionicons name="add-circle-outline" size={32} color="#2563EB" />
        </Pressable>
      </View>

      <View
        className="w-[380px] h-[240px] bg-white rounded-[10px] justify-center items-center overflow-hidden"
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },
          elevation: 8,
        }}
      >
        <Text>No Children data</Text>
      </View>
    </View>
  );
}


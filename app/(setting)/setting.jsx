import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Setting() {
  return (
    <View className="flex-1 bg-[#F3F4F6] justify-start items-center">
      {/* Header with Back Button */}
      <View className="w-full flex-row items-center px-[16px] mt-[10px]">
        <Pressable onPress={() => router.back()} className="pr-[12px] py-[6px]">
          <Ionicons name="chevron-back" size={28} color="blue" />
        </Pressable>
        <Text className="text-[18px] ml-[30%]">Setting</Text>
      </View>

      <View className="w-full bg-[#D1D5DB] p-[16px]">
        <Text className="text-[24px] font-[200]">
          Manage Notifications you receive from the app.
        </Text>
      </View>

      <View className="w-full h-[10%] bg-white p-[16px] flex-row justify-between items-center">
        <View className="flex-row items-center gap-[2px] shrink">
          <Text className="text-[14px] font-semibold shrink">
            Enable Notification from the setting
          </Text>
          <Ionicons name="notifications" size={16} color="#8E8E93" />
        </View>
      </View>
    </View>
  );
}

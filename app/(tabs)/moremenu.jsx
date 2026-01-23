import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MoreMenu() {
  const router = useRouter();
  return (
    <View className="px-[15px] pt-[24px] pb-[24px]">
      <View
        className="bg-white rounded-[15px] overflow-hidden"
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },
          elevation: 2,
        }}
      >
        <RowButton label="My Profile" onPress={() => router.push("/profile")} />

        <Divider />

        <RowButton label="Children" onPress={() => router.push("/children")} />

        <Divider />

        <RowButton label="Settings" onPress={() => router.push("/setting")} />
      </View>
    </View>
  );
}

function RowButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full flex-row items-center justify-between bg-white px-3 py-3"
    >
      <Text
        className="flex-1 shrink text-[18px] text-gray-400 mr-3"
        numberOfLines={1}
      >
        {label}
      </Text>

      <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
    </Pressable>
  );
}

function Divider() {
  return <View className="h-[0.5px] bg-black mx-[16px]" />;
}


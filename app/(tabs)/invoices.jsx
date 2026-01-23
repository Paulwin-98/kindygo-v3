import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

export default function Invoices() {
  return (
    <View className="flex-1 justify-start items-center mt-[2%]">
      <Text className="text-[24px] font-bold relative right-[35%] mb-[20px] text-[#6366f1]">
        Invoices
      </Text>

      <View className="flex-row items-center w-[270px] h-[50px] rounded-[10px] mr-[27%] mb-[30px] bg-[#f9f9f9]">
        <TextInput
          className="flex-1 h-[40px] px-[40px] text-[16px] left-[15px]"
          placeholder="Search by invoice ID"
        />
        <Ionicons
          name="search"
          size={18}
          color="black"
          className="absolute left-[10px]"
        />
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
        <Text>Invoices</Text>
      </View>
    </View>
  );
}

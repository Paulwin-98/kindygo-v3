import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <ScrollView
      contentContainerClassName="flex-grow pb-[30px] justify-start items-start mt-[2%]"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex-row items-center ml-[2%]">
        <TouchableOpacity
          className="w-[45px] h-[45px] bg-white rounded-[22.5px] border-[0.5px] border-gray-500 mr-[15px] ml-[10px] justify-center items-center"
          onPress={() => {}}
        >
          <Image
            source={require("../../assets/images/kindygo-icon-transparent.png")}
            className="w-[45px] h-[45px]"
          />
        </TouchableOpacity>
        <Text className="text-[14px] font-bold">
          Little Ones Eduworld Preschool
        </Text>
      </View>

      <View className="flex-row justify-between items-center">
        <View
          className="w-[170px] h-[130px] bg-[#6366f1] mt-[25px] ml-[4%] overflow-hidden rounded-[10px]"
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 5,
          }}
        >
          <Text className="absolute top-[12px] left-[15px] text-[12px] text-gray-300 font-bold">
            AMOUNT DUE
          </Text>
          <Text className="absolute left-[15px] top-[50px] -translate-y-[10px] text-[18px] font-bold text-white">
            RM 0.00
          </Text>
          <TouchableOpacity className="absolute bottom-[11px] left-[5px] ml-[5%] w-[70px] h-[40px] rounded-[5px] bg-[#4c4ec0a2] justify-center items-center">
            <Text className="text-[13px] text-white">PAY NOW</Text>
          </TouchableOpacity>
        </View>

        <View
          className="w-[170px] h-[130px] bg-white mt-[25px] ml-[8%] overflow-hidden rounded-[10px]"
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 5,
          }}
        >
          <Text className="absolute top-[12px] left-[15px] text-[12px] text-gray-300 font-bold">
            LATEST PAYMENT
          </Text>
          <Text className="absolute left-[15px] top-[50px] -translate-y-[10px] text-[18px] font-bold text-gray-500 ">
            RM0.00
          </Text>
          <TouchableOpacity className="absolute bottom-[11px] left-[7%] w-[70px] h-[40px] rounded-[5px] bg-gray-300 justify-center items-center">
            <Text className="text-black text-[13px] font-bold">SEE ALL</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="pb-[30px] justify-start items-center ml-[3%] mt-[8%] gap-[5%]">
        <View
          className="w-[380px] h-[280px] bg-white rounded-[12px] overflow-hidden border-[1.5px] border-[#6366f1]"
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 8,
          }}
        >
          <Text className="text-[20px] text-[#6366f1] m-[15px]">Invoices</Text>
          <TouchableOpacity className="absolute m-[15px] right-[1px] w-[60px] h-[30px] rounded-[5px] bg-white justify-center items-center border border-[#6366f1]">
            <Text className="text-[#6366f1] text-[12px] font-bold">
              SEE ALL
            </Text>
          </TouchableOpacity>
          <Text className="absolute top-[70%] left-[50%] -translate-x-[50px] -translate-y-[50px] text-[16px] text-[#6366f1]">
            No invoices
          </Text>
        </View>

        <View
          className="w-[380px] h-[280px] bg-white rounded-[10px] overflow-hidden"
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 8,
          }}
        >
          <Text className="text-[20px] text-[#6366f1] m-[15px]">Payments</Text>
          <TouchableOpacity className="absolute m-[15px] right-[1px] w-[60px] h-[30px] rounded-[5px] bg-white justify-center items-center border border-[#6366f1]">
            <Text className="text-[#6366f1] text-[12px] font-bold">
              SEE ALL
            </Text>
          </TouchableOpacity>
          <Text className="absolute top-[70%] left-[50%] -translate-x-[50px] -translate-y-[50px] text-[16px] text-[#6366f1]">
            No payments
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="absolute right-[15px] w-[45px] h-[45px] rounded-[22.5px] border-gray-500 justify-center items-center bg-white"
        onPress={() => {}}
      >
        <Ionicons name="notifications-outline" size={15} />
      </TouchableOpacity>
    </ScrollView>
  );
}

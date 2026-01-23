import { StyleSheet, Text, View } from "react-native";

export default function Payments() {
  return (
    <View className="flex-1 justify-start items-center mt-[2%]">
      <Text className="text-[24px] font-bold relative right-[35%] mb-[20px] text-[#6366f1]">
        Payments
      </Text>

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
        <Text>Payments</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  invoiceText: {
    fontSize: 24,
    fontWeight: "bold",
    position: "relative",
    marginLeft: "-65%",
    marginBottom: 20,
    color: "#6366f1",
  },
});

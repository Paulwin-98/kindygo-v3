import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payments",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="credit-card" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="invoices"
        options={{
          title: "Invoices",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="file" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="moremenu"
        options={{
          title: "MoreMenu",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bars" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MoreMenu() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <RowButton label="My Profile" onPress={() => router.push("/profile")} />

        <Divider />

        <RowButton label="Children" onPress={() => router.push("/children")} />

        <Divider />

        <RowButton label="Settings" onPress={() => router.push("/setting")} />
      </View>
    </View>
  );
}

function RowButton(props) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
    >
      <Text style={styles.rowText}>{props.label}</Text>

      <Ionicons name="chevron-forward" size={18} color="#8E8E93" />
    </Pressable>
  );
}

function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 24,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  row: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  rowPressed: {
    opacity: 0.6,
  },
  rowText: {
    fontSize: 18,
    color: "#4B5563",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "black",
    marginHorizontal: 16,
  },
});

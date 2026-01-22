import { StyleSheet, Text, View } from "react-native";

export default function Payments() {
  return (
    <View style={styles.container}>
      <Text style={styles.invoiceText}>Payments</Text>

      <View style={styles.card}>
        <Text>Payments</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  card: {
    width: 340,
    height: 200,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    outlineColor: "#6366f1",
    outlineWidth: 2,
    marginRight: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },

  invoiceText: {
    fontSize: 24,
    fontWeight: "bold",
    position: "relative",
    marginLeft: "-65%",
    marginBottom: 20,
    color: "#6366f1",
  },
});

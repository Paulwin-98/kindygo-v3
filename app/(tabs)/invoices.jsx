import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Invoices() {
  return (
    <View style={styles.container}>
      <Text style={styles.invoiceText}>Invoices</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search by invoice ID" />
        <Ionicons name="search" size={15} color="#6366f1" style={styles.icon} />
      </View>

      <View style={styles.card}>
        <Text>Invoices</Text>
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
    height: 220,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    outlineColor: "#6366f1",
    outlineWidth: 1.5,
    marginRight: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    height: 40,
    borderRadius: 10,
    marginRight: "25%",
    marginBottom: 30,
    backgroundColor: "#f9f9f9",
  },
  icon: {
    position: "absolute",
    left: 10,
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

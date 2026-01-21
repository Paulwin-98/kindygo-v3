import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Invoices() {
  return (
    <View style={styles.container}>
      <Text style={styles.invoiceText}>Invoices</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter invoice details" />
        <Ionicons name="search" size={20} color="#6366f1" style={styles.icon} />
      </View>

      <View style={styles.rectangleRounded}>
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
    marginTop: "15%",
  },
  rectangleRounded: {
    width: 340,
    height: 200,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    outlineColor: "#6366f1",
    outlineWidth: 2,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    paddingRight: 40,
    backgroundColor: "#f9f9f9",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    height: 40,
    borderColor: "#6366f1",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 45,
    marginBottom: 30,
    backgroundColor: "#f9f9f9",
  },
  icon: {
    position: "absolute",
    right: 10,
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

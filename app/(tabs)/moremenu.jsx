import { StyleSheet, Text, View } from "react-native";

export default function MoreMenu() {
  return (
    <View style={styles.container}>
      <Text>MoreMenu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

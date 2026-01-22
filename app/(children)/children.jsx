import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

const Children = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Children Screen</Text>
    </View>
  );
};

export default Children;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

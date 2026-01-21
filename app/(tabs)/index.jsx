import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Home() {
  const insets = useSafeAreaInsets();
  const notificationTop = insets.top + 5;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
            <Image
              source={require("../../assets/images/kindygo-icon-transparent.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Little Ones Eduworld Preschool</Text>
        </View>

        <View style={styles.squareContainer}>
          <View style={styles.roundedSquare}>
            <Text style={styles.amountDueText}>Amount due</Text>
            <Text style={styles.amountText}>RM 0.00</Text>
            <TouchableOpacity style={styles.payNowButton}>
              <Text style={styles.payNowText}>Pay Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.roundedSquare1}>
            <Text style={styles.latestText}>Latest Payment</Text>
            <Text style={styles.RmText}>RM0.00</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.SeeText}>See All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.centerContainer}>
          <View style={styles.topRectangle}>
            <Text style={styles.rectangleText}>Centered Rectangle</Text>
            <TouchableOpacity style={styles.topRightButton}>
              <Text style={styles.buttonText}>See all</Text>
            </TouchableOpacity>
            <Text style={styles.noText}>No invoices</Text>
          </View>

          <View style={styles.bottomRectangle}>
            <Text style={styles.rectangleText}>Bottom Rectangle</Text>
            <TouchableOpacity style={styles.topRightButton}>
              <Text style={styles.buttonText}>See all</Text>
            </TouchableOpacity>
            <Text style={styles.noText}>No payments</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.notificationButton, { top: notificationTop }]}
        onPress={() => {}}
      >
        <Ionicons name="notifications-outline" size={20} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "grey",
    marginRight: 15,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 45,
    height: 45,
  },
  text: {
    fontSize: 13,
    fontWeight: "semi-bold",
  },
  notificationButton: {
    position: "absolute",
    right: 15,
    width: 45,
    height: 45,
    borderRadius: 22.5,

    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  roundedSquare: {
    width: 160,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#6366f1",
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
  },

  roundedSquare1: {
    width: 160,
    height: 120,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
  },

  squareContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  amountDueText: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 14,
    color: "white",
    fontWeight: "semibold",
  },
  amountText: {
    position: "absolute",
    left: 10,
    top: 50,
    transform: [{ translateY: -10 }],
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  payNowButton: {
    position: "absolute",
    bottom: 10,
    right: 80,
    width: 70,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#303F9F",
    justifyContent: "center",
    alignItems: "center",
  },
  payNowText: {
    color: "white",
    fontSize: 13,
  },

  latestText: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: 14,
    color: "grey",
    fontWeight: "semibold",
  },

  RmText: {
    position: "absolute",
    left: 10,
    top: 50,
    transform: [{ translateY: -10 }],
    fontSize: 18,
    fontWeight: "bold",
    color: "grey",
  },

  seeAllButton: {
    position: "absolute",
    bottom: 10,
    right: 80,
    width: 70,
    height: 30,
    borderRadius: 5,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },

  SeeText: {
    color: "white",
    fontSize: 13,
  },
  centerContainer: {
    flex: 1,
    marginTop: 30,
    marginLeft: 15,
    gap: 20,
  },
  topRectangle: {
    width: 350,
    height: 240,
    borderRadius: 10,
    backgroundColor: "#fffff",
    outlineColor: "#6366f1",
    outlineWidth: 2,
  },
  rectangleText: {
    fontSize: 16,
    color: "#6366f1",
    top: 10,
    left: 10,
  },

  bottomRectangle: {
    width: 350,
    height: 240,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    outlineColor: "#6366f1",
    outlineWidth: 2,
  },
  topRightButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 70,
    height: 30,
    borderRadius: 5,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 13,
  },
  noText: {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    fontSize: 16,
    color: "#6366f1",
  },
});

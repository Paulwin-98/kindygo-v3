import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function KindygoRegister({ navigation }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [myKadNumber, setMyKadNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [preschool, setPreschool] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    console.log("Register pressed");
    router.push("/register/parents-register-2")
  };

  const handleBackToLogin = () => {
    router.push("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToLogin} style={styles.backButton}>
          <Ionicons name="chevron-back" size={28} color="#4A90E2" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Register</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Step Indicator */}
        <View style={styles.stepIndicatorContainer}>
          <View style={styles.stepWrapper}>
            <View
              style={[
                styles.stepCircle,
                currentStep >= 1 && styles.stepCircleActive,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  currentStep >= 1 && styles.stepNumberActive,
                ]}
              >
                1
              </Text>
            </View>
            <View
              style={[
                styles.stepLine,
                currentStep >= 2 && styles.stepLineActive,
              ]}
            />
          </View>

          <View style={styles.stepWrapper}>
            <View
              style={[
                styles.stepCircle,
                currentStep >= 2 && styles.stepCircleActive,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  currentStep >= 2 && styles.stepNumberActive,
                ]}
              >
                2
              </Text>
            </View>
            <View
              style={[
                styles.stepLine,
                currentStep >= 3 && styles.stepLineActive,
              ]}
            />
          </View>

          <View style={styles.stepWrapper}>
            <View
              style={[
                styles.stepCircle,
                currentStep >= 3 && styles.stepCircleActive,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  currentStep >= 3 && styles.stepNumberActive,
                ]}
              >
                3
              </Text>
            </View>
            <View
              style={[
                styles.stepLine,
                currentStep >= 4 && styles.stepLineActive,
              ]}
            />
          </View>

          <View style={styles.stepCircle}>
            <Text style={styles.stepNumber}>4</Text>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.pageTitle}>Register Parent</Text>

        {/* Form Section */}
        <View style={styles.formContainer}>
          {/* Full Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Full Name per MyKad"
            placeholderTextColor="#C0C0C0"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />

          {/* MyKad Number Input */}
          <TextInput
            style={styles.input}
            placeholder="MyKad Number (000000-00-0000)"
            placeholderTextColor="#C0C0C0"
            value={myKadNumber}
            onChangeText={setMyKadNumber}
            keyboardType="numeric"
          />

          {/* Phone Number Input */}
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#C0C0C0"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#C0C0C0"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />

          {/* Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#C0C0C0"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#C0C0C0"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Ionicons
                name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Preschool Label */}
          <Text style={styles.preschoolLabel}>Preschool</Text>

          {/* Preschool Picker */}
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={preschool}
              onValueChange={(itemValue) => setPreschool(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Please Choose" value="" />
              <Picker.Item
                label="LOE Day Care (Bandar Country Homes, Rawang)"
                value="LOE Day Care (Bandar Country Homes, Rawang)"
              />
              <Picker.Item
                label="LOE Child Care (Pasir Puteh, Kelantan)"
                value="LOE Child Care (Pasir Puteh, Kelantan)"
              />
              <Picker.Item
                label="LOE Child Care (Seksyen 4, Shah Alam)"
                value="LOE Child Care (Seksyen 4, Shah Alam)m"
              />
              <Picker.Item
                label="LOE Child Care (Taman Rowther, Gombak)"
                value="LOE Child Care (Taman Rowther, Gombak)"
              />
              <Picker.Item
                label="LOE Child Care (Bandar Country Homes, Rawang)"
                value="LOE Child Care (Bandar Country Homes, Rawang)"
              />
              <Picker.Item
                label="LOE Preschool (Kubang Kerian, Kelantan)"
                value="LOE Preschool (Kubang Kerian, Kelantan)  "
              />
              <Picker.Item
                label="LOE Preschool (Pasir Puteh, Kelantan)"
                value="LOE Preschool (Pasir Puteh, Kelantan)"
              />
              <Picker.Item
                label="LOE Preschool (Seksyen 4, Shah Alam)"
                value="LOE Preschool (Seksyen 4, Shah Alam)"
              />
              <Picker.Item
                label="LOE Preschool (Taman Rowther, Gombak)"
                value="LOE Preschool (Taman Rowther, Gombak)"
              />
              <Picker.Item
                label="LOE Preschool (Setia Permai 1, Setia Alam)"
                value="LOE Preschool (Setia Permai 1, Setia Alam)"
              />
              <Picker.Item
                label="LOE Preschool (Bandar Country Homes, Rawang)"
                value="LOE Preschool (Bandar Country Homes, Rawang)"
              />
               <Picker.Item
                label="LOE Therapy Centre (Pasir Puteh, Kelantan)"
                value="LOE Therapy Centre (Pasir Puteh, Kelantan)"
              />
               <Picker.Item
                label="LOE Therapy Centre (Seksyen 4, Shah Alam)"
                value="LOE Therapy Centre (Seksyen 4, Shah Alam)"
              />
              <Picker.Item
                label="LOE Therapy Centre (Taman Rowther, Gombak)"
                value="LOE Therapy Centre (Taman Rowther, Gombak)"
              />
              <Picker.Item
                label="LOE Therapy Centre (Setia Permai 1)"
                value="LOE Therapy Centre (Setia Permai 1)"
              />
            </Picker>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity
            style={styles.createButton}
            onPress={handleRegister}
          >
            <Text style={styles.createButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  headerSpacer: {
    width: 36,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginBottom: 32,
  },
  stepWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  stepCircle: {
    width: 26,
    height: 26,
    borderRadius: 18,
    backgroundColor: "#D0D0D0",
    alignItems: "center",
    justifyContent: "center",
  },
  stepCircleActive: {
    backgroundColor: "#6B7FFF",
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  stepNumberActive: {
    color: "#FFFFFF",
  },
  stepLine: {
    flex: 1,
    height: 2,
    backgroundColor: "#D0D0D0",
  },
  stepLineActive: {
    backgroundColor: "#6B7FFF",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#6B7FFF",
    marginBottom: 32,
  },
  formContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#D0D0D0",
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 0,
    marginBottom: 24,
  },
  passwordContainer: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#D0D0D0",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 0,
  },
  eyeIcon: {
    padding: 8,
  },
  preschoolLabel: {
    fontSize: 16,
    color: "#C0C0C0",
    marginBottom: 12,
  },
  pickerContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#D0D0D0",
    marginBottom: 40,
    right: 8,
  },
  picker: {
    width: "100%",
    height: 50,
  },
  createButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#1E90FF",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

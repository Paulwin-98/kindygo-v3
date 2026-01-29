import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function KindygoLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    console.log("Sign in pressed");
    // Add your sign-in logic here
  };

  const handleForgotPassword = () => {
    console.log("Forgot password pressed");
    // Add your forgot password logic here
  };

  const handleCreateAccount = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/kindygo-icon-transparent.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Welcome to Kindygo!</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
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
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoComplete="password"
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

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Create Account Section */}
        <View style={styles.createAccountContainer}>
          <Text style={styles.noAccessText}>Don't have an access? </Text>
          <TouchableOpacity onPress={handleCreateAccount}>
            <Text style={styles.createAccountText}>Create account.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-evenly",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 80,
  },
  logoImage: {
    width: 180,
    height: 180,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#333",
  },
  formContainer: {
    width: "100%",
  },
  input: {
    width: "100%",
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 0,
    marginBottom: 24,
  },
  passwordContainer: {
    width: "100%",
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
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
  signInButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#1E90FF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
  createAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  noAccessText: {
    fontSize: 14,
    color: "#999",
  },
  createAccountText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
});

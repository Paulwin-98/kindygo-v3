import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "../../context/AuthContext";

export default function KindygoLogin() {
  const router = useRouter();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }

    setIsLoading(true);
    const result = await signIn(email, password);
    setIsLoading(false);

    if (result.success) {
      // Navigate to home or main app screen
      router.replace("/"); // or router.replace("/(tabs)") if using tabs
    } else {
      Alert.alert("Login Failed", result.error || "Invalid credentials");
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot password pressed");
    // Add your forgot password logic here
    // router.push("/forgot-password");
  };

  const handleCreateAccount = () => {
    router.push("/register/parents-register");
  };

  const handleGuestAccount = () => {
    router.push("/");
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-evenly">
        {/* Logo Section */}
        <View className="items-center mt-20">
          <Image
            source={require("../../assets/images/kindygo-icon-transparent.png")}
            className="w-44 h-44"
            resizeMode="contain"
          />
          <Text className="text-xl font-normal text-gray-800">
            Welcome to Kindygo!
          </Text>
        </View>

        {/* Form Section */}
        <View className="w-full">
          {/* Email Input */}
          <TextInput
            className="w-full h-14 border-b border-gray-200 text-base text-gray-800 px-0 mb-6"
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            editable={!isLoading}
          />

          {/* Password Input */}
          <View className="w-full h-14 border-b border-gray-200 flex-row items-center mb-8">
            <TextInput
              className="flex-1 text-base text-gray-800 px-0"
              placeholder="Password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoComplete="password"
              editable={!isLoading}
            />
            <TouchableOpacity
              className="p-2"
              onPress={() => setShowPassword(!showPassword)}
              disabled={isLoading}
            >
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={24}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity
            className={`w-full h-14 rounded-lg items-center justify-center mb-4 ${
              isLoading ? "bg-blue-300" : "bg-blue-500"
            }`}
            onPress={handleSignIn}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text className="text-lg font-medium text-white">Sign in</Text>
            )}
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <TouchableOpacity onPress={handleForgotPassword} disabled={isLoading}>
            <Text className="text-sm text-gray-500 text-center">
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Create Account Section */}
        <View className="flex-row justify-center items-center mb-10">
          <Text className="text-sm text-gray-500">Don't have an access? </Text>
          <TouchableOpacity onPress={handleCreateAccount} disabled={isLoading}>
            <Text className="text-sm text-gray-800 font-semibold">
              Create account.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Guest */}
        <TouchableOpacity onPress={handleGuestAccount} disabled={isLoading}>
          <Text className="text-sm text-gray-500 text-center">Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
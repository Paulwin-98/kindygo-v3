import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function RegistrationSuccess() {
  const router = useRouter();
  const confettiRef = useRef(null);

  useEffect(() => {
    // Trigger confetti animation on mount
    if (confettiRef.current) {
      confettiRef.current.start();
    }
  }, []);

  const handleNext = () => {
    // Navigate to home
    router.replace('/(tabs)'); // or your home route
  };

  const handleAddChild = () => {
    // Navigate back to add child screen
    router.back();
  };

  return (
    <View className="flex-1 bg-white">
      

      <View className="flex-1 items-center justify-between px-6 py-6">
        {/* Header */}
        <Text className="text-2xl font-bold text-gray-800 ">
          kindygo
        </Text>

        {/* Step Indicator */}
        <View className="flex-row items-center justify-between w-full px-4 mt-6">
          {/* Step 1 */}
          <View className="flex-row items-center flex-1">
            <View className="w-9 h-9 rounded-full bg-indigo-500 items-center justify-center">
              <Text className="text-base font-semibold text-white">1</Text>
            </View>
            <View className="flex-1 h-0.5 bg-indigo-500 mx-1" />
          </View>

          {/* Step 2 */}
          <View className="flex-row items-center flex-1">
            <View className="w-9 h-9 rounded-full bg-indigo-500 items-center justify-center">
              <Text className="text-base font-semibold text-white">2</Text>
            </View>
            <View className="flex-1 h-0.5 bg-indigo-500 mx-1" />
          </View>

          {/* Step 3 */}
          <View className="flex-row items-center flex-1">
            <View className="w-9 h-9 rounded-full bg-indigo-500 items-center justify-center">
              <Text className="text-base font-semibold text-white">3</Text>
            </View>
            <View className="flex-1 h-0.5 bg-indigo-500 mx-1" />
          </View>

          {/* Step 4 - Active */}
          <View className="w-9 h-9 rounded-full bg-indigo-500 items-center justify-center">
            <Text className="text-base font-semibold text-white">4</Text>
          </View>
        </View>

        {/* Main Content */}
        <View className="flex-1 items-center justify-center">
          {/* Kindygo Logo Illustration */}
          <View className="items-center mb-8">
            <Image
              source={require('../../../assets/images/kindygo-icon-transparent.png')}
              className="w-72 h-72"
              resizeMode="contain"
            />
          </View>

          {/* Congratulation Message */}
          <Text className="text-xl font-normal text-gray-800 text-center px-4 leading-7">
            Congratulation! You have successfully finish all necessary step for Registration. Please click Next to go to home.
          </Text>
        </View>

        {/* Buttons */}
        <View className="w-full space-y-4">
          {/* Next Button */}
          <TouchableOpacity
            className="w-full h-14 bg-blue-500 rounded-full items-center justify-center mb-4"
            onPress={handleNext}
          >
            <Text className="text-lg font-semibold text-white">Next</Text>
          </TouchableOpacity>

          {/* Add Child Button */}
          <TouchableOpacity
            className="w-full h-14 bg-blue-500 rounded-full items-center justify-center mb-6"
            onPress={handleAddChild}
          >
            <Text className="text-lg font-semibold text-white">Add Child</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Confetti Animation */}
      <ConfettiCannon
        ref={confettiRef}
        count={200}
        origin={{ x: -10, y: 10 }}
        autoStart={false}
        fadeOut={true}
        explosionSpeed={350}
        fallSpeed={3000}
        colors={['#22C55E', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']}
      />
    </View>
  );
}
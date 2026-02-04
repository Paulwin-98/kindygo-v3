import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddChildren() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(3);

  // Form state
  const [fullName, setFullName] = useState("");
  const [myKidNumber, setMyKidNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [gender, setGender] = useState("");
  const [positionOfChild, setPositionOfChild] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [raceOfChild, setRaceOfChild] = useState("");
  const [religionOfChild, setReligionOfChild] = useState("");
  const [preschool, setPreschool] = useState("");

  // Document images
  const [childPhoto, setChildPhoto] = useState(null);
  const [immunizationCard, setImmunizationCard] = useState(null);
  const [birthCertificate, setBirthCertificate] = useState(null);

  const handleImagePick = async (type) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      switch (type) {
        case "photo":
          setChildPhoto(result.assets[0].uri);
          break;
        case "immunization":
          setImmunizationCard(result.assets[0].uri);
          break;
        case "birth":
          setBirthCertificate(result.assets[0].uri);
          break;
      }
    }
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };

  const handleAddChild = () => {
    console.log("Add child pressed");
   router.push("/register/success-register")
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={handleBack} className="p-1">
          <Ionicons name="chevron-back" size={28} color="#4A90E2" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold text-gray-800">
          Add Children
        </Text>
        <View className="w-9" />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Step Indicator */}
        <View className="flex-row items-center justify-between px-8 mt-6 mb-6">
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
            <View
              className={`w-9 h-9 rounded-full items-center justify-center ${currentStep >= 3 ? "bg-indigo-500" : "bg-gray-300"}`}
            >
              <Text className="text-base font-semibold text-white">3</Text>
            </View>
            <View
              className={`flex-1 h-0.5 mx-1 ${currentStep >= 4 ? "bg-indigo-500" : "bg-gray-300"}`}
            />
          </View>

          {/* Step 4 */}
          <View
            className={`w-9 h-9 rounded-full items-center justify-center ${currentStep >= 4 ? "bg-indigo-500" : "bg-gray-300"}`}
          >
            <Text className="text-base font-semibold text-white">4</Text>
          </View>
        </View>

        {/* Children Illustration */}
        <View className="items-center mb-6">
          <Image
            source={require("../../../assets/images/children.png")}
            style={{ width: 256, height: 128, resizeMode: "contain" }}
          />
        </View>

        {/* Form Section */}
        <View className="px-6">
          {/* Full Name */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Full Name (as per MyKid)"
            placeholderTextColor="#C0C0C0"
            value={fullName}
            onChangeText={setFullName}
          />

          {/* MyKid Number */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="MyKid Number (000000-00-0000)"
            placeholderTextColor="#C0C0C0"
            value={myKidNumber}
            onChangeText={setMyKidNumber}
            keyboardType="numeric"
          />

          {/* Date of Birth */}
          <TouchableOpacity
            className="w-full h-12 border-b border-gray-300 justify-center mb-6"
            onPress={() => setShowDatePicker(true)}
          >
            <Text
              className={`text-base ${dateOfBirth ? "text-gray-800" : "text-gray-400"}`}
            >
              {dateOfBirth ? dateOfBirth.toLocaleDateString() : "Date of Birth"}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={dateOfBirth}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          {/* Gender */}
          <View className="w-full border-b border-gray-300 mb-6">
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Gender" value="" color="#C0C0C0" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>

          {/* Position of Child */}
          <View className="w-full border-b border-gray-300 mb-6">
            <Picker
              selectedValue={positionOfChild}
              onValueChange={(itemValue) => setPositionOfChild(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Position of Child" value="" color="#C0C0C0" />
              <Picker.Item label="First Child" value="1st" />
              <Picker.Item label="Second Child" value="2nd" />
              <Picker.Item label="Third Child" value="3rd" />
              <Picker.Item label="Fourth Child" value="4th" />
              <Picker.Item label="Fifth Child" value="5th" />
            </Picker>
          </View>

          {/* Place of Birth */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Place of Birth"
            placeholderTextColor="#C0C0C0"
            value={placeOfBirth}
            onChangeText={setPlaceOfBirth}
          />

          {/* Race of Child */}
          <Text className="text-sm text-gray-400 mb-2">Race of Child</Text>
          <View className="w-full border-b border-gray-300 mb-6">
            <Picker
              selectedValue={raceOfChild}
              onValueChange={(itemValue) => setRaceOfChild(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Please Choose" value="" />
              <Picker.Item label="Malay" value="malay" />
              <Picker.Item label="Chinese" value="chinese" />
              <Picker.Item label="Indian" value="indian" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          {/* Religion of Child */}
          <Text className="text-sm text-gray-400 mb-2">Religion of Child</Text>
          <View className="w-full border-b border-gray-300 mb-6">
            <Picker
              selectedValue={religionOfChild}
              onValueChange={(itemValue) => setReligionOfChild(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Please Choose" value="" />
              <Picker.Item label="Islam" value="islam" />
              <Picker.Item label="Buddhism" value="buddhism" />
              <Picker.Item label="Christianity" value="christianity" />
              <Picker.Item label="Hinduism" value="hinduism" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          {/* Preschool */}
          <Text className="text-sm text-gray-400 mb-2">Preschool</Text>
          <View className="w-full border-b border-gray-300 mb-6">
            <Picker
              selectedValue={preschool}
              onValueChange={(itemValue) => setPreschool(itemValue)}
              style={{ height: 50 }}
            >
              <Picker.Item label="Please Choose" value="" />
              <Picker.Item
                label="Little Stars Preschool"
                value="little_stars"
              />
              <Picker.Item
                label="Bright Beginnings Academy"
                value="bright_beginnings"
              />
              <Picker.Item
                label="Happy Kids Learning Center"
                value="happy_kids"
              />
              <Picker.Item label="Sunshine Preschool" value="sunshine" />
            </Picker>
          </View>

          {/* Picture of Child (Passport Image) - Optional */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Text className="text-sm text-gray-400">
                Picture of Child (Passport Image)
              </Text>
              <Text className="text-sm text-blue-500 ml-1">Optional</Text>
            </View>
            <TouchableOpacity
              className="w-full h-36 border-2 border-gray-200 rounded-lg bg-gray-50 items-center justify-center"
              onPress={() => handleImagePick("photo")}
            >
              {childPhoto ? (
                <Image
                  source={{ uri: childPhoto }}
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <Ionicons name="camera" size={48} color="#1E90FF" />
              )}
            </TouchableOpacity>
          </View>

          {/* Immunization card for Child - Optional */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Text className="text-sm text-gray-400">
                Immunization card for Child
              </Text>
              <Text className="text-sm text-blue-500 ml-1">Optional</Text>
            </View>
            <TouchableOpacity
              className="w-full h-36 border-2 border-gray-200 rounded-lg bg-gray-50 items-center justify-center"
              onPress={() => handleImagePick("immunization")}
            >
              {immunizationCard ? (
                <Image
                  source={{ uri: immunizationCard }}
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <Ionicons name="camera" size={48} color="#1E90FF" />
              )}
            </TouchableOpacity>
          </View>

          {/* Birth Certification for Child - Optional */}
          <View className="mb-6">
            <View className="flex-row items-center mb-3">
              <Text className="text-sm text-gray-400">
                Birth Certification for Child
              </Text>
              <Text className="text-sm text-blue-500 ml-1">Optional</Text>
            </View>
            <TouchableOpacity
              className="w-full h-36 border-2 border-gray-200 rounded-lg bg-gray-50 items-center justify-center"
              onPress={() => handleImagePick("birth")}
            >
              {birthCertificate ? (
                <Image
                  source={{ uri: birthCertificate }}
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <Ionicons name="camera" size={48} color="#1E90FF" />
              )}
            </TouchableOpacity>
          </View>

          {/* Add Child Button */}
          <TouchableOpacity
            className="w-full h-14 bg-blue-500 rounded-full items-center justify-center mt-4 mb-10"
            onPress={handleAddChild}
          >
            <Text className="text-lg font-semibold text-white">Add Child</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

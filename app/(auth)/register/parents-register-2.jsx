import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";
import { router } from 'expo-router';

export default function ParentProfile({ navigation }) {
  const [currentStep, setCurrentStep] = useState(2); // Starting at step 2
  
  // Form state
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [preschool, setPreschool] = useState('');
  const [myKadNumber, setMyKadNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [occupation, setOccupation] = useState('');
  const [homeAddress1, setHomeAddress1] = useState('');
  const [homeAddress2, setHomeAddress2] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  
  // Office address
  const [companyAddress1, setCompanyAddress1] = useState('');
  const [companyAddress2, setCompanyAddress2] = useState('');
  const [companyPostalCode, setCompanyPostalCode] = useState('');
  const [companyCity, setCompanyCity] = useState('');
  const [companyState, setCompanyState] = useState('');
  
  // Documents
  const [myKadImage, setMyKadImage] = useState(null);
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [immunizationCard, setImmunizationCard] = useState(null);
  const [confirmationChecked, setConfirmationChecked] = useState(false);

  const handleImagePick = async (type) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      switch(type) {
        case 'mykad':
          setMyKadImage(result.assets[0].uri);
          break;
        case 'passport':
          setPassportPhoto(result.assets[0].uri);
          break;
        case 'immunization':
          setImmunizationCard(result.assets[0].uri);
          break;
      }
    }
  };

  const handleNext = () => {
    console.log('Next pressed');
    router.push("/register/addchild-info")
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
        <Text className="right-40 text-lg font-semibold text-gray-800">User Profile</Text>
      </View>

      <ScrollView 
        className="px-6 pb-10"
        showsVerticalScrollIndicator={false}
      >
        {/* Step Indicator */}
        <View className="flex-row items-center justify-between px-2 mt-6 mb-8">
          {/* Step 1 */}
          <View className="flex-row items-center flex-1">
            <View className="w-9 h-9 rounded-full bg-indigo-500 items-center justify-center">
              <Text className="text-base font-semibold text-white">1</Text>
            </View>
            <View className="flex-1 h-0.5 bg-indigo-500 mx-1" />
          </View>
          
          {/* Step 2 */}
          <View className="flex-row items-center flex-1">
            <View className={`w-9 h-9 rounded-full items-center justify-center ${currentStep >= 2 ? 'bg-indigo-500' : 'bg-gray-300'}`}>
              <Text className="text-base font-semibold text-white">2</Text>
            </View>
            <View className={`flex-1 h-0.5 mx-1 ${currentStep >= 3 ? 'bg-indigo-500' : 'bg-gray-300'}`} />
          </View>
          
          {/* Step 3 */}
          <View className="flex-row items-center flex-1">
            <View className={`w-9 h-9 rounded-full items-center justify-center ${currentStep >= 3 ? 'bg-indigo-500' : 'bg-gray-300'}`}>
              <Text className="text-base font-semibold text-white">3</Text>
            </View>
            <View className={`flex-1 h-0.5 mx-1 ${currentStep >= 4 ? 'bg-indigo-500' : 'bg-gray-300'}`} />
          </View>
          
          {/* Step 4 */}
          <View className={`w-9 h-9 rounded-full items-center justify-center ${currentStep >= 4 ? 'bg-indigo-500' : 'bg-gray-300'}`}>
            <Text className="text-base font-semibold text-white">4</Text>
          </View>
        </View>

        {/* Title */}
        <Text className="text-2xl font-semibold text-indigo-500 mb-8">
          Add Information for Parent
        </Text>

        {/* Form Section */}
        <View className="w-full">
          {/* Parent Name - Read only with light background */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6 px-2 rounded"
            placeholder="Full Name"
            placeholderTextColor="#C0C0C0"
            value={parentName}
            editable={false}
          />

          {/* Email - Read only with light background */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6 px-2 rounded"
            placeholder="Email-address"
            placeholderTextColor="#C0C0C0"
            value={email}
            editable={false}
            keyboardType="email-address"
          />

          {/* Preschool - Read only */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Preschool Name"
            placeholderTextColor="#C0C0C0"
            value={preschool}
            editable={false}
          />

          {/* MyKad Number - Read only */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="My Kad Number"
            placeholderTextColor="#C0C0C0"
            value={myKadNumber}
            editable={false}
          />

          {/* Phone Number - Read only */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Phone Number"
            placeholderTextColor="#C0C0C0"
            value={phoneNumber}
            editable={false}
          />

          {/* Occupation */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Occupation"
            placeholderTextColor="#C0C0C0"
            value={occupation}
            onChangeText={setOccupation}
          />

          {/* Home Address 1 */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Home Address 1"
            placeholderTextColor="#C0C0C0"
            value={homeAddress1}
            onChangeText={setHomeAddress1}
          />

          {/* Home Address 2 */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Home Address 2"
            placeholderTextColor="#C0C0C0"
            value={homeAddress2}
            onChangeText={setHomeAddress2}
          />

          {/* Postal Code */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Postal Code"
            placeholderTextColor="#C0C0C0"
            value={postalCode}
            onChangeText={setPostalCode}
            keyboardType="numeric"
          />

          {/* City */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="City"
            placeholderTextColor="#C0C0C0"
            value={city}
            onChangeText={setCity}
          />

          {/* State */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="State"
            placeholderTextColor="#C0C0C0"
            value={state}
            onChangeText={setState}
          />

          {/* Parent Office Address Section */}
          <Text className="text-xl font-semibold text-indigo-500 mt-4 mb-6">
            Parent Office Address
          </Text>

          {/* Company Address 1 */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Company Address 1"
            placeholderTextColor="#C0C0C0"
            value={companyAddress1}
            onChangeText={setCompanyAddress1}
          />

          {/* Company Address 2 */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Company Address 2"
            placeholderTextColor="#C0C0C0"
            value={companyAddress2}
            onChangeText={setCompanyAddress2}
          />

          {/* Company Postal Code */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Company Postal Code"
            placeholderTextColor="#C0C0C0"
            value={companyPostalCode}
            onChangeText={setCompanyPostalCode}
            keyboardType="numeric"
          />

          {/* Company City */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Company City"
            placeholderTextColor="#C0C0C0"
            value={companyCity}
            onChangeText={setCompanyCity}
          />

          {/* Company State */}
          <TextInput
            className="w-full h-12 border-b border-gray-300 text-base text-gray-800 mb-6"
            placeholder="Company State"
            placeholderTextColor="#C0C0C0"
            value={companyState}
            onChangeText={setCompanyState}
          />

          {/* Add Documents Section */}
          <Text className="text-xl font-semibold text-indigo-500 mt-4 mb-6">
            Add Documents
          </Text>

          {/* MyKad/IC Image */}
          <Text className="text-sm text-gray-500 mb-3">MyKad/IC Image</Text>
          <TouchableOpacity 
            className="w-full h-36 border-2 border-gray-200 rounded-lg bg-gray-50 items-center justify-center mb-6"
            onPress={() => handleImagePick('mykad')}
          >
            {myKadImage ? (
              <Image source={{ uri: myKadImage }} className="w-full h-full rounded-lg" />
            ) : (
              <Ionicons name="camera" size={48} color="#1E90FF" />
            )}
          </TouchableOpacity>

          {/* Passport Size Photo */}
          <Text className="text-sm text-gray-500 mb-3">Passport Size Photo</Text>
          <TouchableOpacity 
            className="w-full h-36 border-2 border-gray-200 rounded-lg bg-gray-50 items-center justify-center mb-6"
            onPress={() => handleImagePick('passport')}
          >
            {passportPhoto ? (
              <Image source={{ uri: passportPhoto }} className="w-full h-full rounded-lg" />
            ) : (
              <Ionicons name="camera" size={48} color="#1E90FF" />
            )}
          </TouchableOpacity>

          {/* Immunization Card */}
          <Text className="text-sm text-gray-500 mb-3">Immunization Card</Text>
          <TouchableOpacity 
            className="w-full h-36 border-2 border-gray-200 rounded-lg bg-gray-50 items-center justify-center mb-6"
            onPress={() => handleImagePick('immunization')}
          >
            {immunizationCard ? (
              <Image source={{ uri: immunizationCard }} className="w-full h-full rounded-lg" />
            ) : (
              <Ionicons name="camera" size={48} color="#1E90FF" />
            )}
          </TouchableOpacity>

          {/* Confirmation Checkbox */}
          <TouchableOpacity 
            className="flex-row items-center mt-4 mb-8"
            onPress={() => setConfirmationChecked(!confirmationChecked)}
          >
            <View className="w-12 h-12 border-2 border-blue-200 rounded-full bg-blue-100 items-center justify-center mr-3">
              {confirmationChecked && (
                <Ionicons name="checkmark" size={20} color="#1E90FF" />
              )}
            </View>
            <Text className="flex-1 text-sm text-gray-600 leading-5">
              I confirm that the information given in this form is true and accurate.
            </Text>
          </TouchableOpacity>

          {/* Next Button */}
          <TouchableOpacity 
            className="w-full h-14 bg-blue-500 rounded-full items-center justify-center mt-4"
            onPress={handleNext}
          >
            <Text className="text-lg font-semibold text-white">Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButtons'; // Adjust the path as needed

const OTPVerification = () => {
  const [otp, setOTP] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Refs for all TextInput components
  const otpInputs = useRef([]);

  const handleVerifyOTP = () => {
    // Your OTP verification logic goes here
    if (otp === '123456') {
      // Simulating successful verification, navigate to another page
      router.push('/home');
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const handleChangeText = (index, text) => {
    // Update OTP value
    let updatedOTP = otp;
    updatedOTP = updatedOTP.substring(0, index) + text + updatedOTP.substring(index + 1);
    setOTP(updatedOTP);

    // Move to the next input if not the last one
    if (text && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} className="bg-primary h-full">
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24 }} className="text-2xl text-secondary text-semibold mt-10 font-psemibold">Enter OTP</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }} className="text-lg text-gray-100 font-pregular">We've sent a 6-digit code to your phone number. Please enter it below to verify your account.</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }} >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <TextInput
            key={index}
            className="bg-black-100 shadow-sm"
            ref={(ref) => (otpInputs.current[index - 1] = ref)} 
            style={{  padding: 10, width: 50,height:50, marginHorizontal: 5, textAlign: 'center', color: 'white' }}
            value={otp[index - 1] || ''}
            onChangeText={(text) => handleChangeText(index - 1, text)}
            keyboardType="number-pad"
            maxLength={1}
            placeholderTextColor="#7b7b8b"
            secureTextEntry={true}
            onSubmitEditing={() => {
              if (!text) {
                let updatedOTP = otp.substring(0, index - 1) + '' + otp.substring(index);
                setOTP(updatedOTP);
              }
            }}
          />
        ))}
      </View>
      <CustomButton
        title={isLoading ? 'Verifying...' : 'Verify OTP'}
        handlePress={handleVerifyOTP}
        containerStyles="mt-7 px-5" 
        textStyles="text-white"
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
};

export default OTPVerification;

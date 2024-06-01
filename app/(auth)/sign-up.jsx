import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';

import CustomButton from '../../components/CustomButtons';
import { images } from '../../constants';
import FormField from '../../components/FormField';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    contact: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const submit = () => {
    const { username, contact, password } = form;

    if (!username || !contact || !password) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (validateEmail(contact)) {
      // handle email validation and availability check
      console.log('Email is valid');
    } else if (validatePhoneNumber(contact)) {
      // handle phone number validation and availability check
      console.log('Phone number is valid');
    } else {
      Alert.alert('Error', 'Please enter a valid email or phone number');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call and navigate to verification screen
    // Simulate API call and navigate to verification screen
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to the verification page
      router.push('otp-verification');
    }, 2000);

  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <View style={{ alignItems: 'center' }}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={{ width: 115, height: 35 }}
            />
          </View>

          <Text className="text-2xl text-secondary text-semibold mt-10 font-psemibold">
            Sign Up for DevNet
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />

          <FormField
            title="Phone Number/Email"
            value={form.contact}
            handleChangeText={(e) => setForm({ ...form, contact: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureTextEntry={true}
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Already have an account?
            </Text>
            <Link href="/auth/sign-in" className="text-lg font-psemibold text-secondary">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

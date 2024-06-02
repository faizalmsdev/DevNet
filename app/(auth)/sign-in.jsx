import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Link } from '@react-navigation/native'; // Assuming Expo uses React Navigation for routing

import CustomButton from "../../components/CustomButtons";
import { images } from "../../constants";
import FormField from '../../components/FormField';

// Contexts files 
import { useAuth } from '../../contexts/AuthContext';

const SignIn = () => {

  // Contexts calling 
  const { signInForm, setSignInForm, isSignInSubmitting, setIsSignInSubmitting } = useAuth();

  const submit = () => {
    // Add your submit logic here
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161622' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={{ width: 115, height: 35 }}
            />

          <Text className="text-2xl text-secondary text-semibold mt-10 font-psemibold">Log in to DevNet</Text>

          <FormField 
            title="Email"
            value={signInForm.email}
            handleChangeText={(e) => setSignInForm({...signInForm, email: e})}
            otherStyles = "mt-7"
            keyboardType = "email-address"
          />

          <FormField 
            title="Password"
            value={signInForm.password}
            handleChangeText={(e) => setSignInForm({...signInForm, password: e})}
            otherStyles = "mt-7"
            // keyboardType = "email-address"
          />

          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSignInSubmitting}
          />

            <View className="justify-center pt-5 flex-row gap-2">
              <Text  className="text-lg text-gray-100 font-pregular">Don't have an account?</Text>
              <Link to="/sign-up" style={{ fontSize: 18,lineHeight : 28, color: '#FF9C01', fontWeight: 'bold' }}> Sign Up</Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SignIn;

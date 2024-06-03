import { View, Text, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from "../../components/CustomButtons"

import {images} from "../../constants";
import FormField from '../../components/FormField';
import { Link } from 'expo-router';

// Contexts files 
import { useAuth } from '../../contexts/AuthContext';

const SignIn = () => {

  // Contexts calling 

  const { signInForm, setSignInForm, isSignInSubmitting, setIsSignInSubmitting } = useAuth();

  const submit = () => {

  }

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
            containerStyles="mt-7"
            isLoading={isSignInSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
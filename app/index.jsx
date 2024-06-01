import { Slot } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Refirect,router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar} from "expo-status-bar"

import {images} from "../constants"
import CustomButtons from '../components/CustomButtons';

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image 
            source={images.logo}
            className="w-[230px] h-[284px] "
            resizeMode='contain'
          />

          {/* <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          /> */}

          {/* <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with {' '} <Text className="text-secondary-200">Aora</Text></Text>
            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode='contain'
            />
          </View> */}
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Welcome to DevNet, where innovation meets collaboration. Let's bring your projects to life together.</Text>
          
          <CustomButtons 
            title="Continue with Email"
            handlePress={()=> router.push('/sign-in')}
            containerStyles = "w-full mt-7"
          />

        </View>
      </ScrollView>

      <StatusBar  
        backgroundColor='#161622'
        style='light'
        // hidden={false}
      />
    </SafeAreaView>
  );
}

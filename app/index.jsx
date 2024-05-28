import { Slot } from 'expo-router';
import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hello</Text>
      <StatusBar style="auto" />
      <Link href='/profile' style={{color:"blue"}}>Go to profile</Link>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

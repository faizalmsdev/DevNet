import React from 'react';
import { View, Text, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode="contain"
                style={{  tintColor: color }} // Adjust the width and height here
                className="w-[24px] h-[24px]"
            />
            <Text className={`${focused ? 'font-semibold' : 'font-normal'} text-xs`}> 
                {name}
            </Text>
        </View>
    );
};

const TabsLayout = () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor:'#FFA001',
                tabBarInactiveTintColor:'#CDCDE0',
                
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            name="home"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name="bookmark"
                options={{
                    title: "Bookmark",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.bookmark}
                            color={color}
                            name="Bookmark"
                            focused={focused}
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name="create"
                options={{
                    title: "Create",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.plus}
                            color={color}
                            name="Create"
                            focused={focused}
                        />
                    )
                }}
            />

        <Tabs.Screen 
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.profile}
                            color={color}
                            name="Profile"
                            focused={focused}
                        />
                    )
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;

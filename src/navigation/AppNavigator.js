import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { themeColor, useTheme } from "react-native-rapi-ui";
import TabBarIcon from "../components/utils/TabBarIcon";
import TabBarText from "../components/utils/TabBarText";

import Pemasukan from "../screens/Pemasukan";
import Pengaturan from "../screens/Pengaturan";
import SecondScreen from "../screens/SecondScreen";
import Detail from "../screens/Detail";
import Pengeluaran from "../screens/Pengeluaran";
import Beranda from "../screens/Beranda";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
  const { isDarkmode } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: isDarkmode ? themeColor.dark100 : "#c0c0c0",
          backgroundColor: isDarkmode ? themeColor.dark200 : "#ffffff",
        },
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Beranda" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"md-home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pemasukan"
        component={Pemasukan}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Pemasukan" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"cash"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Pengeluaran"
        component={Pengeluaran}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Pengeluaran" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"remove-circle-outline"} />
          ),
        }}
      />
      <Tabs.Screen
        name="Detail"
        component={Detail}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Detail" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"information-circle"} />
          ),
        }}
      />
       <Tabs.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Pengaturan" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={"settings-outline"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

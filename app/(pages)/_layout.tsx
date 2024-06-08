import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartPage from "./index";
import Login from "./login";
import Register from "./register";
import Home from "./home";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SidebarComponent from "./SidebarComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from "./profile";
import SODashboard from "./SOS/SODashboard";
import LogObservation from "./SOS/LogObservation";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MenuButton = ({ navigation }: { navigation: any }) => (
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Icon name="menu" size={30} />
  </TouchableOpacity>
);
function Root() {
  return (
    <Drawer.Navigator drawerContent={() => <SidebarComponent   />} initialRouteName="login">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen  name="SODashboard" options={{ title: 'Dashboard' }} component={SODashboard} />
      <Drawer.Screen  name="LogObservation" options={{ title: 'Log Observation' }} component={LogObservation} />
    </Drawer.Navigator>
  );
}
export default function PageLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {

      const userData = await AsyncStorage.getItem("userInfo");
      if(userData && userData !== ''){
        const parsedData = userData && JSON.parse(userData);
        if (parsedData && parsedData.length > 0 && parsedData.TICKET_NO > 0 ) {
          setIsAuthenticated(true);
          console.log(parsedData)
        }else{
          setIsAuthenticated(false);
        }
      }
      
     
    };

    checkAuthentication();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
     {isAuthenticated ? (
      <>
     <Stack.Screen name="Root" component={Root} />
     </>
    ) : (
        <>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="Root" component={Root} />
        
        </>
        )}
        
     
      
    </Stack.Navigator>
  );
}

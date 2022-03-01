import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/home/HomeScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import AddSalaryScreen from "../../screens/add-salary/AddSalaryScreen";
import CustomDrawer from "../../components/drawer/CustomDrawer";
import HomeIcon from '../../../assets/icons/home.svg';

const Drawer = createDrawerNavigator();
const screenOptionStyle = {
  headerShown: false,
  drawerWidth: '100px'
};
const DrawerContent = () => {
  return (
    <Drawer.Navigator
      screenOptions={screenOptionStyle}
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeScreen} options={{drawerIcon: ({color}) => (
        <HomeIcon name="home" width={20} size={20} color={color} />
      )}} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Salary" component={AddSalaryScreen} />
      <Drawer.Screen name="Settings" component={ProfileScreen} />
      <Drawer.Screen name="Sign Out" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerContent;

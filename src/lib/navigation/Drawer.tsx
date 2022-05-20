import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/home/HomeScreen";
import ProfileScreen from "../../screens/profile/ProfileScreen";
import ExpansesScreen from "../../screens/expanses/ExpansesScreen";
import CustomDrawer from "../../components/drawer/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import JobsScreen from "../../screens/jobs/JobsScreen";
import SettingsScreen from "../../screens/settings/SettingsScreen";

const Drawer = createDrawerNavigator();
const screenOptionStyle = {
  headerShown: false,
  drawerActiveBackgroundColor: "#22ce99",
  drawerActiveTintColor: "#ffffff",
  drawerLabelStyle: {
    marginHorizontal: -25,
    fontSize: 16,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
};
const DrawerContent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Drawer.Navigator
      screenOptions={screenOptionStyle}
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      {isLoggedIn && (
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
      )}
      {isLoggedIn && (
        <Drawer.Screen
          name="Expanses"
          component={ExpansesScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="wallet-outline" size={22} color={color} />
            ),
          }}
        />
      )}
      {isLoggedIn && (
        <Drawer.Screen
          name="Recent Jobs"
          component={JobsScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="add-circle-outline" size={22} color={color} />
            ),
          }}
        />
      )}
      {isLoggedIn && (
        <Drawer.Screen
          name="Messages"
          component={ExpansesScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color={color}
              />
            ),
          }}
        />
      )}
      {isLoggedIn && (
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="settings-outline" size={22} color={color} />
            ),
          }}
        />
      )}
      {isLoggedIn ? (
        <Drawer.Screen
          name="Sign Out"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="log-out-outline" size={22} color={color} />
            ),
          }}
        />
      ) : (
        <Drawer.Screen
          name="Log In"
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="log-in-outline" size={22} color={color} />
            ),
          }}
        />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerContent;

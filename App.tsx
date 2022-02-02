import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./src/lib/navigation/Routes";
import HomeScreen from "./src/screens/home/HomeScreen";
import AddSalaryScreen from "./src/screens/add-salary/AddSalaryScreen";
import ProfileScreen from "./src/screens/profile/ProfileScreen";
import Header from "./src/components/header/Header";
const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function App() {  
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName="Home"  screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Salary" component={AddSalaryScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      // <Routes />
  );
}

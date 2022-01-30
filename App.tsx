import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./src/lib/navigation/Routes";
import HomeScreen from "./src/screens/home/HomeScreen";

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={screenOptionStyle}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      // <Routes />
  );
}

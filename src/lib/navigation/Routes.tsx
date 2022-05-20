import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpansesScreen from "../../screens/expanses/ExpansesScreen";
import HomeScreen from "../../screens/home/HomeScreen";

const RootStack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const Route = () => {
  return (
    <RootStack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Profile" component={HomeScreen} />
      <RootStack.Screen name="Expanses" component={ExpansesScreen} />
    </RootStack.Navigator>
  );
};

export default Route;

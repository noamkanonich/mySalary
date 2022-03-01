import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddSalaryScreen from "../../screens/add-salary/AddSalaryScreen";
import HomeScreen from "../../screens/home/HomeScreen";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="Salary" component={AddSalaryScreen} />
    </Stack.Navigator>
  );
};

export default Route;

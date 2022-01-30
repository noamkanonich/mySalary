import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/home/HomeScreen";

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"  screenOptions={screenOptionStyle}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Route;
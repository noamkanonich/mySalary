import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drawer from "./src/lib/navigation/Drawer";
import ExpansesProvider from "./src/hooks/use-expanses/ExpansesProvider";
import AuthProvider from "./src/hooks/use-auth/AuthProvider";

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

// get user id (uuid.v4) from local storage and upload data

export default function App() {
  return (
    <AuthProvider>
      <ExpansesProvider>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </ExpansesProvider>
    </AuthProvider>
  );
}

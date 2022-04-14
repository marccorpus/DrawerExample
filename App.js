import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import UserScreen from "./src/screens/UserScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#d70f64" },
          headerTintColor: "#fff",
          drawerActiveBackgroundColor: "#F6CCD4",
          drawerActiveTintColor: "#d70f64",
        }}
      >
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name="home" color={color} size={size} />;
            },
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name="person" color={color} size={size} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

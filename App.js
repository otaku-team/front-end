import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/screens/Main";
import Info from "./src/screens/Info";
import { RecoilRoot } from "recoil";

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

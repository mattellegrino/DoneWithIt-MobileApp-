import * as React from "react";
import "./Components/EntryPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EntryPage from "./Components/EntryPage";
import RegisterName from "./Components/RegisterName";
import RegisterSex from "./Components/RegisterSex";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entry"
          component={EntryPage}
          options={{ title: "Welcome", headerShown: false }}
        />
        <Stack.Screen
          name="RegisterName"
          component={RegisterName}
          options={{ title: "Registrazione" }}
        />
        <Stack.Screen
          name="RegisterSex"
          component={RegisterSex}
          options={{ title: "Registrazione" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

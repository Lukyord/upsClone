import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
  Main: undefined;
  Modal: { userId: string; name: string };
  Order: { order: any };
};

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

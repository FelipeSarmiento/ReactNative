// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MainScreen} from "./src/Screens/MainScreen";
import {SecondScreen} from "./src/Screens/SecondScreen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer style={{ backgroundColor: "#000"}}>
            <Stack.Navigator initialRouteName="Inicio" style={{ backgroundColor: "#000"}}>
                <Stack.Screen
                    name="Inicio"
                    component={MainScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: "#000"
                        },
                        headerTintColor: "#fff"
                    }}
                />
                <Stack.Screen
                    name="SegundaPantalla"
                    component={SecondScreen}
                    options={{
                        headerStyle: {
                            backgroundColor: "#000"
                        },
                        headerTintColor: "#fff"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
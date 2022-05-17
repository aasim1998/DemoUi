import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactDetails  from './src/ContactDetails';
import Timeline from './src/Timeline';
import Notes from './src/Notes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
    }}
    initialRouteName={'ContactDetails'}

      >
        <Stack.Screen name="ContactDetails" component={ContactDetails} />
        <Stack.Screen name="Timeline" component={Timeline} />
        <Stack.Screen name="Notes" component={Notes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
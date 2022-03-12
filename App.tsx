import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from './components/Header';
import PokemonsListScreen from './screens/PokemonsListScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Header />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'PokemonsListScreen'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="PokemonsListScreen"
            component={PokemonsListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

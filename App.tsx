import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PokemonsListScreen from './screens/PokemonsListScreen';
import PokemonDetailScreen from './screens/PokemonDetailScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'PokemonsListScreen'}>
          <Stack.Screen
            name="PokemonsListScreen"
            component={PokemonsListScreen}
            options={{
              title: 'Pokemon List',
              headerStyle: {
                backgroundColor: '#E74C3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
              },
            }}
          />
          <Stack.Screen
            name="pokemon"
            component={PokemonDetailScreen}
            options={{
              title: 'Pokemon',
              headerStyle: {
                backgroundColor: '#E74C3C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 24,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

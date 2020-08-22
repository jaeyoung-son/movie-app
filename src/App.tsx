import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import CheckLogin from '~/Screens/CheckLogin';
import Login from '~/Screens/Login';
import MovieHome from '~/Screens/MovieHome';
import MovieDetail from '~/Screens/MovieDetail';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const [login, setLogin] = useState<string | null>(null);

  useEffect(() => {
    const checkLogin = async () => {
      const key = await AsyncStorage.getItem('key');
      setLogin(key);
    };

    checkLogin();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'MOVIEAPP',
            headerTransparent: true,
            headerTintColor: '#E70915',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          options={{
            title: 'MOVIEAPP',
            headerTintColor: '#e70915',
            headerStyle: {
              backgroundColor: '#141414',
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
          }}
          name="MovieHome"
          component={MovieHome}
        />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{
            title: 'MOVIEAPP',
            headerTintColor: '#e70915',
            headerStyle: {
              backgroundColor: '#141414',
              borderBottomWidth: 0,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitle: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

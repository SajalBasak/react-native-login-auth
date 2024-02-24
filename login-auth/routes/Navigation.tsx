import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const {userData} = useSelector((state: any) => state.auth);
  console.log(
    '🚀 ~ file: AppNavigation.js:17 ~ AppNavigation ~ userData:',
    userData,
  );
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userData ? (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
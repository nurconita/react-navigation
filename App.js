import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HalamanHome}/>
        <Stack.Screen name="About" component={HalamanAbout}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const HalamanHome = ({navigation}) => {
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button 
      title="About"
      onPress={() => navigation.navigate('About')} />
    </View>
  )
}

const HalamanAbout = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Text>Details Screen</Text>
    </View>
  )
}
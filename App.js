import React, { useState } from 'react';
import { View, StyleSheet,Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import HomeScreen from './HomeScreen.jsx';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SandwichesScreen from './SandwichesScreen.jsx';
import SoupsScreen from './SoupsScreen.jsx';
import SaladsScreen from './SaladsScreen.jsx';
import DessertsScreen from './DessertsScreen.jsx';
import DrinksScreen from './DrinksScreen.jsx';
import WhiteElephant from './WhiteElephant.jsx';
import RSVP from './RSVP.jsx';

export default function App() {

  const Stack = createStackNavigator();

  const [examples, setExamples] = useState([]);
  const [id, setId] = useState(0);
  const remove = (index) => {
    let tempArray = examples.filter(entry => entry.index != index);
    setExamples(tempArray);
  };



  
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sandwiches" component={SandwichesScreen} />
        <Stack.Screen name="Soups" component={SoupsScreen} />
        <Stack.Screen name="Salads" component={SaladsScreen} />
        <Stack.Screen name="Desserts" component={DessertsScreen} />
        <Stack.Screen name="Drinks" component={DrinksScreen} />
        <Stack.Screen name="WhiteElephant" component={WhiteElephant} />
      </Stack.Navigator>
    </NavigationContainer>



      <Button
       title="RSVP"
        onPress={() => {
        let tempArray = examples.concat({index: id});
        setId(id + 1);
        setExamples(tempArray);
       
      }} />
      
      {
        examples.map((entry) => {
          return <RSVP index={entry.index} remove={remove} key={entry.index} />
        })
      }
     
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#960018',
    padding: 8,
    input: {
      height: 40,
      margin: 12,
      borderWidth: 3,
      padding: 10,
      fontcolor: '#FFFFFF',
      bordercolor: '#FFFFFF'
  }}
});

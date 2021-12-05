import React from 'react';
import {View, Text, Button, Image, TextInput } from 'react-native';
import App from './App';


export default function HomeScreen(props) {
    const [textInput, setTextInput] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>The office would like to offically invite you to this year's: </Text>
      
        <Image
          style={{
            resizeMode: "contain",
            height: 500,
            width: 600
          }}
          source={require("./assets/Holiday-Office-Lunch-Invitation.jpg")}
        />

<Text>
      Enter Employee Name: {textInput}
      </Text> 
      <TextInput 
        onChangeText={setTextInput}
      />
      <Button
        title="Make Food Selections"
        onPress={() => props.navigation.navigate('Sandwiches')}
        color="#1E5631"
      />
    </View>
  );
}

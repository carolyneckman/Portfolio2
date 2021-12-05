import React, {useState} from 'react';
import {View, Text, Button, Stylesheet, Image} from 'react-native';
import {CheckBox } from 'react-native-elements'

export default function SaladsScreen(props) {

    const [Caesar, setCaesar] = useState(false);
    const [Greek, setGreek] = useState(false);
    const [House, setHouse] = useState(false);
    const [Italian, setItalian] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h2>Choose a Salad</Text>
      <CheckBox title='Caesar' checked={Caesar} onPress={() => setCaesar(!Caesar)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/Ceasar-Salad-e1483127149623.jpg")}
        />

      <CheckBox title='Greek' checked={Greek} onPress={() => setGreek(!Greek)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/Greek-Salad-500x375.jpg")}
        />

      <CheckBox title='House' checked={House} onPress={() => setHouse(!House)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/1520543510452.jpeg")}
        />

      <CheckBox title='Italian ' checked={Italian} onPress={() => setItalian(!Italian)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/italian-salad-4-1.jpg")}
        />
 
      <View>
      <Text h3>Your Selection</Text>
      <Text>{Caesar ? "Caesar Salad" : ""}</Text>
      <Text>{Greek ? "Greek Salad" : ""}</Text>
      <Text>{House ? "House Salad" : ""}</Text>
      <Text>{Italian ? "Italian Salad" : ""}</Text>
      </View>
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate('Desserts')}
      />
    </View>
  );
}
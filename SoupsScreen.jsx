import React, {useState} from 'react';
import {View, Text, Button, Stylesheet, Image} from 'react-native';
import {CheckBox } from 'react-native-elements'

export default function SoupsScreen(props) {

    const [Tomato, setTomato] = useState(false);
    const [Broccoli, setBroccoli] = useState(false);
    const [Clam, setClam] = useState(false);
    const [Butternut, setButternut] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h2>Choose a Soup</Text>
      <CheckBox title='Tomato' checked={Tomato} onPress={() => setTomato(!Tomato)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/tomato-soup-9-1200.jpg")}
        />

      <CheckBox title='Broccoli and Cheddar' checked={Broccoli} onPress={() => setBroccoli(!Broccoli)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/broccoli-cheese-soup-3.jpg")}
        />

      <CheckBox title='Clam Chowder' checked={Clam} onPress={() => setClam(!Clam)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/Pressure-Cooker-Clam-Chowder_EXPS_SSMZ21_246255_E10_15_4b.jpg")}
        />

      <CheckBox title='Butternut Squash' checked={Butternut} onPress={() => setButternut(!Butternut)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/Roasted-Butternut-Squash-Soup-1-2.jpg")}
        />
 
      <View>
      <Text h3>Your Selection</Text>
      <Text>{Tomato ? "Tomato" : ""}</Text>
      <Text>{Broccoli ? "Broccoli and Cheddar" : ""}</Text>
      <Text>{Clam ? "Clam Chowder" : ""}</Text>
      <Text>{Butternut ? "Butternut Squash" : ""}</Text>
      </View>
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate('Salads')}
      />
    </View>
  );
}
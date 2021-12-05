import React, {useState} from 'react';
import {View, Text, Button, Stylesheet, Image} from 'react-native';
import {CheckBox } from 'react-native-elements'

export default function SandwichesScreen(props) {

    const [Ham, setHam] = useState(false);
    const [Turkey, setTurkey] = useState(false);
    const [Italian, setItalian] = useState(false);
    const [Meatball, setMeatball] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h2>Choose a Sandwich</Text>
      
      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/Ham-Sandwich.jpg")}
        />

      <CheckBox title='Ham and Swiss' checked={Ham} onPress={() => setHam(!Ham)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/2019_com_alfredo-dijon-turkey-sandwich_900x600.jpg")}
        />

      <CheckBox title='Turkey and Cheddar' checked={Turkey} onPress={() => setTurkey(!Turkey)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/1382539864691.jpeg")}
        />

      <CheckBox title='Italian Sub' checked={Italian} onPress={() => setItalian(!Italian)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/1487862595-meatball-subl1-1.jpg")}
        />

      <CheckBox title='Meatball Sub' checked={Meatball} onPress={() => setMeatball(!Meatball)} />
      <View>
      <Text h3>Your Selection</Text>
      <Text>{Ham ? "Ham and Swiss" : ""}</Text>
      <Text>{Turkey ? "Turkey and Cheddar" : ""}</Text>
      <Text>{Italian ? "Italian Sub" : ""}</Text>
      <Text>{Meatball ? "Meatball Sub" : ""}</Text>
      </View>
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate('Soups')}
      />
    </View>
  );
}

import React, {useState} from 'react';
import {View, Text, Button, Stylesheet, Image} from 'react-native';
import {CheckBox } from 'react-native-elements'

export default function DrinksScreen(props) {

    const [Water, setWater] = useState(false);
    const [Soda, setSoda] = useState(false);
    const [Lemonade, setLemonade] = useState(false);
    const [SweetTea, setSweetTea] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h2>Choose a Drink</Text>
      <CheckBox title='Water' checked={Water} onPress={() => setWater(!Water)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/water.jpg")}
        />

      <CheckBox title='Soda' checked={Soda} onPress={() => setSoda(!Soda)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/soda.jpg")}
        />

      <CheckBox title='Lemonade' checked={Lemonade} onPress={() => setLemonade(!Lemonade)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/lemonade.jpg")}
        />
     

      <CheckBox title='Sweet Tea ' checked={SweetTea} onPress={() => setSweetTea(!SweetTea)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/sweettea.jpg")}
        />
 
      <View>
      <Text h3>Your Selection</Text>
      <Text>{Water ? "Water" : ""}</Text>
      <Text>{Soda ? "Soda" : ""}</Text>
      <Text>{Lemonade ? "Lemonade" : ""}</Text>
      <Text>{SweetTea ? "Sweet Tea" : ""}</Text>
      </View>
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate('WhiteElephant')}
      />
    </View>
  );
}
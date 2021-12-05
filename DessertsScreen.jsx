import React, {useState} from 'react';
import {View, Text, Button, Stylesheet, Image} from 'react-native';
import {CheckBox } from 'react-native-elements';

export default function DessertsScreen(props) {

    const [ChocolateCake, setChocolateCake] = useState(false);
    const [VanillaCake, setVanillaCake] = useState(false);
    const [Brownies, setBrownies] = useState(false);
    const [Cookies, setCookies] = useState(false);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h2>Choose a Dessert</Text>
      <CheckBox title='Chocolate Cake' checked={ChocolateCake} onPress={() => setChocolateCake(!ChocolateCake)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/Best-Chocolate-Cake_exps47786._THCA1917912C10_02_1bC_RMS-4.jpg")}
        />

      <CheckBox title='VanillaCake' checked={VanillaCake} onPress={() => setVanillaCake(!VanillaCake)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/My-best-Vanilla-Cake_9.jpg")}
        />

      <CheckBox title='Brownies' checked={Brownies} onPress={() => setBrownies(!Brownies)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/Brownies-Recipe-2-1200.jpg")}
        />
    

      <CheckBox title='Cookies ' checked={Cookies} onPress={() => setCookies(!Cookies)} />

      <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }}
          source={require("./assets/cookies.jpg")}
        />
 
      <View>
      <Text h3>Your Selection</Text>
      <Text>{ChocolateCake ? "Chocolate Cake" : ""}</Text>
      <Text>{VanillaCake ? "Vanilla Cake" : ""}</Text>
      <Text>{Brownies ? "Brownies" : ""}</Text>
      <Text>{Cookies ? "Cookies" : ""}</Text>
      </View>
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate('Drinks')}
      />
    </View>
  );
}
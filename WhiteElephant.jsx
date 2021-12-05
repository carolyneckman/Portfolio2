import React, {useState} from 'react';
import {View, Text, Button, Image, TextInput } from 'react-native';
import App from './App';
import {CheckBox } from 'react-native-elements';



export default function WhiteElephant(props) {

    const [Yes, setYes] = useState(false);
    const [No, setNo] = useState(false);
    const [textInput, setTextInput] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Annual White Elephant Gift Exchange </Text>
      
        <Image
          style={{
            resizeMode: "contain",
            height: 500,
            width: 600
          }}
          source={require("./assets/whiteE.jpg")}
        />
   <Text h3>Will You be Participating in White Elephant?</Text>
<CheckBox title='Yes' checked={Yes} onPress={() => setYes(!Yes)} />
<CheckBox title='No' checked={No} onPress={() => setNo(!No)} />
<View>
   

      <Text>
       If yes, how much money can you spend on a gift? Enter Below: {textInput}
      </Text> 
      <TextInput 
        onChangeText={setTextInput}
      />
      </View>
      <Button
        title="Submit"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}


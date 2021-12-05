import React, { useState } from 'react';
import { Text, Button, Card } from 'react-native-elements';

export default function RSVP(props) {

  const [counter, setCounter] = useState(0);

  return (
    <Card>
        <Card.Title>Employee{props.index}</Card.Title>
        <Text>Guest count: {counter}</Text>
        <Button title="Add Guest" onPress={() => setCounter(counter + 1)} />
        <Button title="Remove Guest" onPress={() => props.remove(props.index)} />
        <Button title="Submit" onPress={() => props.remove(props.index)} />
    </Card>
  );
}
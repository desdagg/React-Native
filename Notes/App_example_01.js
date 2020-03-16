import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  //array with 2 elements, first is current state snapshot, second is function to set state to a new value
  // style 2 curley braces, one for react style and another because it is a js object
  // percent values need to be in quotes E.g. width: '50%'
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput 
          placeholder="Text placeholder yo" 
          style={{width: '80%', borderColor: 'black', borderWidth: 1, padding: 10}}/>
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});


// old code for reference

 // const [outputText, setOutputText] = useState('Default text yo');

/**
 * <Text>{outputText}</Text>
 *     <Button title="Change Text" onPress={() => setOutputText('Button pressed yo!')}/>
 */
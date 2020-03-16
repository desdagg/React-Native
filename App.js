import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  // justifyContent - organise items along the main axies 
  // alignItems     - organise items along the cross axies (opposeite to main)
  return (
    <View style={{padding: 50, flexDirection: 'row', width: '100%', height: 800}}>
      <View 
        style={{
          backgroundColor: 'red',
          width: '33.3%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View 
        style={{
          backgroundColor: '#d142f5',
          width: '33.3%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: '#0ff7ff',
          width: '33.3%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}



// old code for reference

 // const [outputText, setOutputText] = useState('Default text yo');

/**
 * <Text>{outputText}</Text>
 *     <Button title="Change Text" onPress={() => setOutputText('Button pressed yo!')}/>
 */
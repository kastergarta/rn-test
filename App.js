import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View style ={{padding: 30}}>
        <TextInput 
          placeholder='Course goal' 
          style={{borderColor: 'blue', borderWidth: 1}}
        />
        <Button title='ADD'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

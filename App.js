import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoal, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }

  function addGoalHandler(){
    console.log(enteredGoal)
  }

  return (
    <View style ={styles.screen}>
      <View style ={styles.inputContainer}>
        <TextInput 
          placeholder='Course goal' 
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={addGoalHandler}/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10
  }
});

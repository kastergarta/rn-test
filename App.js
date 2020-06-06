import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }

  function addGoalHandler(){
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
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
      <ScrollView>
        {courseGoals.map((goal) => (
        <View key={goal} style={styles.listItem}>
          <Text>{goal}</Text>
        </View>
        ))}
      </ScrollView>
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
  },
  listItem: {
    padding: 10,
    backgroundColor: 'grey',
    borderColor: 'green',
    borderWidth: 2,
    marginVertical: 5
  }
});

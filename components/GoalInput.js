import React, { useState } from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoal(enteredText);
      }

    return (
        <View style ={styles.inputContainer}>
            <TextInput 
                placeholder='Course goal' 
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    );
};

const styles = StyleSheet.create({
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
})

export default GoalInput;
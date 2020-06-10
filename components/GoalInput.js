import React, { useState } from 'react';
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText){
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }  

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style ={styles.inputContainer}>
                <TextInput 
                    placeholder='Course goal' 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View>
                    <Button title='CLOSE' onPress={props.onCancel}/>
                    <Button title='ADD' onPress={addGoalHandler}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      input: {
        borderColor: 'blue',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      }
})

export default GoalInput;
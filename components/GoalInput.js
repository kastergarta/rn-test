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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='CLOSE' onPress={props.onCancel}/>
                    </View> 
                    <View style={styles.button}>
                        <Button title='ADD' onPress={addGoalHandler}/>
                    </View>   
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
        width: '80%',
        borderColor: 'blue',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%'
      },
      button: {
        width: '60%'
      }
})

export default GoalInput;
import React from 'react';
import { View, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';

const MyButton = props => {
    return (
        <TouchableOpacity activeOpacity= {0.2} onPress={props.onPress}>
            <View style={{...styles.buttonStyle, ...props.button}}>
                <Text style={styles.buttonText}> {props.children} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10
    },
    buttonText: {
        color: 'white', 
        textAlign: 'center'
    },
})

export default MyButton;
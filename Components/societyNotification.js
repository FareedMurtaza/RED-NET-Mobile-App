import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Dimensions } from 'react-native';
import MyButton from './myButton';

const SocietyNotification = props => {
    return <View>
        <TouchableOpacity>
            <View style={styles.itemContainer} >
                <View style={styles.leftInfo} >
                    <Image source={{ uri: props.item.profilePic }} style={styles.image} />
                    <Text>{props.item.time}</Text>
                </View>

                <View style={styles.rightInfo} >
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ ...styles.bold, ...styles.size }}> {props.item.name}: </Text>
                        <Text style={{fontSize: 18}}> {props.item.message} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        margin: 5,
        padding: 10,
        borderColor: '#e82a23',
        borderRadius: 5,
    },
    leftInfo: {
        flexDirection: 'column',
        width: '26%',
        minHeight: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    rightInfo: {
        flexDirection: 'column',
        width: '72%',
        marginLeft: 10, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    bold: {
        fontWeight: 'bold'
    },
    size: {
        fontSize: 22
    },
    buttonContainer: {
        width: '100%',
        padding: 5
    },
    button: {
        width: '100%',
        paddingTop: 5,
    }
})

export default SocietyNotification;
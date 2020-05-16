import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, Image, Button, Alert, Linking } from 'react-native'

const Donor = props => {

    const [showUserDetail, setshowUserDetail] = useState(false)
    const [userName, setuserName] = useState('nobody')
    const [userPhone, setuserPhone] = useState('')
    const [userBloodGroup, setuserBloodGroup] = useState('')

    if (showUserDetail) {
        Alert.alert(
            'User Details:',
            'Name: ' + userName +
            '\nPhone No: ' + userPhone +
            '\nBlood Group: ' + userBloodGroup,
            [
                { text: 'OK', onPress: () => setshowUserDetail(prevstate => !prevstate) }
            ],
            { cancelable: false }
        );
    }

    const showUserDetailHandler = () => {
        setshowUserDetail(prevstate => !prevstate)
        setuserName(props.item.name)
        setuserBloodGroup(props.item.bloodGroup)
        setuserPhone(props.item.phoneNo)
    }
    const phoneCallHandler = () => {
        Linking.openURL(`tel:${props.item.phoneNo}`)
    }
    const messageHandler = () => {
        Linking.openURL(`sms:${props.item.phoneNo}?sms_body= ' '`)
    }

    return (
        <TouchableNativeFeedback>
            <View style={styles.itemContainer}>
                <View style={styles.userDataView}>
                    <Image source={{ uri: props.item.profilePic }} style={styles.circularView} />

                    <View style={styles.userData} >
                        <Text style={styles.infoItem}>{props.item.name}</Text>
                        <Text style={styles.infoItem}>{props.item.phoneNo}</Text>
                    </View>

                    <View style={{ ...styles.circularView, ...styles.borderView }}>
                        <Text>location</Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title='Details' color='#e64f45'
                        onPress={showUserDetailHandler} /></View>
                    <View style={styles.button}><Button title='Call' color='dodgerblue'
                        onPress={phoneCallHandler}
                    /></View>
                    <View style={styles.button}><Button title='Message' color='dodgerblue'
                        onPress={messageHandler}
                    /></View>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 2,
        margin: 5,
        padding: 10,
        borderColor: '#e82a23',
        borderRadius: 5,
    },
    userDataView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    circularView: {
        minWidth: 85,
        minHeight: 85,
        maxWidth: 85,
        maxHeight: 85,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userData: {
        padding: 10,
        maxWidth: '45%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoItem: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    button: {
        width: '30%'
    },
    borderView: {
        borderWidth: 2,
        borderColor: 'dodgerblue',
    }
})

export default Donor;
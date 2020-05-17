import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Switch, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons, Ionicons, Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const CustomDrawerComponent = props => {
    const [isMute, setisMute] = useState(false);
    const profile = useSelector(state => state.profile.userProfile);

    const muteMeHandler = () => {
        if (!isMute) {
            Alert.alert(
                'Mute Blood Request',
                'You will not recieve blood donation request',
                [
                    { text: 'OK', onPress: () => { } },
                    { text: 'Cancel', onPress: () => setisMute(prevstate => !prevstate) }
                ],
                { cancelable: false }
            );
        }
        setisMute(state => !state)
    }

    return <SafeAreaView style={styles.drawerNavigator}>
        <View style={styles.userInfo} >
            <Image source={{ uri: profile.profilePic }} style={styles.image} />
            <View style={styles.info} >
                <Text style={{ ...styles.fontStyle, ...{ fontSize: 20 } }}>Fareed Murtaza</Text>
                <Text style={styles.fontStyle}>{profile.email}</Text>
            </View>
        </View>

        <ScrollView>
            <View style={styles.rowItem}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="ios-notifications" size={30} />
                    <Text style={styles.rowFontStyle}>Mute</Text>
                </View>
                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ true: '#4a148c' }}
                        thumbColor={Platform.OS === 'android' ? '#4a148c' : ''}
                        value={isMute}
                        onValueChange={muteMeHandler}
                    />
                </View>
            </View>
            
            <View style={{...styles.rowItem, ...{marginLeft: 10}}}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="history" size={25} />
                    <Text style={styles.rowFontStyle}>History</Text>
                </View>
            </View>
            
            <View style={{...styles.rowItem, ...{marginLeft: 10}}}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons name="block" size={25} />
                    <Text style={styles.rowFontStyle}>Block User</Text>
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.rowItem}>
                <View style={{ flexDirection: 'row' }}>
                    <MaterialCommunityIcons name="logout" size={30} />
                    <Text style={styles.rowFontStyle}>Log out</Text>
                </View>
            </View>
            <View style={styles.rowItem}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="md-settings" size={30} />
                    <Text style={styles.rowFontStyle}>Settings</Text>
                </View>
            </View>
            <View style={styles.rowItem}>
                <View style={{ flexDirection: 'row' }}>
                    <Entypo name="help" size={25} />
                    <Text style={styles.rowFontStyle}>Help/FAQ</Text>
                </View>
            </View>
            <View style={styles.rowItem}>
                <View style={{ flexDirection: 'row' }}>
                    <Ionicons name="md-send" size={28} />
                    <Text style={styles.rowFontStyle}>Send Feedback</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    drawerNavigator: {
        flex: 1
    },
    userInfo: {
        backgroundColor: '#e82a23',
        maxHeight: '40%',
        minHeight: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    image: {
        marginTop: 20,
        width: 130,
        height: 130,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2
    },
    info: {
        margin: 5,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontStyle: {
        color: 'white'
    },
    rowItem: {
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15
    },
    rowFontStyle: {
        fontSize: 20,
        paddingLeft: 15
    },
    switchContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    divider: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 5
    }
})

export default CustomDrawerComponent;
import React from 'react';
import { View, StyleSheet, FlatList, Button, TouchableOpacity, ImageBackground, Text, Image } from 'react-native';
import MyButton from '../Components/myButton';

const FriendsList = props => {

    const renderFriendList = itemData => {
        return (
            <View>
                <View>
                    <TouchableOpacity>
                        <View style={styles.itemContainer} >
                            <Image source={{ uri: itemData.item.profilePic }} style={styles.image} />

                            <View style={styles.info} >
                                <Text style={styles.infoItem}> Name: {itemData.item.name} </Text>
                                <Text style={styles.infoItem}> Blood Group: {itemData.item.bloodGroup} </Text>
                                <View style={styles.button}><Button title="Delete" color="#e82a23" /></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={props.friendsData}
            renderItem={renderFriendList}
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        borderWidth: 2,
        margin: 5,
        padding: 10,
        borderColor: '#e82a23',
        borderRadius: 5, 
    },
    info: {
        width: '70%',
        flexDirection: 'column',
        margin: 10,
        paddingLeft: 10
    },
    image: {
        marginLeft: 10,
        width: '30%',
        height: 100,
        borderRadius: 50,
    },
    button: {
        width: '80%',
    },
    infoItem: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})

export default FriendsList;

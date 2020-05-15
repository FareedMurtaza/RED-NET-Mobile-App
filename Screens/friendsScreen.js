import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import CustomHeaderButton from '../Components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FriendsList from '../Components/friendsList';
import { FRIENDS } from '../data/dummydata';

const FriendsScreen = props => {
    const friends= FRIENDS.filter(frnd => frnd.id == '1' || frnd.id === '2' || frnd.id == '3' || frnd.id === '4' || frnd.id === '5')

    return <FriendsList friendsData= {friends} navigation={props.navigation} />
}

FriendsScreen.navigationOptions = navData => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item title="menuButton" iconName="md-menu" onPress={() => {
                    navData.navigation.toggleDrawer()
                }} />
            </HeaderButtons>
        )
    }
}

export default FriendsScreen;

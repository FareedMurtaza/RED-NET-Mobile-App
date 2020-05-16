import React from 'react';
import CustomHeaderButton from '../Components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import FriendsList from '../Components/friendsList';
import { useSelector } from 'react-redux';

const FriendsScreen = props => {
    const friendsList= useSelector(state =>  state.friends.userFriends);

    return <FriendsList friendsData= {friendsList} navigation={props.navigation} />
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

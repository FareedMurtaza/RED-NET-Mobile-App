import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../Components/HeaderButton';

import ProfileInfo from '../Components/profile';

const ProfileScreen = props => {

    const account = useSelector(state => state.profile.userProfile )

    return <ProfileInfo personData={account} navigation={props.navigation} />
}

ProfileScreen.navigationOptions = navData => {
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
export default ProfileScreen;

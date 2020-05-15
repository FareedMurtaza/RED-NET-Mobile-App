import React from 'react';
import CustomHeaderButton from '../Components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ProfileInfo from '../Components/profile';
import { PROFILE } from '../data/dummydata';

const ProfileScreen = props => {

    const account = PROFILE.filter(item => item.id === '1');

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

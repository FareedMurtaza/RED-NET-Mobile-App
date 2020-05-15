import React from 'react';
import CustomHeaderButton from '../Components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Notifications from '../Components/notifications';
import { NOTIFICATION } from '../data/dummydata';

const NotificationScreen = props => {

    const notificationData = NOTIFICATION.filter(item => item.id === '1' || item.id === '2' || item.id === '3' || item.id === '4' ||
        item.id === '5' || item.id === '6' || item.id === '7' || item.id === '8' || item.id === '9')

    return <Notifications notificationData={notificationData} navigation={props.navigation} />
}
NotificationScreen.navigationOptions = navData => {
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

export default NotificationScreen;

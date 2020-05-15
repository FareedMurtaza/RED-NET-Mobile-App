import React from 'react';
import CustomHeaderButton from '../Components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Notifications from '../Components/notifications';
import { useSelector } from 'react-redux';

const NotificationScreen = props => {

    const notificationData = useSelector(state => state.notification.Notifications);

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

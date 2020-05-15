import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import NotificationItem from '../Components/notificationItem'

const Notifications = props => {

    const renderNotificationData = itemData => {
        return <NotificationItem item={itemData.item} />
    }

    return <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.notificationData}
        renderItem={renderNotificationData}
    />
}

export default Notifications;
import React from 'react';
import { View, Text } from 'react-native';
import BloodNotification from './bloodNotification';
import SocietyNotification from './societyNotification';
import ConveyanceNotification from './conveyanceNotification';

const NotificationItem = props => {

    if (props.item.requestType === '1')
        return <BloodNotification item={props.item} />
    else if (props.item.requestType === '2')
        return <ConveyanceNotification item={props.item} />
    else if (props.item.requestType === '3')
        return <SocietyNotification item={props.item} />

}

export default NotificationItem;
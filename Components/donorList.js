import React from 'react';
import { FlatList, StyleSheet } from 'react-native'
import Donor from './donor';

const DonorList = props => {

    const renderDonorList = itemData => {
        return <Donor item={itemData.item} />
    }

    return <FlatList
        data={props.donorsListData}
        renderItem={renderDonorList}
    />
}

export default DonorList;
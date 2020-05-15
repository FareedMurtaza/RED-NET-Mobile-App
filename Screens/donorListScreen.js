import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CustomHeaderButton from '../Components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const DonorsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>
                This is DonorList page.
        </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default DonorsScreen;
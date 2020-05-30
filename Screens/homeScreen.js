import React from 'react';
import { View, StyleSheet } from 'react-native';

import CustomHeaderButton from '../Components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BloodRequestCard from '../Components/bloodRequestCard';
import MapViewComponent from '../Components/MapViewComponent';

const HomeScreen = props => {
    return (
        <View style={styles.screen} >
            <MapViewComponent />
            <View style={styles.container}>
                <BloodRequestCard navigation={props.navigation} />
            </View>
        </View>
    )
}

HomeScreen.navigationOptions = navData => {
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        position: 'absolute',
        width: '100%',
        top: '15%'
    }
})

export default HomeScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, Button } from 'react-native';
import CustomHeaderButton from '../Components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Card from '../Components/card';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';



const HomeScreen = props => {
    const [selectedBloodGroup, setselectedBloodGroup] = useState(" ");
    const [selectedNoofBottles, setselectedNoofBottles] = useState(" ");
    const [selectedRequest, setselectedRequest] = useState(" ");
    const [showFullCard, setshowFullCard] = useState(false)

    const CardView = <View>
        <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderTitle}>Find Blood...??</Text>
        </View>

        <View>
            <View style={styles.rowItem}>
                <Text style={styles.dropdownText}>Select Blood Group:</Text>
                <View style={styles.dowpdownView}>
                    <Picker enabled={showFullCard}
                        selectedValue={selectedBloodGroup}
                        style={styles.dropdownStyle}
                        onValueChange={(itemValue, itemIndex) => setselectedBloodGroup(itemValue)}
                        mode='dropdown'
                    >
                        <Picker.Item label="A+" value="A+" />
                        <Picker.Item label="A-" value="A-" />
                        <Picker.Item label="B+" value="B+" />
                        <Picker.Item label="B-" value="B-" />
                        <Picker.Item label="AB+" value="AB+" />
                        <Picker.Item label="AB-" value="AB-" />
                        <Picker.Item label="O+" value="O-" />
                    </Picker>
                </View>
            </View>

            {showFullCard && <View>
                <View style={styles.rowItem}>
                    <Text style={styles.dropdownText}>No of Bottles:</Text>
                    <View style={styles.dowpdownView}>
                        <Picker
                            selectedValue={selectedNoofBottles}
                            style={styles.dropdownStyle}
                            onValueChange={(itemValue, itemIndex) => setselectedNoofBottles(itemValue)}
                            mode='dropdown'
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.rowItem}>
                    <Text style={styles.dropdownText}>Request to?</Text>
                    <View style={styles.dowpdownView}>
                        <Picker
                            selectedValue={selectedRequest}
                            style={styles.dropdownStyle}
                            onValueChange={(itemValue, itemIndex) => setselectedRequest(itemValue)}
                            mode='dropdown'
                        >
                            <Picker.Item label="Nearby" value="Nearby" />
                            <Picker.Item label="Friends" value="Friends" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.buttonContainer} >
                    <View style={styles.button}><Button title='Cancel' color='red' 
                    onPress={() => setshowFullCard(prevState => !prevState)} /></View>

                    <View style={styles.button}><Button title='Send' color='red' 
                    onPress= {() => props.navigation.navigate('D')} /></View>
                </View>

            </View>}
        </View>
    </View>

    let TouchableComp = TouchableNativeFeedback
    if (showFullCard) {
        TouchableComp = View
    }

    return (
        <View style={styles.screen} >
            <TouchableComp onPress={() => setshowFullCard(prevState => !prevState)}>
                <Card style={{ ...styles.cardContainer, ...{ backgroundColor: '#e64f45' } }}>
                    {CardView}
                </Card>
            </TouchableComp>
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
    cardContainer: {
        width: '100%',
        marginTop: '20%',
        padding: '5%'
    },
    cardHeader: {
        padding: 10,
    },
    cardHeaderTitle: {
        color: 'white',
        fontSize: 35
    },
    rowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    dropdownText: {
        fontSize: 20,
        color: 'white'
    },
    dowpdownView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderColor: 'white',
        borderWidth: 2,
        marginLeft: '10%'

    },
    dropdownStyle: {
        color: 'white',
        width: '100%',
        height: 40,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        width: '40%'


    }
})

export default HomeScreen;
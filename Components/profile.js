import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const ProfileInfo = props => {

    const renderProfileInfo = itemData => {
        return (
            <View style={styles.screen}>
                <View style={styles.topInfo}>
                    <Image source={{ uri: itemData.item.profilePic }} style={styles.image} />
                    <Text style={styles.name}> {itemData.item.name} </Text>
                </View>

                <View style={styles.downInfo}>
                    <View style={styles.rowItemInfoContainer} >
                        <View style={{ ...styles.rowItem, ...styles.alignCenter }}>
                            <Text style={styles.infoItem}>email:</Text>
                            <View style={styles.leftInfo}><Text style={{ fontSize: 18 }}>{itemData.item.email}</Text></View>
                        </View>

                        <View style={styles.alignCenter} >
                            <View style={styles.divider} />
                        </View>
                    </View>

                    <View style={styles.rowItemInfoContainer} >
                        <View style={{ ...styles.rowItem, ...styles.alignCenter }}>
                            <Text style={styles.infoItem}>blood Group:</Text>
                            <View style={styles.leftInfo}><Text style={{ fontSize: 18 }}>{itemData.item.bloodGroup}</Text></View>
                        </View>

                        <View style={styles.alignCenter} >
                            <View style={styles.divider} />
                        </View>
                    </View>

                    <View style={styles.rowItemInfoContainer} >
                        <View style={{ ...styles.rowItem, ...styles.alignCenter }}>
                            <Text style={styles.infoItem}>phone No:</Text>
                            <View style={styles.leftInfo}><Text style={{ fontSize: 18 }}>{itemData.item.phoneNo}</Text></View>
                        </View>

                        <View style={styles.alignCenter} >
                            <View style={styles.divider} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <FlatList
            data={props.personData}
            renderItem={renderProfileInfo}
        />
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    topInfo: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    },
    downInfo: {
        flexDirection: 'column',
        height: '40%',
        minHeight: 260,
        paddingLeft: 10
    },
    infoItem: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    leftInfo: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    alignCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    divider: {
        borderTopWidth: 2,
        width: '100%',
        borderColor: 'red'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    rowItem: {
        flexDirection: 'row',
    },
    rowItemInfoContainer: {
        flexDirection: 'column', 
        marginRight: 10, 
        marginBottom: 20
    }
})


export default ProfileInfo;
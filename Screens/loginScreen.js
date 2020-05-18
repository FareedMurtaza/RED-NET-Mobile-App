import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, CheckBox, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const LoginScreen = props => {
    const [isSelected, setisSelected] = useState(false);

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.screen}
        >
            <View style={styles.imageContainer}>
                <Image source={require('../assets/signInLogo.png')} style={styles.image} resizeMode='contain' />
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <View style={styles.icon}>
                        <MaterialIcons name='account-circle' size={30} color='white' />
                    </View>

                    <TextInput
                        id="phoneno"
                        label='Phone NO'
                        keyboardType='number-pad'
                        placeholder='Enter Phone no'
                        style={styles.input}
                    />
                </View>

                <View style={{ ...styles.inputField, ...{ marginTop: 10 } }}>
                    <View style={styles.icon}>
                        <MaterialIcons name='lock' size={30} color='white' />
                    </View>

                    <TextInput
                        id="password"
                        label='password'
                        keyboardType='default'
                        placeholder='Enter Password'
                        style={styles.input}
                    />
                </View>

                <View style={styles.rememberMe}>
                    <Text style={{ color: 'white' }}>Remember me</Text>

                    <CheckBox
                        value={isSelected}
                        onValueChange={setisSelected}
                        borderColor='white'
                        style={styles.checkbox}
                    />
                </View>

                <View style={styles.button} >
                    <Button title='Sign in' color='#181c1b' />
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 25, color: 'white', textDecorationLine: 'underline' }}>Forget Password?</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: '15%' }}>
                    <Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>No Account? </Text>
                        <Text style={{ fontSize: 22, color: 'white', textDecorationLine: 'underline', color: '#16e0ae' }}>Create one</Text>
                    </Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1d2120',
    },
    text: {
        color: 'white'
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: '70%',
        height: 70,
        marginTop: '20%',
    },
    inputContainer: {
        margin: 30,
    },
    inputField: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 7
    },
    input: {
        flex: 1,
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        color: 'white'
    },
    rememberMe: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 2,
        marginTop: 10
    },
    checkboxborder: {
        borderColor: 'white',
        borderWidth: 1
    },
    button: {
        marginTop: 10,
        borderRadius: 5,
        borderColor: 'white',
        borderWidth: 2
    }
})

export default LoginScreen;
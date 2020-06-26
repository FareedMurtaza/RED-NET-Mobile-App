import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, Button, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';

const LoginScreen = props => {
    const [isSelected, setisSelected] = useState(false);
    const [isUrdu, setisUrdu] = useState(false);

    const SigninButtonHandler = () => {
        props.navigation.navigate('Rednet')
    }

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.screen}
        >
            <View style={styles.imageContainer}>
                <Image source={require('../assets/signInLogo.png')} style={styles.image} resizeMode='contain' />
            </View>

            {isUrdu && <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <TextInput
                        id="phoneno"
                        label='Phone NO'
                        keyboardType='number-pad'
                        placeholder='فون نمبر درج کریں'
                        style={styles.input}
                    />
                    <View style={styles.icon}>
                        <MaterialIcons name='account-circle' size={30} color='white' />
                    </View>
                </View>

                <View style={{ ...styles.inputField, ...{ marginTop: 10 } }}>
                    <TextInput
                        id="password"
                        label='password'
                        keyboardType='default'
                        placeholder='پاس ورڈ درج کریں'
                        secureTextEntry={true}
                        style={{ ...styles.input, ...{ textAlign: 'right' } }}
                    />
                    <View style={styles.icon}>
                        <MaterialIcons name='lock' size={30} color='white' />
                    </View>
                </View>

                <View style={{ ...styles.rememberMe, ...{ justifyContent: 'flex-start' } }}>
                    <Checkbox
                        uncheckedColor='white'
                        status={isSelected === false ? 'unchecked' : 'checked'}
                        onPress={() => setisSelected(prevState => !prevState)}
                    />
                    <Text style={{ color: 'white' }}>مجھے پہچانتے ہو</Text>

                </View>

                <View style={styles.button} >
                    <Button title='لاگ ان کریں' color='#181c1b' onPress={SigninButtonHandler} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 25, color: 'white', textDecorationLine: 'underline' }}>پاسورڈ بھول گے؟</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: '15%' }}>
                    <Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>کوئی اکاؤنٹ نہیں ہے؟ </Text>
                        <Text style={{ fontSize: 22, color: 'white', textDecorationLine: 'underline', color: '#16e0ae' }}
                            onPress={() => props.navigation.navigate('Signup')}
                        >
                            نیا بنائیں
                        </Text>
                    </Text>
                </View>
            </View>
            }
            {!isUrdu && <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <View style={styles.icon}>
                        <MaterialIcons name='account-circle' size={30} color='white' />
                    </View>
                    <TextInput
                        id="phoneno"
                        label='Phone NO'
                        keyboardType='number-pad'
                        placeholder='Enter Phone No'
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
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>

                <View style={styles.rememberMe}>
                    <Text style={{ color: 'white' }}>Remember me</Text>
                    <Checkbox
                        uncheckedColor='white'
                        status={isSelected === false ? 'unchecked' : 'checked'}
                        onPress={() => setisSelected(prevState => !prevState)}
                    />
                </View>

                <View style={styles.button} >
                    <Button title='Log in' color='#181c1b' onPress={SigninButtonHandler} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 25, color: 'white', textDecorationLine: 'underline' }}>Forgot Password</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: '15%' }}>
                    <Text>
                        <Text style={{ fontSize: 22, color: 'white' }}>No Account? </Text>
                        <Text style={{ fontSize: 22, color: 'white', textDecorationLine: 'underline', color: '#16e0ae' }}
                            onPress={() => props.navigation.navigate('Signup')}
                        >
                            Create new
                        </Text>
                    </Text>
                </View>
            </View>
            }
            <View style={styles.languageContainer}>
                <Text style={{ fontSize: 20, color: 'white' }}>Language: </Text>
                <TouchableOpacity style={styles.language} onPress= {() => setisUrdu(false)} >
                    <Text style={{ fontSize: 20, color: 'white', textDecorationLine: 'underline' }}>english</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.language} onPress= {() => setisUrdu(true)} >
                    <Text style={{ fontSize: 20, color: 'white', textDecorationLine: 'underline' }}>اردو</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1d2120'
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
    },
    languageContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between', 
        marginTop: 30
    },
    language: {
        flexDirection: 'row'
    }
})

export default LoginScreen;
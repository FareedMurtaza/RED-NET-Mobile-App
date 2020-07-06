import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import * as userAction from '../Store/Actions/user';

const LoginScreen = props => {
    const [isSelected, setisSelected] = useState(false);
    const [isUrdu, setisUrdu] = useState(false);

    const [phoneNo, setphoneNo] = useState('')
    const [password, setpassword] = useState('')

    const dispatch = useDispatch();

    const [emptyPhone, setemptyPhone] = useState(false);
    const [emptyPassword, setemptyPassword] = useState(false);

    const [validPhoneNo, setvalidPhoneNo] = useState(true);
    const [validPassword, setvalidPassword] = useState(true);

    const user = useSelector(state => state.user.user)

    const SigninButtonHandler = () => {
        let error = false;
        if (phoneNo.length == 0) {
            setemptyPhone(true)
            error = true
        }
        if (password.length == 0) {
            setemptyPassword(true)
            error = true
        }

        if (!error) {
            // dispatch(userAction.login(phoneNo, password))
            if (user.phoneNo !== phoneNo) {
                setvalidPhoneNo(false)
            }
            else if (user.password !== password) {
                setvalidPassword(false)
            }
            else {
                props.navigation.navigate('Rednet')
            }
        }
    }

    const phoneNoHandler = phone => {
        setphoneNo(phone.replace(/[^0-9]/g, ''))
        if (phone.length > 0) {
            setemptyPhone(false)
            setvalidPhoneNo(true)
        }
    }
    const passwordHandler = pass => {
        setpassword(pass)
        if (password.length > 0) {
            setemptyPassword(false)
            setvalidPassword(true)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior='padding'
            style={styles.screen}
        >
            <View style={styles.imageContainer}>
                <Image source={require('../assets/signInLogo.png')} style={styles.image} resizeMode='contain' />
            </View>

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
                        onChangeText={phoneNoHandler}
                        value={phoneNo}
                        style={styles.input}
                    />
                </View>
                {(emptyPhone || !validPhoneNo) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                    <View style={{ marginTop: "1%" }}>
                        <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                    </View>
                    {emptyPhone && <Text style={styles.inputError}>Phone No can not be empty.</Text>}
                    {!validPhoneNo && <Text style={styles.inputError}>Phone number not Found..!!</Text>}
                </View>}

                <View style={{ ...styles.inputField, ...{ marginTop: 10 } }}>
                    <View style={styles.icon}>
                        <MaterialIcons name='lock' size={30} color='white' />
                    </View>
                    <TextInput
                        id="password"
                        label='password'
                        keyboardType='default'
                        onChangeText={passwordHandler}
                        placeholder='Enter Password'
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>
                {(emptyPassword || !validPassword) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                    <View style={{ marginTop: "1%" }}>
                        <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                    </View>
                    {emptyPassword && <Text style={styles.inputError}>Password can not be empty.</Text>}
                    {!validPassword && <Text style={styles.inputError}>Password is not correct.</Text>}
                </View>}

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
            </View>}
            {isUrdu && <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <TextInput
                        id="phoneno"
                        label='Phone NO'
                        keyboardType='number-pad'
                        placeholder='فون نمبر درج کریں'
                        onChangeText={phoneNoHandler}
                        style={styles.input}
                    />
                    <View style={styles.icon}>
                        <MaterialIcons name='account-circle' size={30} color='white' />
                    </View>
                </View>
                {(emptyPhone || !validPhoneNo) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                    <View style={{ marginTop: "1%" }}>
                        <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                    </View>
                    {emptyPhone && <Text style={styles.inputError}>فون نمبر خالی نہیں ہوسکتا۔</Text>}
                    {!validPhoneNo && <Text style={styles.inputError}>فون نمبر نہیں ملا .. !!</Text>}
                </View>}

                <View style={{ ...styles.inputField, ...{ marginTop: 10 } }}>
                    <TextInput
                        id="password"
                        label='password'
                        keyboardType='default'
                        placeholder='پاس ورڈ درج کریں'
                        onChangeText={passwordHandler}
                        secureTextEntry={true}
                        style={{ ...styles.input, ...{ textAlign: 'right' } }}
                    />
                    <View style={styles.icon}>
                        <MaterialIcons name='lock' size={30} color='white' />
                    </View>
                    {(emptyPassword || !validPassword) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                        <View style={{ marginTop: "1%" }}>
                            <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                        </View>

                        {emptyPassword && <Text style={styles.inputError}>.پاس ورڈ خالی نہیں ہوسکتا ہے.</Text>}
                        {!validPassword && <Text style={styles.inputError}>پاس ورڈ درست نہیں ہے۔</Text>}
                    </View>}
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

            {!(emptyPassword || emptyPhone || !validPhoneNo || !validPassword) && <View style={{ marginTop: 20 }}></View>}
            <View style={styles.languageContainer}>
                <Text style={{ fontSize: 20, color: 'white' }}>Language: </Text>
                <TouchableOpacity style={styles.language} onPress={() => setisUrdu(false)} >
                    <Text style={{ fontSize: 20, color: 'white', textDecorationLine: 'underline' }}>english</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.language} onPress={() => setisUrdu(true)} >
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
        marginTop: 10
    },
    language: {
        flexDirection: 'row'
    },
    inputError: {
        marginLeft: "2%",
        fontSize: 15,
        color: '#ff890a'
    }
})

export default LoginScreen;
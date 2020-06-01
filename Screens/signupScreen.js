import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, Button, Picker } from 'react-native';
import { MaterialIcons, Ionicons, Fontisto, FontAwesome5, Foundation } from '@expo/vector-icons';
import { RadioButton, Checkbox } from 'react-native-paper';

const SignupScreen = props => {
    const [passwordVisible1, setpasswordVisible1] = useState(false);
    const [passwordVisible2, setpasswordVisible2] = useState(false);
    const [moreUserDetails, setmoreUserDetails] = useState(false);
    const [selectedBloodGroup, setselectedBloodGroup] = useState("A+");
    const [maleRadioButton, setmaleRadioButton] = useState(false);
    const [femaleRadioButton, setfemaleRadioButton] = useState(false);
    const [bloodDonorRB, setbloodDonorRB] = useState(false);
    const [ConveyanceVolunteerRB, setConveyanceVolunteerRB] = useState(false);

    const password1Handler = () => {
        setpasswordVisible1(prevState => !prevState)
    }
    const password2Handler = () => {
        setpasswordVisible2(prevState => !prevState)
    }
    const maleRadioButtonHandler = () => {
        setmaleRadioButton(prevState => !prevState)
        if (femaleRadioButton) {
            setfemaleRadioButton(false)
        }
    }
    const femaleRadioButtonHandler = () => {
        setfemaleRadioButton(prevState => !prevState)
        if (maleRadioButton) {
            setmaleRadioButton(false)
        }
    }
    const SignupButtonHandler = () => {
        props.navigation.navigate('Rednet')
    }

    return (
        <KeyboardAvoidingView
            style={styles.screen}
        >
            <View style={styles.imageContainer}>
                <Image source={require('../assets/signupLogo.png')} style={styles.image} resizeMode='contain' />
            </View>

            {!moreUserDetails && <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <View style={styles.icon}>
                        <MaterialIcons name='account-circle' size={30} color='white' />
                    </View>

                    <TextInput
                        id="username"
                        label='user name'
                        keyboardType='default'
                        placeholder='Enter User name'
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputField}>
                    <View style={styles.icon}>
                        <MaterialIcons name='call' size={30} color='white' />
                    </View>

                    <TextInput
                        id="phoneno"
                        label='phoneno'
                        keyboardType='number-pad'
                        placeholder='Enter Phone no'
                        style={styles.input}
                    />
                </View>

                <View style={{ ...styles.inputField }}>
                    <View style={styles.icon}>
                        <MaterialIcons name='lock' size={30} color='white' />
                    </View>

                    <TextInput
                        id="password"
                        label='password'
                        keyboardType='default'
                        placeholder='Enter Password'
                        secureTextEntry={passwordVisible1 ? false : true}
                        style={styles.input}
                    />
                    <View style={{ ...styles.icon }}>
                        <Ionicons
                            name={passwordVisible1 ? 'ios-eye' : 'ios-eye-off'}
                            size={25}
                            color='white'
                            onPress={password1Handler}
                        />
                    </View>
                </View>

                <View style={{ ...styles.inputField }}>
                    <View style={styles.icon}>
                        <MaterialIcons name='lock' size={30} color='white' />
                    </View>

                    <TextInput
                        id="password"
                        label='password'
                        keyboardType='default'
                        placeholder='Enter Confirm Password'
                        secureTextEntry={passwordVisible2 ? false : true}
                        style={styles.input}
                    />
                    <View style={{ ...styles.icon }}>
                        <Ionicons
                            name={passwordVisible2 ? 'ios-eye' : 'ios-eye-off'}
                            size={25}
                            color='white'
                            onPress={password2Handler}
                        />
                    </View>
                </View>

                <View style={{ ...styles.button, ...{ marginTop: 20 } }} >
                    <Button title='Next' color='#181c1b' onPress={() => setmoreUserDetails(prevState => !prevState)} />
                </View>

                <View style={{ alignItems: 'center', marginTop: '15%' }}>
                    <Text style={{ fontSize: 22, color: 'white' }}>Already have an Account? </Text>
                    <Text style={{ fontSize: 22, color: 'white', textDecorationLine: 'underline', color: '#16e0ae' }}
                        onPress={() => props.navigation.navigate('Login')}
                    >
                        Sign in
                    </Text>
                </View>
            </View>
            }

            {moreUserDetails && <View style={styles.inputContainer}>
                <View style={styles.inputField}>
                    <View style={styles.icon}>
                        <MaterialIcons name='email' size={30} color='white' />
                    </View>

                    <TextInput
                        id="email"
                        label='email'
                        keyboardType='default'
                        placeholder='Enter Email'
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputField}>
                    <View style={styles.icon}>
                        <Fontisto name='blood' size={30} color='white' />
                    </View>

                    <View style={{ ...styles.input, ...{ flex: 1, marginTop: 10, maxWidth: '45%' } }}>
                        <Text style={{ color: 'white' }}>Select Blood Group</Text>
                    </View>

                    <View style={styles.dowpdownView}>
                        <Picker
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

                <View style={styles.inputField}>
                    <View style={styles.icon}>
                        {!maleRadioButton && !femaleRadioButton && <Foundation name={'male-female'} size={30} color='white' />}
                        {(maleRadioButton || femaleRadioButton) && <Foundation name={maleRadioButton ? 'male' : 'female'} size={30} color='white' />}
                    </View>

                    <View style={{ ...styles.input, ...{ flexDirection: 'row', flex: 1, alignItems: 'center' } }}>
                        <Text style={{ color: 'white' }}>Gender:</Text>

                        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white' }}>Male</Text>
                                <RadioButton
                                    value="maleRadioButton"
                                    uncheckedColor='white'
                                    status={maleRadioButton === false ? 'unchecked' : 'checked'}
                                    onPress={maleRadioButtonHandler}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white' }}>Female</Text>
                                <RadioButton
                                    value="femaleRadioButton"
                                    uncheckedColor='white'
                                    status={femaleRadioButton === false ? 'unchecked' : 'checked'}
                                    onPress={femaleRadioButtonHandler}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.inputField}>
                    <View style={styles.icon}>
                        <FontAwesome5 name='registered' size={30} color='white' />
                    </View>

                    <View style={{ ...styles.input, ...{ flexDirection: 'row', flex: 1, alignItems: 'center' } }}>
                        <Text style={{ color: 'white' }}>Registered as:</Text>

                        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column', marginLeft: 20 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white', width: '70%' }}>Blood Donor</Text>
                                <Checkbox
                                    uncheckedColor='white'
                                    status={bloodDonorRB === false ? 'unchecked' : 'checked' }
                                    onPress={() => setbloodDonorRB(prevState => !prevState)}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'white', width: '70%' }}>Conveyance Volunteer</Text>
                                <Checkbox
                                    uncheckedColor='white'
                                    status={ConveyanceVolunteerRB === false ? 'unchecked' : 'checked' }
                                    onPress={() => setConveyanceVolunteerRB(prevState => !prevState)}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ ...styles.button, ...{ marginTop: 20 } }} >
                    <Button title='Sign up' color='#181c1b' onPress={SignupButtonHandler} />
                </View>

                <View style={{ ...styles.button, ...{ marginTop: 20 } }} >
                    <Button title='Back' color='#181c1b' onPress={() => setmoreUserDetails(prevState => !prevState)} />
                </View>
            </View>
            }
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
        height: 80,
        marginTop: '15%'
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
    dropdownStyle: {
        color: 'white',
        width: '100%'
    },
    dowpdownView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        minWidth: '32%',
        maxWidth: '32%',
        minHeight: 40,
        maxHeight: 40


        , borderColor: 'white',
        borderWidth: 1
    },
})

export default SignupScreen;
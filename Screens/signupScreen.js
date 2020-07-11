import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, KeyboardAvoidingView, Button, Picker } from 'react-native';
import { MaterialIcons, Ionicons, Fontisto, FontAwesome5, Foundation } from '@expo/vector-icons';
import { RadioButton, Checkbox } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const SignupScreen = props => {
    const [passwordVisible1, setpasswordVisible1] = useState(false);
    const [passwordVisible2, setpasswordVisible2] = useState(false);
    const [moreUserDetails, setmoreUserDetails] = useState(false);
    const [selectedBloodGroup, setselectedBloodGroup] = useState("A+");
    const [maleRadioButton, setmaleRadioButton] = useState(false);
    const [femaleRadioButton, setfemaleRadioButton] = useState(false);
    const [bloodDonorRB, setbloodDonorRB] = useState(false);
    const [ConveyanceVolunteerRB, setConveyanceVolunteerRB] = useState(false);
    const [genderSelected, setgenderSelected] = useState(true);
    
    const [userName, setuserName] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [password1, setpassword1] = useState('');
    const [password2, setpassword2] = useState('');
    const [emptyName, setemptyName] = useState(false);
    const [emptyphoneNo, setemptyphoneNo] = useState(false);
    const [emptypassword1, setemptypassword1] = useState(false);
    const [emptypassword2, setemptypassword2] = useState(false);
    const [passwordMatch, setpasswordMatch] = useState(true);

    const [validPhoneno, setvalidPhoneno] = useState(true);

    const password1SecurityHandler = () => {
        setpasswordVisible1(prevState => !prevState)
    }
    const password2SecurityHandler = () => {
        setpasswordVisible2(prevState => !prevState)
    }
    const maleRadioButtonHandler = () => {
        setmaleRadioButton(prevState => !prevState)
        if (femaleRadioButton) {
            setfemaleRadioButton(false)
        }
        setgenderSelected(true);
    }
    const femaleRadioButtonHandler = () => {
        setfemaleRadioButton(prevState => !prevState)
        if (maleRadioButton) {
            setmaleRadioButton(false)
        }
        setgenderSelected(true);
    }
    const SignupButtonHandler = () => {
        let error = false
        if(!maleRadioButton && !femaleRadioButton){
            error = true;
            setgenderSelected(false);
        }
        if (!error) {
            console.log("User Name: " + userName)
            console.log("Phone No: " + phoneNo)
            console.log("Password: " + password1)
            console.log("Male: " + maleRadioButton)
            console.log("Female: " + femaleRadioButton)
            console.log("Registered as blood donor: " + bloodDonorRB)
            console.log("Registered as conveyance provider: " + ConveyanceVolunteerRB)


            props.navigation.navigate('Rednet')
        }
    }

    const nextButtonHandler = () => {
        let error = false;
        if (userName.length <= 2) {
            setemptyName(true)
            error = true
        }
        if (phoneNo.length <= 0) {
            setemptyphoneNo(true)
            error = true
        }
        else if (phoneNo.length <= 10) {
            setvalidPhoneno(false)
            error = true
        }
        if (password1.length <= 4) {
            setemptypassword1(true)
            error = true
        }
        if (password2.length <= 4) {
            setemptypassword2(true)
            error = true
        }
        if (!error) {
            if (password1 != password2) {
                setpasswordMatch(false)
            }
            else {
                setmoreUserDetails(prevState => !prevState)
            }
        }

    }

    const usernameHandler = name => {
        setuserName(name)
        if (userName.length >= 2) {
            setemptyName(false)
        }
        else {
            setemptyName(true)
        }
    }
    const phonenoHandler = phoneno => {
        setphoneNo(phoneno.replace(/[^0-9]/g, ''))
        if (phoneno.length > 0) {
            setemptyphoneNo(false)
            setvalidPhoneno(true)
        }
        else {
            setemptyphoneNo(true)
        }
    }
    const password1Handler = password1 => {
        setpassword1(password1)
        if (password1.length >= 4) {
            setemptypassword1(false)
            setpasswordMatch(true)
        }
        else {
            setemptypassword1(true)
        }
    }
    const password2Handler = password2 => {
        setpassword2(password2)
        if (password2.length >= 4) {
            setemptypassword2(false)
            setpasswordMatch(true)
        }
        else {
            setemptypassword2(true)
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.screen}
        >
            <ScrollView style={{ flex: 1 }}>
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
                            onChangeText={usernameHandler}
                            value={userName}
                            style={styles.input}
                        />
                    </View>
                    {(emptyName) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                        <View style={{ marginTop: "1%" }}>
                            <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                        </View>
                        {emptyName && <Text style={styles.inputError}>Minimum length should be 2.</Text>}
                    </View>}


                    <View style={styles.inputField}>
                        <View style={styles.icon}>
                            <MaterialIcons name='call' size={30} color='white' />
                        </View>

                        <TextInput
                            id="phoneno"
                            label='phoneno'
                            keyboardType='number-pad'
                            placeholder='Enter Phone no'
                            onChangeText={phonenoHandler}
                            value={phoneNo}
                            style={styles.input}
                        />
                    </View>
                    {(emptyphoneNo || !validPhoneno) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                        <View style={{ marginTop: "1%" }}>
                            <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                        </View>
                        {emptyphoneNo && <Text style={styles.inputError}>Phone number can not be empty.</Text>}
                        {!validPhoneno && <Text style={styles.inputError}>Enter valid Phone number.</Text>}
                    </View>}


                    <View style={{ ...styles.inputField }}>
                        <View style={styles.icon}>
                            <MaterialIcons name='lock' size={30} color='white' />
                        </View>

                        <TextInput
                            id="password"
                            label='password'
                            keyboardType='default'
                            placeholder='Enter Password'
                            onChangeText={password1Handler}
                            value={password1}
                            secureTextEntry={passwordVisible1 ? false : true}
                            style={styles.input}
                        />
                        <View style={{ ...styles.icon }}>
                            <Ionicons
                                name={passwordVisible1 ? 'ios-eye' : 'ios-eye-off'}
                                size={25}
                                color='white'
                                onPress={password1SecurityHandler}
                            />
                        </View>
                    </View>
                    {(emptypassword1) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                        <View style={{ marginTop: "1%" }}>
                            <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                        </View>
                        {emptypassword1 && <Text style={styles.inputError}>Minimum length should be 5.</Text>}
                    </View>}


                    <View style={{ ...styles.inputField }}>
                        <View style={styles.icon}>
                            <MaterialIcons name='lock' size={30} color='white' />
                        </View>

                        <TextInput
                            id="password"
                            label='password'
                            keyboardType='default'
                            placeholder='Enter Confirm Password'
                            onChangeText={password2Handler}
                            value={password2}
                            secureTextEntry={passwordVisible2 ? false : true}
                            style={styles.input}
                        />
                        <View style={{ ...styles.icon }}>
                            <Ionicons
                                name={passwordVisible2 ? 'ios-eye' : 'ios-eye-off'}
                                size={25}
                                color='white'
                                onPress={password2SecurityHandler}
                            />
                        </View>
                    </View>
                    {(emptypassword2 || !passwordMatch) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                        <View style={{ marginTop: "1%" }}>
                            <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                        </View>
                        {emptypassword2 && <Text style={styles.inputError}>Minimum length should be 5.</Text>}
                        {!passwordMatch && <Text style={styles.inputError}>Passwords didn`t match.</Text>}
                    </View>}


                    <View style={{ ...styles.button, ...{ marginTop: 20 } }} >
                        <Button title='Next' color='#181c1b' onPress={nextButtonHandler} />
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
                            placeholder='Enter Email (Optional)'
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
                    {(!genderSelected) && <View style={{ flexDirection: 'row', marginLeft: "16%" }}>
                        <View style={{ marginTop: "1%" }}>
                            <MaterialIcons name='error-outline' size={17} color='#ff890a' />
                        </View>
                        <Text style={styles.inputError}>Please select gender.</Text>
                    </View>}

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
                                        status={bloodDonorRB === false ? 'unchecked' : 'checked'}
                                        onPress={() => setbloodDonorRB(prevState => !prevState)}
                                    />
                                </View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', width: '70%' }}>Conveyance Volunteer</Text>
                                    <Checkbox
                                        uncheckedColor='white'
                                        status={ConveyanceVolunteerRB === false ? 'unchecked' : 'checked'}
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
            </ScrollView>
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
    inputError: {
        marginLeft: "2%",
        fontSize: 15,
        color: '#ff890a'
    }
})

export default SignupScreen;

import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from "react-native";

import { Input } from "react-native-elements";
import { Checkbox } from "react-native-paper";
import { Login } from "../Store/Actions/login";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
      isUrdu: false,
      phoneNo: "",
      password: "",
      emptyPhone: false,
      emptyPassword: false,
      validPhoneNo: true,
      validPassword: true,
    };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}

  SigninButtonHandler = () => {
    let error = false;
    if (this.state.phoneNo.length === 0) {
      this.setState({ emptyPhone: true });
      error = true;
    }
    if (this.state.password.length === 0) {
      this.setState({ emptyPassword: true });
      error = true;
    }
    if (!error) {
      this.props.Login({
        PhoneNumber: this.state.phoneNo,
        Password: this.state.password,
        Role: 1,
      });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/signInLogo.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/*{!this.state.isUrdu && */}
        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Input
              name={"PhoneNumber"}
              label="Phone Number"
              placeholder="enter your phone number"
              keyboardType="phone-pad"
              inputStyle={styles.input}
              leftIcon={{
                type: "material",
                name: "account-circle",
                color: "white",
              }}
              inputContainerStyle={styles.inputField}
              onChangeText={(text) => this.setState({ phoneNo: text })}
            />
          </View>
          {/*{(this.state.emptyPhone || !this.state.validPhoneNo) && <View style={{flexDirection: 'row', marginLeft: "16%"}}>*/}
          {/*    <View style={{marginTop: "1%"}}>*/}
          {/*        <MaterialIcons name='error-outline' size={17} color='#ff890a'/>*/}
          {/*    </View>*/}
          {/*    /!*{this.state.emptyPhone && <Text style={styles.inputError}>Phone No can not be empty.</Text>}*!/*/}
          {/*    /!*{!this.state.validPhoneNo && <Text style={styles.inputError}>Phone number not Found..!!</Text>}*!/*/}
          {/*</View>}*/}

          <View style={{ ...styles.inputField }}>
            <Input
              name={"Password"}
              label="Password"
              placeholder="Enter your password"
              keyboardType="default"
              inputStyle={styles.input}
              leftIcon={{ type: "material", name: "lock", color: "white" }}
              secureTextEntry={true}
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          {/*{(this.state.emptyPassword || !this.state.validPassword) && <View style={{flexDirection: 'row', marginLeft: "16%"}}>*/}
          {/*    <View style={{marginTop: "1%"}}>*/}
          {/*        <MaterialIcons name='error-outline' size={17} color='#ff890a'/>*/}
          {/*    </View>*/}
          {/*    {this.state.emptyPassword && <Text style={styles.inputError}>Password can not be empty.</Text>}*/}
          {/*    {!this.state.validPassword && <Text style={styles.inputError}>Password is not correct.</Text>}*/}
          {/*</View>}*/}

          <View style={styles.rememberMe}>
            <Text style={{ color: "white" }}>Remember me</Text>
            <Checkbox
              uncheckedColor="white"
              status={this.state.isSelected === false ? "unchecked" : "checked"}
              onPress={() =>
                this.setState({ isSelected: !this.state.isSelected })
              }
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Log in"
              color="#181c1b"
              onPress={this.SigninButtonHandler.bind(this)}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text
              style={{
                fontSize: 25,
                color: "white",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password
            </Text>
          </View>
          <View style={{ alignItems: "center", marginTop: "15%" }}>
            <Text>
              <Text style={{ fontSize: 22, color: "white" }}>No Account? </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  textDecorationLine: "underline",
                }}
                onPress={() => props.navigation.navigate("Signup")}
              >
                Create new
              </Text>
            </Text>
          </View>
        </View>
        {/*}*/}
        {/*{this.state.isUrdu && <View style={styles.inputContainer}>*/}
        {/*    <View style={styles.inputField}>*/}
        {/*        <TextInput*/}
        {/*            id="phoneno"*/}
        {/*            label='Phone NO'*/}
        {/*            keyboardType='number-pad'*/}
        {/*            placeholder='فون نمبر درج کریں'*/}
        {/*            onChangeText={this.phoneNoHandler}*/}
        {/*            style={styles.input}*/}
        {/*        />*/}
        {/*        <View style={styles.icon}>*/}
        {/*            <MaterialIcons name='account-circle' size={30} color='white'/>*/}
        {/*        </View>*/}
        {/*    </View>*/}
        {/*    {(this.state.emptyPhone || !this.state.validPhoneNo) && <View style={{flexDirection: 'row', marginLeft: "16%"}}>*/}
        {/*        <View style={{marginTop: "1%"}}>*/}
        {/*            <MaterialIcons name='error-outline' size={17} color='#ff890a'/>*/}
        {/*        </View>*/}
        {/*        {this.state.emptyPhone && <Text style={styles.inputError}>فون نمبر خالی نہیں ہوسکتا۔</Text>}*/}
        {/*        {!this.state.validPhoneNo && <Text style={styles.inputError}>فون نمبر نہیں ملا .. !!</Text>}*/}
        {/*    </View>}*/}

        {/*    <View style={{...styles.inputField, ...{marginTop: 10}}}>*/}
        {/*        <TextInput*/}
        {/*            id="password"*/}
        {/*            label='password'*/}
        {/*            keyboardType='default'*/}
        {/*            placeholder='پاس ورڈ درج کریں'*/}
        {/*            onChangeText={this.passwordHandler}*/}
        {/*            secureTextEntry={true}*/}
        {/*            style={{...styles.input, ...{textAlign: 'right'}}}*/}
        {/*        />*/}
        {/*        <View style={styles.icon}>*/}
        {/*            <MaterialIcons name='lock' size={30} color='white'/>*/}
        {/*        </View>*/}
        {/*        {(this.state.emptyPassword || !this.state.validPassword) && <View style={{flexDirection: 'row', marginLeft: "16%"}}>*/}
        {/*            <View style={{marginTop: "1%"}}>*/}
        {/*                <MaterialIcons name='error-outline' size={17} color='#ff890a'/>*/}
        {/*            </View>*/}

        {/*            {this.state.emptyPassword && <Text style={styles.inputError}>.پاس ورڈ خالی نہیں ہوسکتا ہے.</Text>}*/}
        {/*            {!this.state.validPassword && <Text style={styles.inputError}>پاس ورڈ درست نہیں ہے۔</Text>}*/}
        {/*        </View>}*/}
        {/*    </View>*/}

        {/*    <View style={{...styles.rememberMe, ...{justifyContent: 'flex-start'}}}>*/}
        {/*        <Checkbox*/}
        {/*            uncheckedColor='white'*/}
        {/*            status={this.state.isSelected === false ? 'unchecked' : 'checked'}*/}
        {/*            onPress={() => this.setState({isSelected: !this.state.isSelected})}*/}
        {/*        />*/}
        {/*        <Text style={{color: 'white'}}>مجھے پہچانتے ہو</Text>*/}

        {/*    </View>*/}

        {/*    <View style={styles.button}>*/}
        {/*        <Button title='لاگ ان کریں' color='#181c1b' onPress={this.SigninButtonHandler.bind(this)}/>*/}
        {/*    </View>*/}
        {/*    <View style={{alignItems: 'center', marginTop: 10}}>*/}
        {/*        <Text style={{fontSize: 25, color: 'white', textDecorationLine: 'underline'}}>پاسورڈ بھول*/}
        {/*            گے؟</Text>*/}
        {/*    </View>*/}
        {/*    <View style={{alignItems: 'center', marginTop: '15%'}}>*/}
        {/*        <Text>*/}
        {/*            <Text style={{fontSize: 22, color: 'white'}}>کوئی اکاؤنٹ نہیں ہے؟ </Text>*/}
        {/*            <Text style={{*/}
        {/*                fontSize: 22,*/}
        {/*                color: 'white',*/}
        {/*                textDecorationLine: 'underline'*/}
        {/*            }}*/}
        {/*                  onPress={() => props.navigation.navigate('Signup')}*/}
        {/*            >*/}
        {/*                نیا بنائیں*/}
        {/*            </Text>*/}
        {/*        </Text>*/}
        {/*    </View>*/}
        {/*</View>*/}
        {/*}*/}

        {!(
          this.state.emptyPassword ||
          this.state.emptyPhone ||
          !this.state.validPhoneNo ||
          !this.state.validPassword
        ) && <View style={{ marginTop: 20 }} />}
        <View style={styles.languageContainer}>
          <Text style={{ fontSize: 20, color: "white" }}>Language: </Text>
          <TouchableOpacity
            style={styles.language}
            onPress={() => this.setState({ isUrdu: false })}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textDecorationLine: "underline",
              }}
            >
              english
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.language}
            onPress={() => this.setState({ isUrdu: true })}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                textDecorationLine: "underline",
              }}
            >
              اردو
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1d2120",
  },
  text: {
    color: "white",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: 70,
    marginTop: "20%",
  },
  inputContainer: {
    margin: 30,
  },
  inputField: {
    color: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "white",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 7
  },
  input: {
    flex: 1,
    paddingHorizontal: 2,
    paddingVertical: 5,
    // borderBottomColor: '#ccc',
    // borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    color: "white",
  },
  rememberMe: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginRight: 2,
    marginTop: 10,
  },
  checkboxborder: {
    borderColor: "white",
    borderWidth: 1,
  },
  button: {
    marginTop: 10,
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  languageContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    marginTop: 10,
  },
  language: {
    flexDirection: "row",
  },
  inputError: {
    marginLeft: "2%",
    fontSize: 15,
    color: "#ff890a",
  },
});

function mapStateToProps(state) {
  return { isLogin: state.login.isLogin, data: state.login.data };
}

export default connect(mapStateToProps, { Login })(LoginScreen);

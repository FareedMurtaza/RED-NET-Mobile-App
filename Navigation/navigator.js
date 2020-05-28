import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../Screens/homeScreen';
import FriendsScreen from '../Screens/friendsScreen';
import NotificationScreen from '../Screens/notificationScreen';
import ProfileScreen from '../Screens/profileScreen';
import DonorsScreen from '../Screens/donorListScreen';
import CustomDrawerComponent from '../Components/customDrawerComponent';

import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../Screens/loginScreen';
import SignupScreen from '../Screens/signupScreen';

const navOptions = {
    headerStyle: {
        backgroundColor: "#e82a23"
    },
    headerTintColor: 'white'
}

const HomeNavigator = createStackNavigator({
    H: { screen: HomeScreen, navigationOptions: { headerTitle: 'RED NET' } },
    D: { screen: DonorsScreen, navigationOptions: { headerTitle: 'Donors List' } }
},
    { defaultNavigationOptions: navOptions }
);
const FriendsNavigator = createStackNavigator({ F: { screen: FriendsScreen, navigationOptions: { headerTitle: 'Friends' } } },
    { defaultNavigationOptions: navOptions }
);
const NotificationNavigator = createStackNavigator({ N: { screen: NotificationScreen, navigationOptions: { headerTitle: 'Notifications' } } },
    { defaultNavigationOptions: navOptions }
);
const ProfileNavigator = createStackNavigator({ P: { screen: ProfileScreen, navigationOptions: { headerTitle: 'Profile' } } },
    { defaultNavigationOptions: navOptions }
);


const botomTabNavBar = {
    Home: {
        screen: HomeNavigator, navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return <Ionicons name="md-home" size={20} color={tabinfo.tintColor} />
            },
            tabBarColor: '#e82a23',
        }
    },
    Friends: {
        screen: FriendsNavigator, navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return <Ionicons name="ios-people" size={20} color={tabinfo.tintColor} />
            },
            tabBarColor: '#e82a23',
        }
    },
    Notification: {
        screen: NotificationNavigator, navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return <Ionicons name="ios-notifications" size={20} color={tabinfo.tintColor} />
            },
            tabBarColor: '#e82a23',
        }
    },
    Profile: {
        screen: ProfileNavigator, navigationOptions: {
            tabBarIcon: (tabinfo) => {
                return <Ionicons name="ios-person" size={20} color={tabinfo.tintColor} />
            },
            tabBarColor: '#e82a23',
        }
    }
}

const Botomtab = createMaterialBottomTabNavigator(botomTabNavBar, {
    shifting: true,
    tabBarOptions: {
        activeBackgroundColor: '#e82a23',
        activeTintColor: 'white'
    }
}
);

const MainDrawer = createDrawerNavigator({
    Home: Botomtab,
}, {
    contentComponent: CustomDrawerComponent
})

const AuthNavigator = createStackNavigator({
    Login: LoginScreen, 
    Signup: SignupScreen
},
    {
        defaultNavigationOptions: {
            headerShown: false
        }
    }
)

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Rednet: MainDrawer
})


export default createAppContainer(MainNavigator);
import React from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,

  } from 'react-native';

  import {
    createStackNavigator, 
    createAppContainer, 
    createBottomTabNavigator, 
    createSwitchNavigator,
    createDrawerNavigator,

    
    } from 'react-navigation';

  import { Ionicons } from '@expo/vector-icons'; // 6.2.2
  import MapView from 'react-native-maps';

  import Home from './Home';
  import Profile from './Profile';
  import Favorites from './Favorites';
  import Tutors from './Tutors';


  class CreateAcc extends React.Component{

    constructor(props) {
      super(props)
      this.state = {
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        Year: '',
        Major: '',
      }
    }

    render(){
      return(
        <KeyboardAvoidingView 
          behavior="padding" 
          style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          
          <View style = {styles.rectangle1}>
            <Text style = {styles.signUp}>Sign Up</Text>
          </View>

          <TextInput 
            style = {styles.textInput}
            placeholder = "First Name"
            onChangeText = {FirstName => this.setState({FirstName})}
            underlineColorAndroid = "transparent"
           />

           <TextInput 
            style = {styles.textInput}
            placeholder = "Last Name"
            onChangeText = {LastName => this.setState({LastName})}
            underlineColorAndroid = "transparent"
           />

           <TextInput 
            style = {styles.textInput}
            placeholder = "Email"
            onChangeText = {Email => this.setState({Email})}
            underlineColorAndroid = "transparent"
            keyboardType= "email-address"
            autoCapitalize= "none"
            autoCorrect= {false}
           />

           <TextInput 
            style = {styles.textInput}
            placeholder = "Password"
            onChangeText = {Password => this.setState({Password})}
            underlineColorAndroid = "transparent"
            secureTextEntry
            autoCapitalize= "none"
            autoCorrect= {false}
           />

           <TextInput 
            style = {styles.textInput}
            placeholder = "Year"
            onChangeText = {Year => this.setState({Year})}
            underlineColorAndroid = "transparent"
           />

           <TextInput 
            style = {styles.textInput}
            placeholder = "Major"
            onChangeText = {Major => this.setState({Major})}
            underlineColorAndroid = "transparent"
           />


           <View style = {styles.continueButton}>
            <Button
              onPress={() => this.props.navigation.navigate('Dashboard')} 
              title = "Continue"
              color = "#ffffff"
              
            />
           </View>

        </KeyboardAvoidingView>
      );
    }

  }


const DashboardTabNavigator = createBottomTabNavigator({
  Home: {screen: Home,
  navigationOptions:{
    tabBarIcon: ({tintColor}) => (
      <Ionicons name="ios-home" color={tintColor} size={25} />
    )
  }},

  Tutors: {screen: Tutors,
  navigationOptions:{
    tabBarIcon: ({tintColor}) => (
      <Ionicons name= "ios-school" color={tintColor} size={25} />
    )
  }},

  Favorites: {screen: Favorites,
  navigationOptions:{
    tabBarIcon: ({tintColor}) => (
      <Ionicons name= "ios-heart" color={tintColor} size={25} />
    )
  }},

  Profile: {screen: Profile,
  navigationOptions:{
    tabBarIcon: ({tintColor}) => (
      <Ionicons name= "ios-person-add" color={tintColor} size={25} />
    )
  }},
},{
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    };
  },
  tabBarOptions: {
    activeTintColor: '#e1665c',
    inactiveTintColor: 'gray',
  },
});

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});


const AppSwitchNavigator = createSwitchNavigator({
  CreateAccount: {screen: CreateAcc},
  Dashboard: {screen: DashboardStackNavigator}
});


export default createAppContainer(AppSwitchNavigator);



  const styles = StyleSheet.create({
    rectangle1: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '10%',
      borderColor: '#707070',
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: '#e1665c',
      justifyContent: 'center',
      
    },

    signUp: {
      position: 'absolute',
      color: '#ffffff',
      fontFamily: 'Book Antiqua',
      fontSize: 25,
      fontWeight: 'bold',
      paddingHorizontal: '5%',
    },

    textInput: {
      width: '90%', 
      borderBottomWidth: 2, 
      borderBottomColor: 'gray', 
      fontFamily: 'SF Pro Text',
      fontSize: 20,
      padding: '2%'
    },

    continueButton:{
      width: '50%', 
      justifyContent: 'flex-end', 
      borderRadius: 50, 
      margin: 30,
      backgroundColor: '#e1665c',
      fontWeight: 'bold',
    }


  });

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

  import TutorsProfile from './TutorsProfile';

  class Tutors extends React.Component{
    render(){
      const {navigate} = this.props.navigation;
      return(
        <View style = {{flex: 1}}>
          <TouchableOpacity style = {styles.block} onPress={ ()=> navigate('TutorsProfile')}>
            <Image source={require('../img/jake.JPG')}
                style={{width: '20%', height: '80%',}} />
            
            <Text style= {{fontWeight: 'bold', color: 'white'}}> Jake Imyak </Text>
            <Text > MTWThFSatSun 6-10am </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.block} onPress={ ()=> navigate('TutorsProfile')}>
            <Image source={require('../img/jake.JPG')}
                style={{width: '20%', height: '80%',}} />
            
            <Text style= {{fontWeight: 'bold', color: 'white'}}> Juhee Park </Text>
            <Text > MTWThF 2-4pm </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style = {styles.block} onPress={ ()=> navigate('TutorsProfile')}>
            <Image source={require('../img/me.jpg')}
                style={{width: '20%', height: '80%',}} />
            
            <Text style= {{fontWeight: 'bold', color: 'white'}}> Mayen McClain </Text>
            <Text > MTWThFSatSun 4-7pm </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.block} onPress={ ()=> navigate('TutorsProfile')}>
            <Image source={require('../img/jake.JPG')}
                style={{width: '20%', height: '80%',}} />
            
            <Text style= {{fontWeight: 'bold', color: 'white'}}> Isaac Norman </Text>
            <Text > MTWThFSatSun 12-4am </Text>
          </TouchableOpacity>
        </View>
      )
    }
    
  }

  const AppSwitchNavigator = createSwitchNavigator({
  Tutors: {screen: Tutors},
  TutorsProfile: {screen: TutorsProfile}
});


export default createAppContainer(AppSwitchNavigator);

  const styles = StyleSheet.create({
    block:{
      width: '100%',
      height: '20%',
      alignItems: 'center',
      backgroundColor: '#e1665c',
      flexDirection: 'row',
      justifyContent: 'space-evenly',

    }

  });
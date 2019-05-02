import React from 'react';
import { AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  Dimensions, SafeAreaView

  } from 'react-native';

  import {
    createStackNavigator, 
    createAppContainer, 
    createBottomTabNavigator, 
    createSwitchNavigator,
    createDrawerNavigator,
    
  } from 'react-navigation';

  export default class Tutors extends React.Component{
    render(){
      return(
        <SafeAreaView style = {{flex:1}}>
          <ScrollView
            style = {{flex:1}}
            > 
          
            
            <Image source={require('../img/jake.JPG')}
                style={{width: '100%', height: '60%'}} />

            <View style = 
            {{flex:1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Image source={require('../img/five.PNG')}
                  style={{width: '20%', height: '0%'}} />
                <Text style = {{color: '#00bfff',}}> *Online </Text>
            </View>

            <Image source={require('../img/five.PNG')}
                style={{width: '65%', height: '10%'}} />
            
            <View style = {{flex: 1, paddingHorizontal: '5%',}} >

              
              <Text style = {styles.infoHeading}>Name</Text>
                <View style = {styles.infoBlocks}>
                  <Text>Jake Imyak </Text>
                </View>

              <Text style = {styles.infoHeading}>Email</Text>
                <View style = {styles.infoBlocks}>
                  <Text>imyak.1@osu.edu </Text>
                </View>

              <Text style = {styles.infoHeading}>Major</Text>
                <View style = {styles.infoBlocks}>
                  <Text>Computer Science Engineering </Text>
                </View>

              <Text style = {styles.infoHeading}>Personal Bio Statement</Text>
                <View style= {styles.bioBlock}>
                  <Text>Hi! I'm a CS Major. I enjoy running and spending time with friends! Contact me! 
                  </Text>
                </View>

              <View style = {styles.tutorButton}>
                <Button
                  onPress={() => Alert.alert('Tutor Requested!')} 
                  title = "- Request Tutor -"
                  color = "#ffffff"
                  
                />
              </View>
              
              

            </View>


            
          </ScrollView>
          </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({

    infoHeading:{
      fontFamily: 'Times New Roman',
      fontWeight: 'bold',
      fontSize: 18,
      paddingTop: '5%',
    },

    infoBlocks:{
      paddingHorizontal: '10%', 
      borderRadius: 10, 
      backgroundColor: '#f0f8ff', 
      height: '10%',
      justifyContent: 'center',

    },

    bioBlock: {
      paddingHorizontal: '5%', 
      borderRadius: 10, 
      borderWidth: 1,
      borderColor: '#f0f8ff',
      height: '20%',
      justifyContent: 'flex-start',

    },

    tutorButton:{
      width: '80%', 
      alignItems: 'center',
      borderRadius: 50, 
      margin: 5,
      backgroundColor: '#e1665c',
      fontWeight: 'bold',
    }
  });

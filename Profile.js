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

  
  const {height} = Dimensions.get('window');

  class Profile extends React.Component{
    state = {
      screenHeight: 0,
    };
    
    onContentSizeChange = (contentWidth, contentHeight) => {
      this.setState({ screenHeight: contentHeight});
    };
    
    render(){
      const scrollEnabled = this.state.screenHeight < height;
      return(

        <SafeAreaView style = {{flex:1}}>
          <ScrollView
            style = {{flex:1}}
            scrollEnabled = {scrollEnabled}
            onContentSizeChange= {this.onContentSizeChange}
            > 
          
            
            <Image source={require('../img/me.jpg')}
                style={{width: '100%', height: '45%'}} />

            <View style = {{flex: 1, paddingHorizontal: '5%',}} >
              <TouchableOpacity style = 
                {{flex:1, flexDirection: 'row', justifyContent: 'center', paddingTop: '2%'}}>
                <Text style = {{color: 'white', fontWeight: 'bold', padding: '2%', backgroundColor: 'gray'}}> Settings </Text> 
              </TouchableOpacity>
              
              <Text style = {styles.infoHeading}>Name</Text>
                <View style = {styles.infoBlocks}>
                  <Text>Patrick Yang </Text>
                </View>

              <Text style = {styles.infoHeading}>Email</Text>
                <View style = {styles.infoBlocks}>
                  <Text>yang.4581@osu.edu </Text>
                </View>

              <Text style = {styles.infoHeading}>Major</Text>
                <View style = {styles.infoBlocks}>
                  <Text>Computer Science Engineering </Text>
                </View>

              <Text style = {styles.infoHeading}>Personal Bio Statement</Text>
                <View style= {styles.bioBlock}>
                  <Text>Hi! I am a computer science major who loves coding and watching movies!</Text>
                </View>

              <View style = {styles.tutorButton}>
                <Button
                  //onPress={() => this.props.navigation.navigate('Dashboard')} 
                  title = "- Become a Tutor -"
                  color = "#ffffff"
                  
                />
              </View>
              
              

            </View>


            
          </ScrollView>
          </SafeAreaView>
        
      );
    }
  }
  const AppSwitchNavigator = createSwitchNavigator({
  Profile,
});
  
  export default createAppContainer(AppSwitchNavigator);
  

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
      height: '15%',
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
import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry } from 'react-native'

  class Banner extends Component {
    render() {
      return(
        <View style={styles.banner}>
                <View style={{width: 412, height: 35, borderWidth: 1}} >
                </View>
  
                <View style={{width: 412, height: 69, borderWidth: 1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}} >
                    <View style={{width: 75, height: 69, borderWidth: 1, alignItems: 'center',justifyContent: 'center'}} >
                    <Image source={require('../../img/leftarrow.png')} style={{width: 25, height: 25}}/>
                    </View>
                    
                    <View style={{width: 262, height: 69, borderWidth: 1}} >
                    </View>
                    
                    <View style={{width: 75, height: 69, borderWidth: 1, alignItems: 'center',justifyContent: 'center'}} >
                    <Image source={require('../../img/rightarrow.png')} style={{width: 25, height: 25}}/>
                    </View>
                </View>
                <View style={{width: 412, height: 35, borderWidth: 1, alignItems: 'center',justifyContent: 'center'}} >
                <Image source={require('../../img/4circle.png')} style={{width: 120, height: 28}}/>
                
                
                </View>
        </View>
      )
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      borderWidth: 1
    },
    navBar: {
      height: 73.8,
      backgroundColor: 'orange',
      justifyContent: 'center',
        alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1
    },
    navBarText: {
      fontSize: 20,
      color: 'white',
    },
    noticeText: {
      fontSize: 18,
      color: 'black',
      
    },
    notice2Text: {
      fontSize: 15,
      color: 'black',
      
  
    },
    banner: {
      height: 139,
      backgroundColor: 'gray',
      flexDirection: 'column',
      borderWidth: 1
    },
    notice: {
      height: 147,
      backgroundColor: 'white',
      borderWidth: 1
    },
    schedule: {
      height: 119,
      backgroundColor: 'white',
      borderWidth: 1
    },
    sns: {
      height: 128,
      borderWidth: 1
      
    },
    jobs: {
      height: 128,
      backgroundColor: 'white',
      borderWidth: 1
    }
  
  });
  

  export default Banner
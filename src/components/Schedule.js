import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  TouchableOpacity } from 'react-native'

  import { Actions } from 'react-native-router-flux';
 
  class Schedule extends Component {
    onPress() {
      Actions.Schedule();
      }
    render() {
      return (
        <View style={styles.schedule}>
        <TouchableOpacity onPress={this.onPress}>
            <View style={{width: 412, height: 48, borderWidth: 1, flexDirection: 'row', backgroundColor: '#F5DEB3',}} >
                   <View style={{width: 100, height: 48, alignItems: 'center',justifyContent: 'center'}} >
                   <Text style={styles.noticeText}>
            수업조회
                </Text>
                   </View>
                   <View style={{width: 255, height: 48, }} >
                   </View>
                   <View style={{width: 52, height: 48,  alignItems: 'center',justifyContent: 'center'}} >
                     
                   </View>
                </View>
                <View style={{width: 412, height: 71, borderWidth: 1, alignItems: 'center', justifyContent: 'center'}} >
                <Image source={require('../../img/schedule.png')} style={{width: 110, height: 53}}/>
                </View>
                </TouchableOpacity>
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

    schedule: {
      height: 119,
      backgroundColor: 'white',
      borderWidth: 1,
      
    },

  
  });
  
  export default Schedule
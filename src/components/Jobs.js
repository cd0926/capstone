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
class Jobs extends Component {
  onPress() {
    Actions.Jobs();
    }
    render() {
      return(
        <View style={styles.jobs}>
            <TouchableOpacity onPress={this.onPress}>
             <View style={{width: 412, height: 48, borderWidth: 1, flexDirection: 'row'}} >
                   <View style={{width: 100, height: 48, alignItems: 'center',justifyContent: 'center'}} >
                   <Text style={styles.noticeText}>
            취업정보
                </Text>
                   </View>
                   <View style={{width: 255, height: 48}} >
                   </View>
                   <View style={{width: 52, height: 48, alignItems: 'center',justifyContent: 'center'}} >
                   <Image source={require('../../img/plus.png')} style={{width: 40, height: 40}}/>
                   </View>
                </View>

                </TouchableOpacity>
                <View style={{width: 412, height: 80, borderWidth: 1, flexDirection: 'row'}} >
                <View style={{width: 206, height: 80, borderWidth: 1}} >
                <Image source={require('../../img/dreampath.png')} style={{width: 200, height: 75}}/>
                </View>  
                <View style={{width: 206, height: 80, borderWidth: 1}} >              
                <Image source={require('../../img/resume.png')} style={{width: 200, height: 75}}/>
                </View> 
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

 
    jobs: {
      height: 128,
      backgroundColor: 'white',
      borderWidth: 1,
      backgroundColor: '#F5DEB3',
    }
  
  });
  
  export default Jobs
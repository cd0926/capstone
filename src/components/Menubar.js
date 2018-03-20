import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Menubar extends Component {
  onPress() {
    Actions.MainScene();
    }
  onPress2() {
    Actions.Favorite();
    }
  onPress3() {
    Actions.Mypage();
    }
  onPress4() {
    Actions.Setting();
    }
    render() {
      return (
        <View style={styles.notice}>
                <TouchableOpacity onPress={this.onPress}>
                  <View style={{width: 240, height: 53, borderWidth: 1, flexDirection: 'row' }} >
                  <View style={{width: 66, height: 53, borderWidth: 1,justifyContent: 'center',alignItems: 'center'}} >
                  
                  <Image source={require('../../img/main.png')} style={{width: 45, height: 45}}/>
                  </View>
                  <View style={{width: 174, height: 53, borderWidth: 1,justifyContent: 'center'}} >
                  
                  <Text style={styles.notice2Text}>
                  메인으로
                  </Text>
                  </View>
                  </View>

                </TouchableOpacity>
                <TouchableOpacity onPress={this.onPress2}>
                <View style={{width: 240, height: 53, borderWidth: 1, flexDirection: 'row' }} >
                <View style={{width: 66, height: 53, borderWidth: 1,justifyContent: 'center',alignItems: 'center'}} >
                
                <Image source={require('../../img/favorite2.png')} style={{width: 45, height: 45}}/>
                </View>

                
                <View style={{width: 174, height: 53, borderWidth: 1,justifyContent: 'center'}} >
                
                <Text style={styles.notice2Text}>
               즐겨찾기
                </Text>
                </View>
                            
                
                </View>
                </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress3}>

                <View style={{width: 240, height: 53, borderWidth: 1, flexDirection: 'row' }} >
                <View style={{width: 66, height: 53, borderWidth: 1,justifyContent: 'center',alignItems: 'center'}} >
                
                <Image source={require('../../img/mypage.png')} style={{width: 45, height: 45}}/>
                </View>
                <View style={{width: 174, height: 53, borderWidth: 1,justifyContent: 'center'}} >
                
                <Text style={styles.notice2Text}>
                마이페이지
                </Text>
                </View>
                
                </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPress4}>
                <View style={{width: 240, height: 53, borderWidth: 1, flexDirection: 'row' }} >
                <View style={{width: 66, height: 53, borderWidth: 1,justifyContent: 'center',alignItems: 'center'}} >
                
                <Image source={require('../../img/setting.png')} style={{width: 45, height: 45}}/>
                </View>
                <View style={{width: 174, height: 53, borderWidth: 1,justifyContent: 'center'}} >
                
                <Text style={styles.notice2Text}>
                환경설정
                </Text>
                </View>
                </View>
        </TouchableOpacity>
                <View style={{width: 240, height: 395, borderWidth: 1}} >
                
                
                </View>
                <View style={{width: 240, height: 50, borderWidth: 1,justifyContent: 'center',  alignItems: 'center',}} >
                <Text style={styles.notice2Text}>
                Logout
                </Text>
                
                </View>

        </View>
      )
    }
  }


const styles = StyleSheet.create({
    container: {
      width: 240,
      height: 663,
      flexDirection: 'column',
      borderWidth: 1
    },
    navBar: {
      height: 61,
      backgroundColor: 'white',
      justifyContent: 'center',
        alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1 
    },
    navBarText: {
      fontSize: 20,
      color: 'white',
    },
    navBarText2: {
      fontSize: 18,
      color: 'black',
    },
    noticeText: {
      fontSize: 18,
      color: 'black',
      
    },
    notice2Text: {
      fontSize: 17,
      color: 'black',
      
  
    },
    notice: {
      flex: 1,
      backgroundColor: 'white',
      borderWidth: 1
    },
  
  
  });

  
  export default Menubar
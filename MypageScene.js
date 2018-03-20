import React, { Component } from 'react';
import { 
  Text,
  View,
  StyleSheet,
  TouchableOpacity
       } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Switch } from 'react-native-switch';

export default class MypageScene extends Component {
  onPress() {
    Actions.Social();
    }
        render() {
        return (
<View>

            <View style={{ width: 410, height: 20 }} >
                   
                   </View>


            <View style={{width: 412, height: 80, borderWidth: 1, flexDirection: 'row', backgroundColor: '#F5DEB3',}} >
                   <View style={{width: 407, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                   <Text style={styles.SettingText}>
            비밀번호 및 개인정보 변경
                </Text>
                   </View>
                   
                   
                </View>
                
<View style={{ width: 410, height: 7 }} >

                   </View>
<TouchableOpacity onPress={this.onPress}>
                
            <View style={{width: 412, height: 80, borderWidth: 1, flexDirection: 'row', backgroundColor: '#F5DEB3',}} >
                   <View style={{width: 407, height: 80,  /*alignItems: 'center' ,*/justifyContent: 'center'}} >
                   <Text style={styles.SettingText}>
            소셜 연동 설정
                </Text>
                   </View>
                   
                   
                </View>
                </TouchableOpacity>
 </View>
        );
      }
    }
    const styles = StyleSheet.create({
        SettingText: {
          fontSize: 25,
          color: 'white',
          margin: 20
        },
        /*navBar: {
          height: 73.8,
          backgroundColor: 'orange',
          justifyContent: 'center',
            alignItems: 'center',
          flexDirection: 'row',
          borderWidth: 1
        },
        navBarText: {
          fontSize: 22,
          color: 'white',
        }*/
      });
import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  TouchableOpacity
 } from 'react-native'

 import { Actions } from 'react-native-router-flux';
 import FlatListDemo from '../../FlatListDemo';

 class Notice extends Component {
  onPress() {
    Actions.Notice();
    }
    render() {
      return(
        <View style={styles.notice}>
                 <TouchableOpacity onPress={this.onPress}>
                <View style={{width: 412, height: 48, borderWidth: 1, flexDirection: 'row', backgroundColor: '#F5DEB3',}} >
                   <View style={{width: 100, height: 48,  alignItems: 'center',justifyContent: 'center'}} >
                   <Text style={styles.noticeText}>
            공지사항
                </Text>
                   </View>
                   <View style={{width: 255, height: 48, }} >
                   </View>
                   <View style={{width: 52, height: 48,  alignItems: 'center',justifyContent: 'center'}} >
                     <Image source={require('../../img/plus.png')} style={{width: 40, height: 40}}/>
                
                   </View>
                </View>
                </TouchableOpacity>
                <View style={{width: 412, height: 99, borderWidth: 1,justifyContent: 'center'}} >
                <FlatListDemo />
                </View>
                
        </View>
      )
    }
  }

/*<Text style={styles.notice2Text}>
                2018년 봄 교원자격 무시험검정 신청안내
                </Text>
                </View>
                <View style={{width: 412, height: 33, borderWidth: 1,justifyContent: 'center'}} >
                <Text style={styles.notice2Text}>
                2018년도 학사관련 주요 변경사항(외국어시험 및
                  </Text>
                </View>
                <View style={{width: 412, height: 33, borderWidth: 1,justifyContent: 'center'}} >
                <Text style={styles.notice2Text}>
                2018년도 1학기 서울여자대학교 수학안내
                  </Text>
                  */
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
      flexDirection: 'column',
      borderWidth: 1
    },
    notice: {
      height: 147,
      backgroundColor: 'white',
      borderWidth: 1,
      
    },
  });
  
  export default Notice
  
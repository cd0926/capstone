import React, { Component } from 'react';
import { 
  Text,
  View,
       } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ScheduleScene extends Component {
    onPress() {
      Actions.Schedule();
      }
      render() {
        return(
          <View>
            
                     <Text>
              수업 정보
                  </Text>
          
                 </View>
        )
      }
    }
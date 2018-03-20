import React, { Component } from 'react';
import { 
  Text,
  View,
       } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SNSScene extends Component {
    onPress() {
      Actions.SNS();
      }
      render() {
        return(
          <View>
             
                     <Text>
              SNS
                  </Text>
          
                 </View>
        )
      }
    }
import React, { Component } from 'react';
import {Select, Option} from "react-native-chooser";
import { 
  AppRegistry,
  Text,
  View,
  FlatList
       } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FlatListDemo from './FlatListDemo';

export default class NoticeScene extends Component {
    onPress() {
      Actions.Tab();
      }
      constructor(props) {
        super(props);
        this.state = {value : "Select Me Please"}
      }
      onSelect(value, label) {
        this.setState({value : value});
      }
      render() {
        return(
          <View>
          <View style={{width: 412, height: 70, borderWidth: 2, flexDirection: "row"/*, alignItems: 'center',justifyContent: 'center'*/}} >
          <View style={{width: 236, height: 70, alignItems: 'center',justifyContent: 'center' }} >
          <Select
          onSelect = {this.onSelect.bind(this)}
          defaultText  = {this.state.value}
          style = {{borderWidth : 1, borderColor : "green"}}
          textStyle = {{}}
          backdropStyle  = {{backgroundColor : "#d3d5d6"}}
          optionListStyle = {{backgroundColor : "#F5FCFF"}}
        >
        <Option value = "학사공지">학사공지</Option>
        <Option value = "입학공지">입학공지</Option>
        <Option value = "채용공지">채용공지</Option>
        <Option value = "장학공지">장학공지</Option>
        <Option value = "일반공지">일반공지</Option>
       

      </Select>
          </View>
          
 </View>
 <FlatListDemo />
      </View>
        )
      }
    }

    
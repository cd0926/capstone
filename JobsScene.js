import React, { Component } from 'react';
import { 
  Text,
  View,
  WebView,
  AppRegistry,
  Image,
  StyleSheet,TouchableOpacity, ActivityIndicator, Alert
  } from 'react-native';
import { Actions } from 'react-native-router-flux';

//const REQUEST_URL = 'http://localhost:3090/access';
//const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
/*function urlfetch() {
  return fetch('http://localhost:3090/access')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}*/

export default class JobsScene extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
        key: '',
        sightings: [],
    };
}
/*
componentDidMount() {
  fetch('http://localhost:3090/access')
  .then((response) => response.json())
  .then((responseJson) => {
    Alert.alert("Author name at 0th index:" + responseJson.movies);
      })
      .catch ((error) => {
      console.log(error);
  });
  */
  

   render() {
  return (
   
    <Text> Some other text </Text>
    
        );
      }
    }
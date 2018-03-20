import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  AppRegistry,
  Dimensions,
  ListView,
  FlatList
} from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
  
};
 
const FirstRoute = () => 

<FlatList
initialNumToRender={20}

  data={[{key: 'a'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>


;
  
  
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ForthRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
 
export default class Tab extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: '공지사항' },
      { key: 'second', title: '수업조회' },
      { key: 'third', title: 'SNS' },
      { key: 'forth', title: '취업정보' }
    ],
  };
 
  _handleIndexChange = index => this.setState({ index });
 
  _renderHeader = props => <TabBar Style={{width: 69, height: 59, borderWidth: 1}}  
  {...props} />;
 
  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    forth: ForthRoute,
  });
 
  render() {
    return (
      <View style={styles.container}>
       <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}>
        <View style={{width: 110, height: 115, borderWidth: 5, alignItems: 'center',justifyContent: 'center'}} >
        <Text> 까먹음 </Text>
          </View>

      </TabViewAnimated>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 1
  },
  navBar: {
    height: 71,
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
  buttonbar: {
    height: 59,
    flexDirection: 'column',
    borderWidth: 1
  },
  notice: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1
  }
});
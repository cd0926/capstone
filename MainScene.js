import React, { Component } from 'react';
import { ScrollView, DrawerLayoutAndroid, View, Text } from 'react-native';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import Banner from './src/components/Banner';
import Notice from './src/components/Notice';
import Schedule from './src/components/Schedule';
import SNS from './src/components/SNS';
import Jobs from './src/components/Jobs';
import Menubar from './src/components/Menubar';
// import ControlPanel from './src/components/ControlPanel';

class MainScene extends Component {
  // renderControlPanel() {
  //   return (
  //     <View>
  //       <Text>
  //         renderControlPanel
  //       </Text>
  //     </View>
  //   );
  // }

  render() {
    // console.log(this.props);
    
    return (
      /*<Drawer
        type="static"
        openDrawerOffset={0.41}
        ref={(ref) => this._drawer = ref}
        side="right"
        content={<Menubar />}
        open={this.props.drawer.selectedLibraryId}
      >*/
        <ScrollView>

        <Banner />
        <Notice />
        <Schedule />
        <SNS />
        <Jobs />

        </ScrollView>
        
     //</Drawer> 
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    drawer: state.selectedLibraryId
  };
}

export default connect(mapStateToProps)(MainScene);

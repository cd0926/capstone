import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import Menubar from './Menubar';

class drawer extends Component {
    render() {
      return (
        <Drawer
        type="static"
        openDrawerOffset={0.41}
        ref={(ref) => this._drawer = ref}
        side="right"
        content={<Menubar />}
        open={this.props.drawer.selectedLibraryId} 
        >
        
        
        </Drawer >
    );
    }
  }
  
  
const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    drawer: state.selectedLibraryId
  };
};

export default connect(mapStateToProps)(drawer);

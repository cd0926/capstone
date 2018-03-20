import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import AlbumList from './components/albums/album_list';
import LibraryList from './components/library/library_list';
import LoginForm from './components/login/login_form';
import MainScene from '../MainScene';
import Tab from '../Tab';
import SettingScene from '../SettingScene';
import MypageScene from '../MypageScene';
import SocialScene from '../SocialScene';
import SNSloginScene from '../SNSloginScene';
import JobsloginScene from '../JobsloginScene';
//import SNSScene from '../SNSScene';
//import JobsScene from '../JobsScene';
//import ScheduleScene from '../ScheduleScene';

import Menubar from '../src/components/Menubar';
import Navbar from '../src/components/Navbar';
import Navbar2 from '../src/components/Navbar2';
import NavbarFavorite from '../src/components/NavbarFavorite';
import NavbarMypage from '../src/components/NavbarMypage';
import NavbarSetting from '../src/components/NavbarSetting';
import NavbarSocial from '../src/components/NavbarSocial';
import NavbarJobslogin from '../src/components/NavbarJobslogin';
import NavbarSNSlogin from '../src/components/NavbarSNSlogin';



const mapStateToProps = (state) => {
  console.log(state);
  
  return {
    drawer: state.selectedLibraryId
  };
};

const RouterComponent = () => {
  return (
    <Drawer
        type="static"
        openDrawerOffset={0.41}
        ref={(ref) => this._drawer = ref}
        side="right"
        content={<Menubar />}
        open/*={this.props.drawer.selectedLibraryId}*/
    >
    <Router>
      
      <Scene key="root">
        <Scene
          key="MainScene"
          component={MainScene}
          navBar={Navbar}
          initial
        />
        <Scene
          key="Notice"
          component={Tab}
          navBar={Navbar2}
          
        />
        <Scene
          key="library"
          onRight={() => Actions.pop()}
          rightTitle="back"
          rightButtonStyle={{ paddingLeft: 5 }}
          component={LibraryList}
          title="Library"
        />
        <Scene
          key="Schedule"
          component={Tab}
          navBar={Navbar2}
        />
        <Scene
          key="SNS"
          component={Tab}
          navBar={Navbar2}
        />
        <Scene
          key="Jobs"
          component={Tab}
          navBar={Navbar2}
        />
        <Scene
          key="Favorite"
          component={Tab}
          navBar={NavbarFavorite}
        />
        <Scene
          key="Mypage"
          component={MypageScene}
          navBar={NavbarMypage}
        />
        <Scene
          key="Setting"
          component={SettingScene}
          navBar={NavbarSetting}
        />
        <Scene
          key="Social"
          component={SocialScene}
          navBar={NavbarSocial}
        />
        <Scene
          key="SNSlogin"
          component={SNSloginScene}
          navBar={NavbarSNSlogin}
        />
        <Scene
          key="Jobslogin"
          component={JobsloginScene}
          navBar={NavbarJobslogin}
        />

      </Scene>
    </Router>
    </Drawer> 
  );
};


export default connect(mapStateToProps)(RouterComponent);
//export default RouterComponent;

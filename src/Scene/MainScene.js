import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Banner from '../components/Banner';
import Notice from '../components/Notice';
import Schedule from '../components/Schedule';
import SNS from '../components/SNS';
import Jobs from '../components/Jobs';


class MainScene extends Component {
  render() { 
    return (
      
      <ScrollView>

      <Banner />
      <Notice />
      <Schedule />
      <SNS />
      <Jobs />

      </ScrollView>
      
    );
  }
}

export default MainScene
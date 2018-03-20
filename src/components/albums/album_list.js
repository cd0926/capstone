import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import AlbumDetail from './album_detail';
import { Button, Spinner } from '../common';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    if (this.state.albums.length === 0) {
      return <Spinner size="large" />;
    }

    return (
      <ScrollView>
        {this.renderAlbums()}
        <Button onPress={() => Actions.library()} >
          Library
        </Button>
      </ScrollView>
    );
  }
}

export default AlbumList;

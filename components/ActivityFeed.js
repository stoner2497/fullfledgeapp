import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import Header from './partials/Header'
import Axios from 'axios';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import FollowersDetail from './FollowersDetail';
export default class AnatomyExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums:[]
        }
    }
    componentDidMount() {
        Axios.get('http://rallycoding.herokuapp.com/api/music_albums')
         .then(album => this.setState({albums:album.data}))
    }

     albumDetail = () => {
         return this.state.albums.map(album => <FollowersDetail key={album.title} album={album} />
        )
    }
    render() {

    return (
      <ScrollView>       
               {this.albumDetail()}
      </ScrollView>
    );
  }
}


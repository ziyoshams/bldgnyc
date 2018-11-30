import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class BuildingList extends Component {
  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    try {
      const response = await axios.get('building_list.json');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <Text>Building List</Text>
      </View>
    );
  }
}

export default BuildingList;

import React, { Component } from 'react';
import { View, ScrollView, FlatList, Text, Dimensions } from 'react-native';
import axios from 'axios';
import BuildingDetail from './BuildingDetail';

class BuildingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: []
    };
  }

  // componentDidMount() {
  //   this.fetchList();
  // }

  componentWillMount() {
    axios
      .get('https://raw.githubusercontent.com/antonholmes/bldgnyc/master/api/building_list')
      .then(response => this.setState({ buildings: response.data }));
  }

  renderBuildings({ item }) {
    return <BuildingDetail key={item.name} building={item} />;
  }

  // fetchList = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://raw.githubusercontent.com/antonholmes/bldgnyc/master/api/building_list'
  //     );
  //     .then(response => this.setState({ buildings: response.data }));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  render() {
    if (this.state.buildings.length) {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <FlatList
              data={this.state.buildings}
              keyExtractor={(item, index) => `${index}`}
              renderItem={this.renderBuildings}
            />
          </ScrollView>
        </View>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}

export default BuildingList;

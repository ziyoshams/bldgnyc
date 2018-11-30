import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import BuildingDetail from './BuildingDetail';

class BuildingList extends Component {
  state = { buildings: [] };

  // componentDidMount() {
  //   this.fetchList();
  // }

  componentWillMount() {
    axios
      .get(
        'https://raw.githubusercontent.com/antonholmes/bldgnyc/master/api/building_list'
      )
      .then(response => this.setState({ buildings: response.data }));
  }

  renderBuildings() {
    return this.state.buildings.map(building => (
      <BuildingDetail key={building.name} building={building} />
    ));
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
    console.log(this.state);
    return <View>{this.renderBuildings()}</View>;
  }
}

export default BuildingList;

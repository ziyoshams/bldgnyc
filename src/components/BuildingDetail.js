import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const BuildingDetail = ({ building }) => {
  const { name, location, thumbnail } = building;
  return (
    <Card>
      <CardSection>
        <View style={{ width: 50, height: 50, margin: 4 }}>
          <Image styles={{ width: 50, height: 50 }} source={{ uri: thumbnail }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{name}</Text>
          <Text>{location}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
};

export default BuildingDetail;

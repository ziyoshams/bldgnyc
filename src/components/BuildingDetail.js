import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const BuildingDetail = ({ building }) => {
  const { name, location, thumbnail }
  return (
    <Card>
      <CardSection>
        <View>
          <Image source={{ uri: thumbnail }} />
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
    justifyContent: 'space-around',
  },
};

export default BuildingDetail;

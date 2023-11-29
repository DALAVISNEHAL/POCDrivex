import React from 'react';
import { View, Text } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>{item.name} Details</Text>
      <Text>Returns: {item.returns}</Text>
      <Text>Risk: {item.risk}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

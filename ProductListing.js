// ListingScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ListingScreen = ({ navigation }) => {
  const [data, setData] = useState([
    { id: 1, name: 'Mutual Fund 1', returns: '10%', risk: 'Low' },
    { id: 2, name: 'Mutual Fund 2', returns: '8%', risk: 'Medium' },
  ]);

  const handleItemClick = item => {
    navigation.navigate('ProductDetails', { item });
  };

  return (
    <View>
      <Text>Mutual Fund Listing</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemClick(item)}>
            <Text>{item.name}</Text>
            <Text>Returns: {item.returns}</Text>
            <Text>Risk: {item.risk}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ListingScreen;

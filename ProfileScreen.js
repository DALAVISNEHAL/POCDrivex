// ProfileScreen.js

import React, { useState } from 'react';
import { View, Text, Button, Input } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
  const { name, email } = route.params;
  const [newName, setNewName] = useState(name);

  const handleUpdateProfile = () => {
    navigation.navigate('Listing');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Input
        placeholder="New Name"
        onChangeText={text => setNewName(text)}
        value={newName}
        style={styles.input}
      />
      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
};

export default ProfileScreen;

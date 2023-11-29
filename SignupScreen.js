// SignupScreen.js

import React, { useState } from 'react';
import { View, Text, Button, Input } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic (save to database, etc.)
    // For simplicity, assuming successful signup always redirects to the profile
    navigation.navigate('Profile', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Input
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
        style={styles.input}
      />
      <Input
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <Input
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
        value={password}
        style={styles.input}
      />
      <Button title="Sign Up" onPress={handleSignup} />
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

export default SignupScreen;

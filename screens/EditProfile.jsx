import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EditProfileScreen = () => {
  const [userName, setUserName] = useState('John Doe'); // Initial value is the user's current name
  const [userBio, setUserBio] = useState(''); // Initial value is an empty string

  const handleSaveChanges = () => {
    // Add logic to save changes (e.g., send to server, update state, etc.)
    // For simplicity, let's just log the updated values for now
    console.log('Updated Name:', userName);
    console.log('Updated Bio:', userBio);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]} // Increase height for bio input
        placeholder="Bio"
        multiline
        value={userBio}
        onChangeText={text => setUserBio(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default EditProfileScreen;

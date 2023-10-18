import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  const handleEditProfile = () => {
    navigation.navigate("Edit Profile"); // Navigate to the "EditProfile" screen
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/user.png")} // Replace with the actual path to your user image
        style={styles.userImage}
      />
      <Text style={styles.userName}>John Doe</Text>
      <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Profile Page</Text>
      {/* Add additional profile information and components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default ProfileScreen;

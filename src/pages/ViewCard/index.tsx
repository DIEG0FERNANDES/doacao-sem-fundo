import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Footer from '../../components/footer';
import Card from '../../components/card';

const ViewCard = () => {
  const navigation = useNavigation();

  const [snackData, setSnackData] = useState({
    name: '',
    description: '',
    photoUrl: '',
    // ... other snack-related data
  });

  const fetchSnackData = async () => {
    // Replace with your actual logic to fetch snack data
    setSnackData({
      name: 'Snack Name',
      description: 'Description of the snack...',
      photoUrl: 'path/to/photo.jpg',
      // ... other snack-related data
    });
  };

  const uploadPhoto = async (file) => {
    // Replace with your actual logic for photo upload
    try {
      // Your upload logic here
      console.log('Photo uploaded successfully.');
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  const deletePhoto = async () => {
    // Replace with your actual logic for photo deletion
    try {
      // Your deletion logic here
      console.log('Photo deleted successfully.');
      setSnackData((prevData) => ({ ...prevData, photoUrl: '' }));
    } catch (error) {
      console.error('Error deleting photo:', error);
    }
  };

  const updateSnack = async () => {
    // Replace with your actual logic for updating snack
    try {
      // Your update logic here
      console.log('Snack updated successfully.');
    } catch (error) {
      console.error('Error updating snack:', error);
    }
  };

  useEffect(() => {
    fetchSnackData();
  }, []); // Ensure to add any dependencies if needed

  return (
    <View>
      <Header />
      <SearchBar />

      <Card
        title={snackData.name}
        subtitle=""
        description={snackData.description}
        imageSource={snackData.photoUrl ? { uri: snackData.photoUrl } : null}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => uploadPhoto(/* pass your file */)}>
        <Text>Upload Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={deletePhoto}>
        <Text>Delete Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={updateSnack}>
        <Text>Update Snack</Text>
      </TouchableOpacity>

      <Card
        title="Clothing Donation"
        subtitle="Donate clothes to those in need"
        description="Help make a difference by donating gently-used clothes. Your contribution can bring warmth and comfort to someone in need."
        // You can add an image source for the clothing donation card
      />

      <Footer />
    </View>
  );
};

export default ViewCard;

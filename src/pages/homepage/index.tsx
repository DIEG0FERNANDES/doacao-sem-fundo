import React from 'react';
import { View } from 'react-native';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Footer from '../../components/footer';

const Home: React.FC = () => {
  return (
    <View>
      <Header />
      <SearchBar />
      <Footer />
    </View>
  );
};

export default Home;
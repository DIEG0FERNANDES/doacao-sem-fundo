import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// importação de components personalizados
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Footer from '../../components/footer';
import Card from '../../components/card';



const ViewCard = () => {
  const organizationData = {
    // imageSource: require('../../../assets/organization.png'),
    description: 'Descrição da organização...',
  };

  const donationData = [
    {
      id: 1,
      // imageSource: require('../../../assets/donation1.png'),
      title: 'Doação 1',
      subtitle: 'Subtitulo da Doação 1',
      description: 'Descrição da Doação 1...',
    },
    {
      id: 2,
      // imageSource: require('../../../assets/donation2.png'),
      title: 'Doação 2',
      subtitle: 'Subtitulo da Doação 2',
      description: 'Descrição da Doação 2...',
    },
  ];

  return (
    <View>
      <Header />
      <SearchBar />
      <Card
        // imageSource={organizationData.imageSource}
        title="Organização"
        subtitle=""
        description={organizationData.description}
      />
      {donationData.map((donation) => (
        <Card
          key={donation.id}
          // imageSource={donation.imageSource}
          title={donation.title}
          subtitle={donation.subtitle}
          description={donation.description}
        />
      ))}
      <Footer />
    </View>
  );
};

export default ViewCard;
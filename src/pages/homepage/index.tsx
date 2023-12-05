// Home.tsx
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Body, Container } from './styles';


// importação de components
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Footer from '../../components/footer';
import Card from '../../components/card';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const navigateToViewCard = () => {
    console.log('Antes da navegação');
    // navigation.navigate('ViewCard');
    console.log('Depois da navegação');
  };
  

  const cardData = [
    {
      id: 1,
      imageSource: require('../../../assets/icon.png'),
      title: 'Card 1',
      subtitle: 'Subtitulo do Card 1',
      description: 'Descrição do Card 1...',
    },
  ];
  // onPress={navigateToViewCard}
  return (
    <Body>
      <Header />
      <Container>
        {/* <Button title="Ir para ViewCard"  /> */}

        <SearchBar />
        {cardData.map((card) => (
          <Card
            key={card.id}
            imageSource={card.imageSource}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </Container>
      <Footer />
    </Body>
  );
};

export default Home;

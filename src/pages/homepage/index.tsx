// Home.tsx
import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Body, Container } from './styles';
import Card from '../../components/card';


const Home: React.FC = () => {
  const navigation = useNavigation();

  const navigateToViewCard = () => {
    console.log('Antes da navegação');
    navigation.navigate('ViewCard');
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

  return (
    <Body>
      <Container>
        <Button title="Ir para ViewCard" onPress={navigateToViewCard} />
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
    </Body>
  );
};

export default Home;

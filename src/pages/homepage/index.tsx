import React from 'react';

// importação de components
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import Footer from '../../components/footer';
import Card from '../../components/card';
import { Body, Container } from './styles';

const Home: React.FC = () => {
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
      <Header />
      <Container>
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
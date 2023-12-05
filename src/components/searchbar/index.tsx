import React from 'react';
import { TextInput, Button } from 'react-native';
import { Bar, Container } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Bar placeholder="Pesquisar..." />
      <Button title="Filtrar" onPress={() => {}} />
    </Container>
  );
};

export default SearchBar;

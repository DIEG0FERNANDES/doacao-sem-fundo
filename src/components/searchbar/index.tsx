import React from 'react';
import { TextInput, Button } from 'react-native';
import { Container } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <TextInput placeholder="Pesquisar..." />
      <Button title="Filtrar" onPress={() => {}} />
    </Container>
  );
};

export default SearchBar;

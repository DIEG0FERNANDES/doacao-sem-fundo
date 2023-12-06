import React from 'react';
import { Button } from 'react-native';
import { Bar, Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Bar>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Bar>
      <Button title="Filtrar" onPress={() => {}} />
    </Container>
  );
};

export default SearchBar;
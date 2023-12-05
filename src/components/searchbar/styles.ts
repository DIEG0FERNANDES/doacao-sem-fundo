import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: center; 
`;

export const Bar = styled.TextInput`
  background-color: #b9C4D4;
  margin-top: auto;
  padding: 5px;
  width: 50%;
  height: 30px;
  border-radius: 20px;
  color: #fff;
`;

export const Span = styled.Text`
  padding: 10px;
  color: #B9C4D4;
  font-family: 'regular';
`;

export const Search = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  border-radius: 20px;
  margin-top: auto;
  background-color: #038099;
`;
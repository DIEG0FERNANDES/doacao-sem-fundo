import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  background-color: #3498db;
  padding: 20px;
  margin-top: 40px;
  align-items: center;
  width: 20px;
  height: 30px;
  border: 35px;
`;

export const HeaderTitle = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  background-color: #05C1E6;
  align-items: center;
  padding: 30px;
  width: 50px;
  height: 30px;
  border: 15px;
  margin: 20px;
`;

export const HeaderSubTitle = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: 'regular';
  background-color: #04A2C2;
  border: 20px;
  padding: 30px;
  margin-top: auto;
`
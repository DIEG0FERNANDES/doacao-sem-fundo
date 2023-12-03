import styled from 'styled-components/native';

export const CardContainer = styled.View`
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  background-color: #038099;
  color: #ffffff;
`;

export const CardImage = styled.Image`
  padding: 25px;
  margin: 20px;
  background-image: none;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const CardInfo = styled.View`
  background-color:#05C1E6;
  margin-left: 10px;
  align-items: center;
  padding: 30px;
`;

export const CardTitle = styled.Text`
  background-color: #038099;
  color: #FFFFFF ;
  font-size: 18px;
  font-weight: bold;
`;

export const CardSubtitle = styled.Text`
  color: #777;
  width: 20px;
  height: 40px;
  padding: 30px;
  margin: 40px;
  font-family: 'regular';
  justify-items: auto;
`;

export const CardDescription = styled.Text`
  margin-top: 5px;
  background-color: #025E70;
  color: #B9C4D4;
  padding: 40px;
  justify-items: auto;
  border-radius: 30px;
`;
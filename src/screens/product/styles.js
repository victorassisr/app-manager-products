import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView`
  background-color: #333;
`;

export const Container = styled.View`
  background-color: #333;
  align-items: center;
  flex: 1;
`;

export const ContainerList = styled.View`
  background-color: #FFF;
  padding: 10px;
  width: 95%;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 42px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #0f0;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const NoProducts = styled.Text`
  font-size: 20px;
  margin-top: 65%;
  text-align: center;
`;

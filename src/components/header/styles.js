import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const HeaderTitle = styled.Text`
  font-size: 26px;
  margin-top: 25px;
  margin-left: 10px;
  margin-bottom: 10px;
  color: lime;
  text-align: center;
`;

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});

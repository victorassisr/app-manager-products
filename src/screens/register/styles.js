import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  background-color: #333;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const InputContainer = styled.View`
  margin-top: 10px;
  width: 80%;
  height: 42px;
`;

export const Input = styled.TextInput`
  padding-left: 10px;
  border-width: 2px;
  border-color: #000;
  font-size: 15px;
  color: #FFF;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 42px;
  margin-top: 20px;
  background-color: #0f0;

  ${props =>
    props.disabled === true &&
    css`
      background-color: #a9a9a9;
    `}
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: #000;

  ${props =>
    props.disabled === true &&
    css`
      color: #000;
    `}
`;

export const NoPermission = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #FFF;
`;

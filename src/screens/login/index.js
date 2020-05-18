import React, {useState, useMemo, useRef} from 'react';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {RNToasty} from 'react-native-toasty';

import {
  Container,
  InputContainer,
  Input,
  Button,
  TextButton,
  ButtonInvited,
  TextInvited,
} from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const ref_senha = useRef();

  const {navigate} = useNavigation();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useMemo(() => {
    if (email !== '' && senha !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, senha]);

  function logar() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (email !== 'admin') {
        return RNToasty.Error({
          title: 'Email inválido! Tente "admin"',
          withIcon: false,
        });
      }

      if (senha !== 'a') {
        return RNToasty.Error({
          title: 'Senha inválida! Tente "a"',
          withIcon: false,
        });
      }

      navigate('Register', {auth: true});
    }, 3000);
  }

  function convidado() {
    navigate('Register', {auth: false});
  }

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="login"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#FFF"
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => ref_senha.current.focus()}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#FFF"
          onChangeText={text => setSenha(text)}
          secureTextEntry={true}
          ref={ref_senha}
        />
      </InputContainer>

      {loading ? (
        <ActivityIndicator size="large" color={'##0f0'} />
      ) : (
        <Button disabled={disabled} onPress={() => logar()}>
          <TextButton disabled> Login </TextButton>
        </Button>
      )}

      <ButtonInvited onPress={() => convidado()}>
        <TextInvited>Convidado</TextInvited>
      </ButtonInvited>
    </Container>
  );
}

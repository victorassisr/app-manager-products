import React, {useState, useMemo, useRef} from 'react';
import {ActivityIndicator} from 'react-native';
import {RNToasty} from 'react-native-toasty';
import {useDispatch} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';

import {
  Container,
  InputContainer,
  Input,
  Button,
  TextButton,
  NoPermission,
} from './styles';

import Header from '../../components/header';

import {setProduct} from '../../store/ducks/product';

export default function Register() {
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);

  const ref_product_name = useRef();
  const ref_product_price = useRef();

  const {getParam} = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useMemo(() => {
    if (productCode !== '' && productName !== '' && productPrice !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [productCode, productName, productPrice]);

  function registrarProduto() {
    setLoading(true);

    const data = {
      productCode,
      productName,
      productPrice,
    };

    setTimeout(() => {
      dispatch(setProduct(data));

      setLoading(false);

      setProductCode('');
      setProductName('');
      setProductPrice(0);

      RNToasty.Success({
        title: 'Sucesso!',
        withIcon: false,
      });
    }, 2000);
  }

  return (
    <>
      <Header>Cadastrar</Header>
      <Container>
        {getParam('auth') ? (
          <>
            <InputContainer>
              <Input
                placeholder="Código"
                placeholderTextColor="#FFF"
                keyboardType="number-pad"
                onChangeText={text => setProductCode(text)}
                onSubmitEditing={() => ref_product_name.current.focus()}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="Nome"
                autoCapitalize="words"
                placeholderTextColor="#FFF"
                onChangeText={text => setProductName(text)}
                ref={ref_product_name}
                onSubmitEditing={() => ref_product_price.current.focus()}
              />
            </InputContainer>

            <InputContainer>
              <Input
                placeholder="Preço"
                keyboardType="numeric"
                placeholderTextColor="#FFF"
                onChangeText={text => setProductPrice(text)}
                ref={ref_product_price}
              />
            </InputContainer>

            {loading ? (
              <ActivityIndicator size="large" color={'##0f0'} />
            ) : (
              <Button disabled={disabled} onPress={() => registrarProduto()}>
                <TextButton disabled> CADASTRAR </TextButton>
              </Button>
            )}
          </>
        ) : (
          <NoPermission> Somente admin pode cadastrar produtos.. </NoPermission>
        )}
      </Container>
    </>
  );
}

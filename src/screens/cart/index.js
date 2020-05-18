import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RNToasty} from 'react-native-toasty';
import {ActivityIndicator} from 'react-native';

import {
  ScrollView,
  Container,
  ContainerList,
  Title,
  ButtonContainer,
  Button,
  TextButton,
  NoProducts,
} from './styles';

import Header from '../../components/header';

import {clearCart} from '../../store/ducks/cart';

export default function Cart() {
  const {productsCart} = useSelector(state => state.cart);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function finish() {
    setLoading(true);

    setTimeout(() => {
      dispatch(clearCart());

      setLoading(false);

      RNToasty.Success({
        title: 'Finalizado!',
        withIcon: false,
      });
    }, 2000);
  }

  return (
    <>
      <ScrollView>
        <Header>Compras - Carrinho</Header>

        <Container>
          {productsCart.length === 0 ? (
            <NoProducts>Nada ainda!</NoProducts>
          ) : (
            <>
              {productsCart.map(product => {
                return (
                  <ContainerList key={product.productCode}>
                    <Title>Nome: {product.productName}</Title>
                    <Title>Preço: {product.productPrice}</Title>
                    <Title>Código: {product.productCode}</Title>
                  </ContainerList>
                );
              })}
            </>
          )}
        </Container>
      </ScrollView>

      <ButtonContainer>
        {loading ? (
          <ActivityIndicator size="large" color={'#0f0'} />
        ) : (
          <Button onPress={() => finish()}>
            <TextButton>Finalizar</TextButton>
          </Button>
        )}
      </ButtonContainer>
    </>
  );
}

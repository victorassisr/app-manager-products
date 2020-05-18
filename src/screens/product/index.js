import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RNToasty} from 'react-native-toasty';

import {
  ScrollView,
  Container,
  ContainerList,
  Title,
  Button,
  TextButton,
  NoProducts,
} from './styles';

import Header from '../../components/header';

import {setProductCart} from '../../store/ducks/cart';

export default function Product() {
  const {products} = useSelector(state => state.product);
  const dispatch = useDispatch();

  function enviarParaCarrinho(product) {
    const data = {
      productCode: product.productCode,
      productName: product.productName,
      productPrice: product.productPrice,
    };

    setTimeout(() => {
      dispatch(setProductCart(data));

      RNToasty.Success({
        title: 'Adicionado ao carrinho!',
        withIcon: false,
      });
    }, 2000);
  }

  return (
    <ScrollView>
      <Header>Produtos</Header>

      <Container>
        {products.length === 0 ? (
          <NoProducts>Nada ainda!</NoProducts>
        ) : (
          <>
            {products.map(product => {
              return (
                <ContainerList key={product.productCode}>
                  <Title>Nome: {product.productName}</Title>
                  <Title>Preço: {product.productPrice}</Title>
                  <Title>Código: {product.productCode}</Title>

                  <Button onPress={() => enviarParaCarrinho(product)}>
                    <TextButton>+ Carrinho</TextButton>
                  </Button>
                </ContainerList>
              );
            })}
          </>
        )}
      </Container>
    </ScrollView>
  );
}

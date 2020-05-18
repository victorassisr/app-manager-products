import React from 'react';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import ProductScreen from '../screens/product';
import CartScreen from '../screens/cart';

const LoginRoutes = createStackNavigator({
  Login: {
    screen: LoginScreen,
    headerMode: 'none',
    navigationOptions: {headerShown: false},
  },
});

const BottomNavigationStack = createMaterialBottomTabNavigator(
  {
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        title: 'Cadastro',
        tabBarIcon: (
          <IconAntDesign name={'plussquare'} size={22} color="#0f0" />
        ),
      }),
    },

    Product: {
      screen: ProductScreen,
      navigationOptions: () => ({
        title: 'Produtos',
        tabBarIcon: <IconEntypo name={'menu'} size={22} color="#0f0" />,
      }),
    },

    Cart: {
      screen: CartScreen,
      navigationOptions: () => ({
        title: 'Carrinho',
        tabBarIcon: (
          <IconEntypo name={'shopping-cart'} size={22} color="#0f0" />
        ),
      }),
    },
  },
  {
    initialRouteName: 'Register',
    activeColor: '#FFF',
    inactiveColor: '#a9a9a9',
    barStyle: {backgroundColor: '#333'},
  },
);

const PrincipalRoutes = createSwitchNavigator({
  Login: {screen: LoginRoutes},
  BottomNavigationStack,
});

const Routes = createAppContainer(PrincipalRoutes);

export default Routes;

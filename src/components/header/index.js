import React from 'react';
import { View } from 'react-native';

import { HeaderTitle, styles } from './styles';

export default function Header(props) {
  const { children } = props;

  return (
    <View style={styles.headerContainer}>
      <HeaderTitle> { children } </HeaderTitle>
    </View>
  );
}

import React from 'react';

import {Container, Icon, Image, Text} from './styles';

export default function ButtonTwo() {
  return (
    <Container>
      <Icon>
        <Image source={require('../../../public/images/home.png')} />
        <Text>Início</Text>
      </Icon>
      <Icon>
        <Image source={require('../../../public/images/search.png')} />
        <Text>Início</Text>
      </Icon>
      <Icon>
        <Image source={require('../../../public/images/library.png')} />
        <Text>Início</Text>
      </Icon>
    </Container>
  );
}

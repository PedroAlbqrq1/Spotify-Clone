import React from 'react';

import {Container, Image, TextMusic, TextArtist, ImageIcon} from './styles';

export default function ButtonOne() {
  return (
    <Container>
      <Image source={require('../../../public/images/bonbonchocolat.png')} />
      <TextMusic>Bon Bon Chocolat .</TextMusic>
      <TextArtist> EVERGLOW</TextArtist>
      <ImageIcon source={require('../../../public/images/heart.png')} />
      <ImageIcon source={require('../../../public/images/player.png')} />
    </Container>
  );
}

import React from 'react';
import {Image, Text, Container, TextContainer} from './styles';

export default props => {
  return (
    <Container>
      <Image source={props.file} />
      <TextContainer>
        <Text>{props.name}</Text>
      </TextContainer>
    </Container>
  );
};

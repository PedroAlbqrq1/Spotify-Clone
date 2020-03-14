import React, {Component} from 'react';
import {
  Container,
  SettingsButton,
  ContainerButton,
  Image,
  MusicList,
  TextSong,
} from './styles';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import Song from '../../components/Song/Song';
import Profile from '../../components/Profile/Profile';
import ButtonOne from '../../components/ButtonOne/ButtonOne';
import ButtonTwo from '../../components/ButtonTwo/ButtonTwo';
import {ScrollView} from 'react-native';

const data1 = [
  {image: require('../../../public/images/g1.png'), name: 'Lion'},
  {image: require('../../../public/images/g2.png'), name: 'Uh-Oh'},
  {image: require('../../../public/images/d2.png'), name: 'Deja Vu'},
  {image: require('../../../public/images/d3.png'), name: 'PIRI'},
];

const data2 = [
  {image: require('../../../public/images/gidle.png'), name: '(G)I-DLE'},
  {
    image: require('../../../public/images/dreamcatcher.png'),
    name: 'DREAM CATCHER',
  },
  {image: require('../../../public/images/blackpink.png'), name: 'BLACKPINK'},
];

const data3 = [
  {image: require('../../../public/images/b1.png'), name: 'Kill This Love'},
  {
    image: require('../../../public/images/b2.png'),
    name: 'Whistle',
  },
  {image: require('../../../public/images/b3.png'), name: 'Boombayah'},
];

export default class Main extends Component {
  render() {
    changeNavigationBarColor('#000000');
    return (
      <Container>
        <ScrollView>
          <ContainerButton>
            <SettingsButton>
              <Image source={require('../../../public/images/settings.png')} />
            </SettingsButton>
          </ContainerButton>
          <TextSong>Tocadas Recentemente</TextSong>
          <MusicList
            data={data1}
            keyExtractor={item => String(item.name)}
            renderItem={({item}) => <Song file={item.image} name={item.name} />}
            horizontal
          />
          <TextSong>Perfis que você acessou</TextSong>
          <MusicList
            data={data2}
            keyExtractor={item => String(item.name)}
            renderItem={({item}) => (
              <Profile file={item.image} name={item.name} />
            )}
            horizontal
          />
          <TextSong>Não sai dos seus ouvidos</TextSong>
          <MusicList
            data={data1}
            keyExtractor={item => String(item.name)}
            renderItem={({item}) => <Song file={item.image} name={item.name} />}
            horizontal
          />
          <TextSong>Mais de Kpop</TextSong>
          <MusicList
            data={data3}
            keyExtractor={item => String(item.name)}
            renderItem={({item}) => <Song file={item.image} name={item.name} />}
            horizontal
          />
        </ScrollView>
        <ButtonOne />
        <ButtonTwo />
      </Container>
    );
  }
}

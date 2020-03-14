import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #000;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 12px;
  padding-top: 17px;
`;

export const SettingsButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: #fff;
  height: 22px;
  width: 22px;
`;

export const Image = styled.Image`
  width: 22px;
  height: 22px;
`;

export const MusicList = styled.FlatList`
  margin-bottom: 15px;
  height: 185px;
  flex-grow: 0;
`;
export const TextSong = styled.Text`
  font-size: 25px;
  color: #fff;
  margin-left: 17px;
  margin-top: 15px;
`;
export const FlatList = styled.FlatList`
  flex: 1;
`;

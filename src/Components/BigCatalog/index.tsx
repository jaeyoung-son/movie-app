import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity``;
const CatalogImage = styled.Image``;
const InfoContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: flex-start;
`;

const LabelYear = styled.Text`
  background-color: #e70915;
  color: #ffffff;
  padding: 4px 8px;
  margin-left: 4px;
  margin-bottom: 4px;
  font-weight: bold;
  border-radius: 4px;
`;

const SUbInfoContainer = styled.View``;

const Background = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #141414;
  opacity: 0.9;
`;

const LabelTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  padding: 8px 16px 4px 16px;
`;

const LabelGenres = styled.Text`
  font-size: 12px;
  color: #ffffff;
  padding: 4px 16px 8px 16px;
`;

interface Props {
  id: number;
  image: string;
  year: number;
  title: string;
  genres: Array<string>;
  onPress?: (id: number) => void;
}

const BigCatalog = ({id, image, year, title, genres, onPress}: Props) => {
  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        if (onPress && typeof onPress === 'function') {
          onPress(id);
        }
      }}>
      <CatalogImage
        source={{uri: image}}
        style={{width: Dimensions.get('window').width, height: 300}}
      />
      <InfoContainer>
        <LabelYear>{year}년 개봉</LabelYear>
        <SUbInfoContainer>
          <Background />
          <LabelTitle>{title}</LabelTitle>
          <LabelGenres>{genres.join(', ')}</LabelGenres>
        </SUbInfoContainer>
      </InfoContainer>
    </Container>
  );
};

export default BigCatalog;

import React from 'react';
import {FlatList, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-bottom: 24px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;

const ScreenShotImage = styled.Image``;

interface Props {
  images: Array<string>;
}

const ScreenShotList = ({images}: Props) => {
  return (
    <Container>
      <Title>스크린샷</Title>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={images}
        keyExtractor={(item, index) => {
          return `screenShotList=${index}`;
        }}
        renderItem={({item, index}) => (
          <ScreenShotImage
            source={{uri: item}}
            style={{width: Dimensions.get('window').width, height: 200}}
          />
        )}
      />
    </Container>
  );
};

export default ScreenShotList;

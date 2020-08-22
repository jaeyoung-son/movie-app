import React from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View``;
const Title = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;

const CastContainer = styled.View`
  padding: 0px 4px;
`;

const CastImage = styled.Image``;
const LabelName = styled.Text`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 4px 2px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

interface Props {
  cast: Array<ICast>;
}

const CastList = ({cast}: Props) => {
  return (
    <Container>
      <Title>배우</Title>
      <FlatList
        horizontal={true}
        data={cast}
        keyExtractor={(item, index) => {
          return `casList=${index}`;
        }}
        renderItem={({item, index}) => (
          <CastContainer>
            <CastImage
              source={{uri: (item as ICast).url_small_image}}
              style={{width: 100, height: 150}}
            />
          </CastContainer>
        )}
      />
    </Container>
  );
};

export default CastList;

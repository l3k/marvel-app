import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ImageContent, Header, BackButton, Icon, FooterContent } from './styles';

import {CharacterData} from '@src/components/ui/templates/CharacterData'

export function Detail() {
  const { goBack } = useNavigation();

  return (
    <Container>
      <ImageContent source={{ uri: 'http://placeimg.com/640/480' }}>
        <Header>
          <BackButton style={styles.shadow} onPress={goBack}>
            <Icon name="arrow-left" />
          </BackButton>
        </Header>
      </ImageContent>
      <FooterContent>
        <CharacterData />
      </FooterContent>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});


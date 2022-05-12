import React from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ImageContent, Header, BackButton, Icon, FooterContent } from './styles';

import { CharacterData } from '@src/components/ui/templates/CharacterData';
import { useHero } from '@src/hooks/hero';

export function Detail() {
  const { goBack } = useNavigation();
  const { hero, clearHero } = useHero();

  function handleGoBack() {
    clearHero();
    goBack();
  }

  return (
    <Container>
      <ImageContent
        source={{ uri: `${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}` }}
      >
        <Header>
          <BackButton style={styles.shadow} onPress={handleGoBack}>
            <Icon name="arrow-left" />
          </BackButton>
        </Header>
      </ImageContent>
      <FooterContent>
        <CharacterData name={hero.name} comics={hero.comics} />
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


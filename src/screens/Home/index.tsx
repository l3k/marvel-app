import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import _ from 'lodash';

import { Container, Content, WrapperInput } from './styles';

import { Header } from '@src/components/Header';
import { Card } from '@src/components/ui/molecules/Card';
import { Input } from '@src/components/Input';
import { List } from '@src/components/ui/organisms/List';
import { useHero } from '@src/hooks/hero';

export function Home() {
  const theme = useTheme();
  const { loadHeroes } = useHero();

  const handleTextChange = _.debounce((text) => {
    loadHeroes(text);
  }, 500);

  function handleGetCharacters() {}

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <WrapperInput>
          <Input
            placeholder="Busque pelo nome do personagem"
            placeholderTextColor={theme.colors.card}
            icon="search"
            handlePress={handleGetCharacters}
            onChangeText={handleTextChange}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </WrapperInput>
        <List />
      </Content>
    </Container>
  );
}


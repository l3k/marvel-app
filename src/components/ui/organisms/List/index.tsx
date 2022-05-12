import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Container, Separator } from './styles';

import { Card } from '@components/ui/molecules/Card';
import { RootStackParamList } from '@src/utils/RootStackParams';
import { useHero, HeroProps } from '@src/hooks/hero';

type NavProps = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

export function List() {
  const { navigate } = useNavigation<NavProps>();
  const { heroes } = useHero();

  function handleCharacter(character_id: string) {
    navigate('Detail', { character_id });
  }

  return (
    <Container
      data={heroes}
      numColumns={2}
      keyExtractor={(item: HeroProps) => item.id}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item }: { item: HeroProps }) => (
        <Card
          title={item.name}
          img_url={`${item.thumbnail.path}/portrait_xlarge.${item.thumbnail.extension}`}
          handlePress={() => handleCharacter(item.id)}
        />
      )}
    />
  );
}


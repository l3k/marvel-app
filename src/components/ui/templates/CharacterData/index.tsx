import React from 'react';

import {
  Container,
  CharacterTitleContent,
  LineDivisionContent,
  CharacterSubTitleContent,
} from './styles';

import { CharacterTitle } from '@src/components/ui/atoms/CharacterTitle';
import { LineDivision } from '@src/components/ui/atoms/LineDivision';
import { CharacterSubTitle } from '@src/components/ui/atoms/CharacterSubTitle';
import { Comics } from '@src/components/ui/organisms/Comics';

export function CharacterData() {
  return (
    <Container>
      <CharacterTitleContent>
        <CharacterTitle title="Batman" />
      </CharacterTitleContent>
      <LineDivisionContent>
        <LineDivision />
      </LineDivisionContent>
      <CharacterSubTitleContent>
        <CharacterSubTitle subTitle="Quadrinhos que participa" />
      </CharacterSubTitleContent>
      <Comics />
    </Container>
  );
}


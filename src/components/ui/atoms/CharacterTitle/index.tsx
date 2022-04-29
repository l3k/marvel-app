import React from 'react';

import {
  Title
} from './styles';

interface Props {
  title: string
}

export function CharacterTitle({title}:Props){
  return (
    <Title>
      {title}
    </Title>
  );
}
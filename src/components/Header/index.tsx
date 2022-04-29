import React from 'react';

import { Container, Image } from './styles';

import Logo from '@assets/marvel-logo.png';

export function Header() {
  return (
    <Container>
      <Image source={Logo} />
    </Container>
  );
}


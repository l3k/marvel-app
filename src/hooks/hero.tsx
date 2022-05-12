import React, { ReactNode, createContext, useContext, useState } from 'react';

import { getHeroes } from '@services/source/api/MarvelService';

type HeroProviderProps = {
  children: ReactNode;
};

export interface HeroProps {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface IHeroContextData {
  hero: HeroProps;
  heroes: HeroProps[];
  loadHeroes(name?: string): void;
}

const HeroContext = createContext({} as IHeroContextData);

function HeroProvider({ children }: HeroProviderProps) {
  const [hero, setHero] = useState<HeroProps>({} as HeroProps);
  const [heroes, setHeroes] = useState<HeroProps[]>([]);

  async function loadHeroes(name: string) {
    try {
      const response = await getHeroes(name);

      setHeroes(response.data.data.results);
    } catch (error) {}
  }

  return (
    <HeroContext.Provider
      value={{
        hero,
        heroes,
        loadHeroes,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
}

function useHero() {
  const context = useContext(HeroContext);

  return context;
}

export { HeroProvider, useHero };


import httpClient from '@services/client/httpClient';

export async function getHeroes(name: string) {
  try {
    const params = name ? { name } : {};
    const response = await httpClient({
      url: 'characters',
      method: 'GET',
      params,
    });

    return response;
  } catch (error) {
    throw error;
  }
}


const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://carambar-api-pepi.onrender.com/api/v1';

export const getAllJokes = async () => {
  const res = await fetch(`${BASE_URL}/jokes`);
  if (!res.ok) throw new Error('Erreur lors de la récupération des blagues');
  return res.json();
};

export const getRandomJoke = async () => {
  const res = await fetch(`${BASE_URL}/jokes/random`);
  if (!res.ok) throw new Error('Erreur lors de la récupération de la blague');
  return res.json();
};

export const getJokeById = async (id: number | string) => {
  const res = await fetch(`${BASE_URL}/jokes/${id}`);
  if (!res.ok) throw new Error('Blague introuvable');
  return res.json();
};

export const createJoke = async (question: string, answer: string) => {
  const res = await fetch(`${BASE_URL}/jokes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question, answer }),
  });
  if (!res.ok) throw new Error('Erreur lors de l\'ajout de la blague');
  return res.json();
};

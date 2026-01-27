import { useEffect, useState } from 'react';
import { getRandomJoke } from '../api/jokes';
import JokeCard from '../components/JokeCard';
import type { Joke } from 'src/types/jokeType';

const RandomJoke = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRandomJoke = async () => {
  console.log('🔄 Bouton cliqué !'); // Debug
  setLoading(true);
  setError('');
  try {
    const data = await getRandomJoke();
    console.log('📦 Data reçue:', data); // Debug
    setJoke(data.data || data);
  } catch (err: any) {
    console.error('❌ Erreur:', err); // Debug
    setError(err.message || 'Erreur lors du chargement');
    setJoke(null);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4 animate-bounce">🎲</div>
        <p className="text-2xl text-carambar-blue font-bold">Tirage d'une blague...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">😢</div>
        <p className="text-2xl text-carambar-red font-bold mb-6">{error}</p>
        <button
          onClick={fetchRandomJoke}
          className="bg-carambar-blue text-white font-bold px-6 py-3 rounded-full hover:bg-carambar-red transition"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-carambar-blue mb-4">
          🎲 Blague Aléatoire
        </h1>
        <p className="text-xl text-gray-600">
          Une nouvelle blague à chaque clic !
        </p>
      </div>
      
      {/* Animation au changement */}
      <div key={joke?.id} className="max-w-2xl mx-auto mb-8 animate-fade-in">
        {joke && <JokeCard joke={joke} />}
      </div>
      
      <div className="text-center">
        <button
          onClick={fetchRandomJoke}
          className="bg-gradient-to-r from-carambar-yellow to-carambar-orange text-carambar-blue font-bold text-xl px-8 py-4 rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
        >
          🔄 Autre Blague
        </button>
      </div>
    </div>
  );
};

export default RandomJoke;

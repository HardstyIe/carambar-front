import { useEffect, useState } from 'react';
import { getAllJokes } from '../api/jokes';
import JokeCard from '../components/JokeCard';

interface Joke {
  id: number;
  question: string;
  answer: string;
  createdAt?: string;
  updatedAt?: string;
}

const AllJokes = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const data = await getAllJokes();
        setJokes(data.data || []);
      } catch (err: any) {
        setError(err.message || 'Erreur lors du chargement');
      } finally {
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4 animate-bounce">🍬</div>
        <p className="text-2xl text-carambar-blue font-bold">Chargement des blagues...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">😢</div>
        <p className="text-2xl text-carambar-red font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-carambar-blue mb-4">
          📚 Toutes les Blagues Carambar
        </h1>
        <p className="text-xl text-gray-600">
          {jokes.length} blague{jokes.length > 1 ? 's' : ''} à découvrir !
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jokes.map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}
      </div>

      {jokes.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">😕</div>
          <p className="text-2xl text-gray-600">Aucune blague disponible pour le moment.</p>
        </div>
      )}
    </div>
  );
};

export default AllJokes;

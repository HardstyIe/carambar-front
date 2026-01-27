import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getJokeById } from '../../api/jokes';
import type { Joke } from 'src/types/jokeType';


const JokeById = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      navigate('/jokes');
      return;
    }

    const fetchJoke = async () => {
      try {
        const data = await getJokeById(id);
        setJoke(data.data || data);
      } catch (err: any) {
        setError(err.message || 'Blague introuvable');
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4 animate-bounce">🍬</div>
        <p className="text-2xl text-carambar-blue font-bold">Chargement de la blague...</p>
      </div>
    );
  }

  if (error || !joke) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">😢</div>
        <p className="text-2xl text-carambar-red font-bold mb-6">{error}</p>
        <Link
          to="/jokes"
          className="bg-carambar-blue text-white font-bold px-6 py-3 rounded-full hover:bg-carambar-red transition inline-block"
        >
          ← Retour aux blagues
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/jokes"
            className="inline-flex items-center text-carambar-blue font-semibold hover:text-carambar-red transition"
          >
            ← Retour à toutes les blagues
          </Link>
        </div>

        {/* Joke Details */}
        <div className="bg-white rounded-xl shadow-2xl p-8 border-4 border-carambar-yellow">
          <div className="text-center mb-6">
            <span className="bg-gradient-to-r from-carambar-yellow to-carambar-orange text-carambar-blue font-bold text-xl px-6 py-2 rounded-full">
              Blague #{joke.id}
            </span>
          </div>

          <div className="space-y-8">
            {/* Question */}
            <div className="bg-gradient-to-br from-carambar-yellow to-carambar-orange rounded-xl p-6 border-4 border-white">
              <div className="flex items-start gap-4">
                <span className="text-5xl">❓</span>
                <div className="flex-1">
                  <h2 className="text-sm font-bold text-carambar-red mb-2">QUESTION</h2>
                  <p className="text-2xl font-bold text-carambar-blue leading-relaxed">
                    {joke.question}
                  </p>
                </div>
              </div>
            </div>

            {/* Answer */}
            <div className="bg-gradient-to-br from-carambar-red to-carambar-blue rounded-xl p-6 border-4 border-white">
              <div className="flex items-start gap-4">
                <span className="text-5xl">😂</span>
                <div className="flex-1">
                  <h2 className="text-sm font-bold text-carambar-yellow mb-2">RÉPONSE</h2>
                  <p className="text-2xl font-bold text-white leading-relaxed">
                    {joke.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Metadata */}
          {joke.createdAt && (
            <div className="mt-6 pt-6 border-t-2 border-gray-200 text-center text-sm text-gray-500">
              <p>Ajoutée le {new Date(joke.createdAt).toLocaleDateString('fr-FR')}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            to="/jokes/random"
            className="bg-gradient-to-r from-carambar-yellow to-carambar-orange text-carambar-blue font-bold px-6 py-3 rounded-full hover:scale-105 transition shadow-lg"
          >
            🎲 Blague Aléatoire
          </Link>
          <Link
            to="/jokes"
            className="bg-carambar-blue text-white font-bold px-6 py-3 rounded-full hover:bg-carambar-red transition shadow-lg"
          >
            📚 Toutes les Blagues
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JokeById;

import { useEffect, useState } from "react";
import { getAllJokes } from "../api/jokes";
import JokeCard from "../components/JokeCard";
import type { Joke } from "../types/jokeType";
import AddJoke from "./jokes/AddJoke";

type ViewMode = 'idle' | 'all' | 'random' | 'add';

const Home = () => {
  const [mode, setMode] = useState<ViewMode>('idle');
  const [allJokes, setAllJokes] = useState<Joke[]>([]);
  const [currentRandomJoke, setCurrentRandomJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  // Charge toutes les blagues une seule fois
  useEffect(() => {
    if (mode === 'all' || mode === 'random') {
      if (allJokes.length === 0) {
        fetchAllJokes();
      } else if (mode === 'random' && !currentRandomJoke) {
        showRandomJoke();
      }
    }
  }, [mode]);

  const fetchAllJokes = async () => {
    setLoading(true);
    try {
      const data = await getAllJokes();
      const jokes = data.data || [];
      setAllJokes(jokes);
      
      // Si on est en mode random, affiche une blague directement
      if (mode === 'random' && jokes.length > 0) {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        setCurrentRandomJoke(jokes[randomIndex]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Change de blague instantanément (sans fetch)
  const showRandomJoke = () => {
    if (allJokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * allJokes.length);
      setCurrentRandomJoke(allJokes[randomIndex]);
    }
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-carambar-yellow via-carambar-orange to-carambar-red text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-bounce-slow inline-block mb-6">
            <img src="./carambar.png" alt="Carambar" className="h-32 w-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Bienvenue chez Carambar Jokes !
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Découvre les meilleures blagues Carambar ! Rigole, partage, et ajoute tes propres blagues nulles 😄
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setMode('all')}
              className="bg-carambar-blue text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-110 transition shadow-2xl"
            >
              📚 Blagues garanties
            </button>
            <button
              onClick={() => setMode('random')}
              className="bg-white text-carambar-red font-bold text-lg px-8 py-4 rounded-full hover:scale-110 transition shadow-2xl"
            >
              🎲 Mode random
            </button>
            <button
              onClick={() => setMode('add')}
              className="bg-carambar-red text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-110 transition shadow-2xl"
            >
              ➕ Ajouter une blague
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-carambar-blue mb-12">
            Pourquoi Carambar Jokes ? 🤔
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button 
              onClick={() => setMode('all')} 
              className="bg-gradient-to-br from-carambar-yellow to-carambar-orange rounded-xl p-8 text-center shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-6xl mb-4">😂</div>
              <h3 className="text-2xl font-bold text-carambar-blue mb-3">
                Blagues Garanties
              </h3>
              <p className="text-gray-700">
                Des blagues testées et approuvées par des générations de mangeurs de Carambar !
              </p>
            </button>

            <button 
              onClick={() => setMode('random')} 
              className="bg-gradient-to-br from-carambar-orange to-carambar-red rounded-xl p-8 text-center shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-6xl mb-4">🎲</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Mode Random
              </h3>
              <p className="text-white">
                Laisse le hasard choisir ta prochaine blague ! Surprise garantie à chaque clic.
              </p>
            </button>

            <button 
              onClick={() => setMode('add')}
              className="bg-gradient-to-br from-carambar-red to-carambar-blue rounded-xl p-8 text-center shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-6xl mb-4">➕</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Ajoute tes Blagues
              </h3>
              <p className="text-white">
                Tu as une blague nulle à partager ? Ajoute-la et fais rire la communauté !
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-carambar-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-carambar-red mb-2">{allJokes.length || '10+'}+</div>
              <p className="text-xl text-carambar-blue font-semibold">Blagues Disponibles</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-carambar-orange mb-2">100%</div>
              <p className="text-xl text-carambar-blue font-semibold">Nulles mais Drôles</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-carambar-yellow mb-2">∞</div>
              <p className="text-xl text-carambar-blue font-semibold">Fous Rires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Display Section */}
      <section className="container mx-auto px-4 py-12">
        {loading && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 animate-bounce">🍬</div>
            <p className="text-2xl text-carambar-blue font-bold">Chargement...</p>
          </div>
        )}

        {/* All Jokes */}
        {!loading && mode === 'all' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-carambar-blue mb-4">
                📚 Toutes les Blagues Carambar
              </h2>
              <p className="text-xl text-gray-600">
                {allJokes.length} blague{allJokes.length > 1 ? 's' : ''} à découvrir !
              </p>
              <button
                onClick={() => setMode('idle')}
                className="mt-4 text-carambar-blue font-bold hover:text-carambar-red transition"
              >
                ← Retour à l'accueil
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allJokes.map((joke) => (
                <JokeCard key={joke.id} joke={joke} />
              ))}
            </div>
          </div>
        )}

        {/* Random Joke */}
        {!loading && mode === 'random' && currentRandomJoke && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-carambar-blue mb-4">
                🎲 Blague Aléatoire
              </h2>
              <p className="text-xl text-gray-600">Une nouvelle blague à chaque clic !</p>
              <button
                onClick={() => setMode('idle')}
                className="mt-4 text-carambar-blue font-bold hover:text-carambar-red transition"
              >
                ← Retour à l'accueil
              </button>
            </div>
            
            {/* Animation de transition */}
            <div 
              key={currentRandomJoke.id} 
              className="max-w-2xl mx-auto mb-8 animate-fade-in"
            >
              <JokeCard joke={currentRandomJoke} />
            </div>
            
            <div className="text-center">
              <button
                onClick={showRandomJoke}
                className="bg-gradient-to-r from-carambar-yellow to-carambar-orange text-carambar-blue font-bold text-xl px-8 py-4 rounded-full hover:scale-110 transition-all duration-200 shadow-lg"
              >
                🔄 Autre Blague
              </button>
            </div>
          </div>
        )}

        {/* Add Joke */}
        {!loading && mode === 'add' && (
          <div>
            <div className="text-center mb-8">
              <button
                onClick={() => setMode('idle')}
                className="text-carambar-blue font-bold hover:text-carambar-red transition"
              >
                ← Retour à l'accueil
              </button>
            </div>
            <AddJoke />
          </div>
        )}

        {/* Idle State */}
        {!loading && mode === 'idle' && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎯</div>
            <p className="text-2xl text-gray-600">
              Clique sur un bouton ci-dessus pour commencer !
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;

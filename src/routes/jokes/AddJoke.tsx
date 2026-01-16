import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createJoke } from '../../api/jokes';

const AddJoke = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await createJoke(question, answer);
      // Redirection vers toutes les blagues après ajout
      navigate('/jokes');
    } catch (err: any) {
      setError(err.message || 'Erreur lors de l\'ajout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-carambar-blue mb-4">
            ➕ Ajouter une Blague
          </h1>
          <p className="text-xl text-gray-600">
            Partage ta blague la plus nulle avec la communauté !
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 border-4 border-carambar-yellow">
          {error && (
            <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
              <p className="font-bold">Erreur :</p>
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-bold text-carambar-blue mb-2">
                ❓ Question
              </label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ex: Pourquoi les poissons n'aiment pas jouer au tennis ?"
                className="w-full p-4 border-2 border-carambar-orange rounded-lg focus:outline-none focus:border-carambar-red text-lg"
                required
                minLength={3}
                maxLength={500}
              />
              <p className="text-sm text-gray-500 mt-1">
                {question.length}/500 caractères
              </p>
            </div>

            <div>
              <label className="block text-lg font-bold text-carambar-blue mb-2">
                😂 Réponse
              </label>
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Ex: Parce qu'ils ont peur du filet"
                className="w-full p-4 border-2 border-carambar-orange rounded-lg focus:outline-none focus:border-carambar-red text-lg"
                required
                minLength={1}
                maxLength={500}
              />
              <p className="text-sm text-gray-500 mt-1">
                {answer.length}/500 caractères
              </p>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-carambar-yellow to-carambar-orange text-carambar-blue font-bold text-xl py-4 rounded-full hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? '⏳ Ajout en cours...' : '✅ Ajouter la Blague'}
              </button>
              
              <button
                type="button"
                onClick={() => navigate('/jokes')}
                className="bg-gray-300 text-gray-700 font-bold px-6 py-4 rounded-full hover:bg-gray-400 transition"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-carambar-light border-2 border-carambar-yellow rounded-lg p-6">
            <p className="text-lg text-carambar-blue">
              <span className="font-bold">💡 Astuce :</span> Plus c'est nul, plus c'est drôle ! 😄
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJoke;

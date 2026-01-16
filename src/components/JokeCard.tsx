import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Joke {
  id: number;
  question: string;
  answer: string;
  createdAt?: string;
  updatedAt?: string;
}

interface JokeCardProps {
  joke: Joke;
  showAnswer?: boolean;
}

const JokeCard = ({ joke, showAnswer = false }: JokeCardProps) => {
  const [isFlipped, setIsFlipped] = useState(showAnswer);

  return (
    <div
      className="relative w-full h-[280px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* Front - Question */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-carambar-yellow to-carambar-orange rounded-xl shadow-lg p-6 border-4 border-white"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">❓</span>
                <span className="bg-white text-carambar-red font-bold px-3 py-1 rounded-full text-sm">
                  #{joke.id}
                </span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-carambar-blue leading-relaxed">
                {joke.question}
              </p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-carambar-red font-semibold animate-pulse">
                👆 Clique pour voir la réponse !
              </p>
            </div>
          </div>
        </div>

        {/* Back - Answer */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-carambar-red to-carambar-blue rounded-xl shadow-lg p-6 border-4 border-white"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">😂</span>
                <Link
                  to={`/jokes/${joke.id}`}
                  className="bg-white text-carambar-blue hover:bg-carambar-yellow font-bold px-3 py-1 rounded-full text-sm transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  Voir détails
                </Link>
              </div>
              <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                {joke.answer}
              </p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-carambar-yellow font-semibold">
                👆 Clique pour voir la question !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeCard;

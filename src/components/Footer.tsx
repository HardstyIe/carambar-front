import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-carambar-blue text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-carambar-yellow">
              🍬 Carambar Jokes
            </h3>
            <p className="text-sm text-gray-300">
              Les meilleures blagues Carambar, toujours prêtes à vous faire sourire !
              Projet CDA - Wild Code School
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-carambar-yellow">
              Liens Rapides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-carambar-yellow transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/jokes/random" className="text-gray-300 hover:text-carambar-yellow transition">
                  Blague Random
                </Link>
              </li>
              <li>
                <Link to="/jokes" className="text-gray-300 hover:text-carambar-yellow transition">
                  Toutes les Blagues
                </Link>
              </li>
              <li>
                <Link to="/jokes/add" className="text-gray-300 hover:text-carambar-yellow transition">
                  Ajouter une Blague
                </Link>
              </li>
            </ul>
          </div>

          {/* API Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-carambar-yellow">
              API & Docs
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://carambar-api-pepi.onrender.com/api-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-carambar-yellow transition"
                >
                  📚 Documentation Swagger
                </a>
              </li>
              <li>
                <a
                  href="https://carambar-api-pepi.onrender.com/health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-carambar-yellow transition"
                >
                  ❤️ Health Check
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Carambar Jokes API - Projet CDA</p>
          <p className="mt-2">Fait avec 💙 et beaucoup de blagues nulles</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllJokes from './routes/AllJokes';
import Home from './routes/Home';
import RandomJoke from './routes/RandomJoke';
import AddJoke from './routes/jokes/AddJoke';
import JokeById from './routes/jokes/JokeById';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-carambar-light">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jokes" element={<AllJokes />} />
            <Route path="/random" element={<RandomJoke />} />
            <Route path="/jokes/add" element={<AddJoke />} />
            <Route path="/jokes/:id" element={<JokeById />} />
            <Route path="*" element={
              <div className="container mx-auto p-8 text-center">
                <h1 className="text-4xl font-bold text-carambar-red mb-4">404</h1>
                <p className="text-xl text-carambar-blue">Page introuvable 😢</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

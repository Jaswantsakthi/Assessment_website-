import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-xl font-bold">The Communion Hub</Link>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Desktop navigation */}
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                <Link to="/events" className="text-gray-600 hover:text-gray-900">Events</Link>
              </div>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link
                    to="/"
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/events"
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Events
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
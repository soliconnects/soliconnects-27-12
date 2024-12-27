import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

// Scrollable container for each route
function ScrollablePage({ sections }) {
  return (
    <div className="scrollable-container">
      {sections.map(({ id, Component }) => (
        <section key={id} id={id} className="scroll-section">
          <Component />
        </section>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <ScrollablePage
              sections={[
                { id: 'home', Component: Home },
                { id: 'services', Component: Services },
                { id: 'about', Component: About },
                { id: 'contact', Component: Contact },
              ]}
            />
          }
        />
        {/* Individual routes */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

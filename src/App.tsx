import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ImpressumPage from './components/Legal/ImpressumPage';
import DatenschutzPage from './components/Legal/DatenschutzPage';
import MetaTags from './components/SEO/MetaTags';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <MetaTags />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
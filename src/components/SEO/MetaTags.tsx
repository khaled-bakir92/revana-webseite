import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const MetaTags = ({
  title = 'Revana Khibo - Deutsch Lehrerin und Erzieherin',
  description = 'Deutsch-Lehrerin und Erzieherin mit einer Leidenschaft für die Arbeit mit Menschen aus unterschiedlichen kulturellen Hintergründen. Based in Berlin, Germany.',
  keywords = 'Deutschlehrerin Berlin, Erzieherin mit Deutschunterricht, Deutschunterricht für Kinder, Sprachförderung im Kindergarten, Deutsch als Zweitsprache für Kinder, Arabischlehrerin, Arabischlehrerin Berlin,Arabischunterricht für Kinder, Arabisch lernen online, Arabisch für Anfänger, Arabisch Nachhilfe, Online-Unterricht, Online Deutschunterricht, Online Arabischunterricht, Virtueller Sprachunterricht, Online Sprachkurse für Kinder, Interaktiver Online-Unterricht, Sprachförderung für Kinder, Sprachförderung im Vorschulalter, Kreative Sprachförderung für Kinder, Spielerische Sprachentwicklung, Sprachförderung durch Spiele, Sprachentwicklung im Kindergarten, Deutsch Prüfungsvorbereitung, Vorbereitung Goethe-Zertifikat, TestDaF Vorbereitungskurs, telc Deutsch Vorbereitung, Deutschprüfung Training, Intensivkurs Deutschprüfung, Eltern- und Familienberatung, Sprachförderung für mehrsprachige Familien, Tipps zur Sprachentwicklung zuhause, Elternberatung Sprachförderung, Mehrsprachigkeit im Alltag fördern, Familienberatung Sprachentwicklung, Arabischunterricht für Kinder, Spielerischer Arabischunterricht, Arabisch für Kinder in Berlin, Aramäisch lernen für Kinder, Arabischkurs für Kinder, Altersgerechter Arabischunterricht',
  image = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', 
  url = 'https://rewekhibo.dev' 
}: MetaTagsProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English, Deutsch" />
      <meta name="author" content="Revana Khibo" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;
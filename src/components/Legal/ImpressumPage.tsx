import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ImpressumPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F9F9F3] pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleBack}
          className="mb-8 inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Zurück
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="prose prose-lg">
          <h2 className="text-sm font-bold text-gray-900">Angaben gemäß § 5 TMG</h2>
          <p>
            Revana Khibo
            <br />
            10315 Berlin
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 1752555047
            <br />
            E-Mail: revana.khibo94@gmail.com
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            DE *** *** ***
          </p>
          <br />
          <h2 className="text-sm font-bold text-gray-900">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Revana Khibo
            <br />
          </p>

          <h2 className="text-sm font-bold text-gray-900">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            übernehmen wir jedoch keine Gewähr.
          </p>
          <br />
          <h2 className="text-sm font-bold text-gray-900">Externe Links</h2>
          <p>
            Unsere Webseite kann Links zu externen Webseiten enthalten. Für die
            Inhalte der verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
          <br/>
          <h2 className="text-sm font-bold text-gray-900">Bildrechte</h2>
          <p>
            Die auf dieser Webseite verwendeten Bilder sind urheberrechtlich
            geschützt. Die Rechte liegen bei den jeweiligen Fotografen oder
            Urhebern.
          </p>
          <br/>
          <h2 className="text-sm font-bold text-gray-900">Gestaltungs- und Entwicklungsnachweis</h2>
          <p>
            Diese Webseite wurde von Khaled Bakir programmiert, gestaltet und
            optimiert. Verantwortlich für:
          </p>
          <ol>
            <li>
              Webentwicklung: Erstellung und Umsetzung des technischen Designs.
            </li>
            <li>Webdesign: Gestaltung und visuelle Elemente.</li>
            <li>
              SEO: Suchmaschinenoptimierung zur Verbesserung der Auffindbarkeit.
            </li>
          </ol>
          <h2>
            Für Rückfragen oder Anfragen zur Webentwicklung erreichen Sie mich
            unter:{" "}
            <a className="text-sm font-bold text-gray-900" href="mailto:khaled.bakir92@gmail.com">
              khaled.bakir92@gmail.com
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;

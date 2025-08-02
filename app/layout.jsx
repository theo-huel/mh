// ❌ NE METS PAS "use client" ici !
import './globals.css'; // si tu as un fichier global CSS
import Navbarlogo from './components/NavBarLogo';
import Footer from './components/Footer';
import I18nProvider from './components/I18nProvider';

export const metadata = {
  title: 'MH Business',
  description: 'Votre partenaire digital',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <I18nProvider>
          <Navbarlogo />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}

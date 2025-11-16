import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Skyline Productions | הפקת אירועי קונספט',
  description: 'הפקת אירועי יוקרה בניהול מלא.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

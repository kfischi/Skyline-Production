import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/ui/FloatingActions';
import AccessibilityWidget from '@/components/ui/AccessibilityWidget';
import ChatBot from '@/components/layout/ChatBot';
import { getContactInfo } from '@/lib/data';

export const metadata = {
  title: 'Skyline Productions | הפקת אירועי קונספט',
  description: 'הפקת אירועי יוקרה בניהול מלא.',
};

export default function RootLayout({ children }) {
  const contactInfo = getContactInfo();

  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions contactInfo={contactInfo} />
        <AccessibilityWidget />
        <ChatBot />
      </body>
    </html>
  );
}

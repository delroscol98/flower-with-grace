import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { NavigationProvider } from "./_contexts/NavigationContext";
import "./globals.css";

export const metadata = {
  title: "Flower with Grace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationProvider>
          <Header />
        </NavigationProvider>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

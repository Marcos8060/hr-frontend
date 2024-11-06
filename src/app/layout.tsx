"use client";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { AuthProvider } from '../assets/context/use-context';
import { Provider } from "react-redux";
import { store } from './redux/store';
import { PrimeReactProvider } from 'primereact/api';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";     // Core CSS

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Visitrack</title>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Provider store={store}>
          <PrimeReactProvider>
            <AuthProvider>
              <Toaster position="top-center" />
              {children}
            </AuthProvider>
          </PrimeReactProvider>
        </Provider>
      </body>
    </html>
  );
}

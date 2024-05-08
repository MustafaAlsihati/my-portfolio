import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Roboto } from 'next/font/google';
import data from '../constants/data.json';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'],
});

const { name } = data;

export const metadata: Metadata = {
  title: `${name}'s Portfolio`,
  description: 'Portfolio ' + name + ' skills, Projects, Experience, Resume',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="black" />
      </head>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}

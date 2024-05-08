import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import data from '../constants/data.json';
import './globals.css';

const { name } = data;

export const metadata: Metadata = {
  title: `${name}'s Portfolio`,
  description: 'Portfolio ' + name + ' skills, Projects, Experience, Resume',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="black" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}

'use client';

import { IconButton } from '@/components/ui/icon-button';
import data from '@/constants/data.json';
import { SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const { name } = data;

export const AppBar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="flex-grow bg-card dark:bg-cardDark py-4 fixed w-full z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h6 className="text-xl text-text dark:text-textDark">{name}</h6>
          <IconButton onClick={toggleTheme}>
            <SunIcon className="text-text dark:text-textDark" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

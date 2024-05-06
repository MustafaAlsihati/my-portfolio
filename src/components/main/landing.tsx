'use client';

import data from '@/constants/data.json';
import { iconify } from '@/ts/utils';
import { Fade, Tooltip, Zoom } from '@material-ui/core';
import { BanIcon } from 'lucide-react';
import Image from 'next/image';
import ReactTyped from 'react-typed';
import simpleIcons from 'simple-icons';

const { landing } = data;

const professionalDetails = landing.professionalDetails.map(
  ({ alt, icon, link }) => {
    const iconFromSimpleIcons = simpleIcons.get(iconify(icon));
    return {
      alt,
      backgroundColor: '#' + iconFromSimpleIcons.hex,
      icon: iconFromSimpleIcons.path ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>{icon}</title>
          <path d={iconFromSimpleIcons.path} fill="white" />
        </svg>
      ) : (
        <BanIcon className="text-zinc-500" />
      ),
      link,
    };
  },
);

export const Landing = () => {
  return (
    <div
      className="flex flex-row justify-center items-center grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-0 pb-[80px]"
      style={{ minHeight: `calc(100vh - 32px)` }}>
      <div>
        <h1 className="text-text dark:text-textDark text-6xl md:text-8xl">
          {landing.title}
        </h1>
        <h2 className="text-text dark:text-textDark text-2xl md:text-4xl mb-12 mt-8">
          <ReactTyped
            strings={landing.subtitles}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
        <div className="container flex flex-row gap-4">
          {professionalDetails.map(({ alt, icon, link }: any, i) => {
            return (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                <Zoom in={true} style={{ transitionDelay: `${100 * i}ms` }}>
                  <Tooltip title={alt} placement="top">
                    <div
                      className="rounded-lg"
                      style={{
                        backgroundColor: professionalDetails[i].backgroundColor,
                        padding: 16,
                        height: 64,
                        width: 64,
                      }}>
                      {icon}
                    </div>
                  </Tooltip>
                </Zoom>
              </a>
            );
          })}
        </div>
      </div>

      <div className="hidden md:flex">
        <Fade in={true} style={{ transitionDelay: '100ms' }}>
          <div>
            <Image
              src="/landing.svg"
              alt="Landing"
              width={900.94}
              height={787}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

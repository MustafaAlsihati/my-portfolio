'use client';

import { Tooltip } from '@/components/ui/tool-tip';
import data from '@/constants/data.json';
import { iconify } from '@/ts/utils';
import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 'all' }}>
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
        </motion.div>
        <div className="container flex flex-row gap-4">
          {professionalDetails.map(({ alt, icon, link }: any, i) => {
            return (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}>
                  <Tooltip text={alt}>
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
                </motion.div>
              </a>
            );
          })}
        </div>
      </div>

      <motion.div
        className="hidden md:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 'all' }}>
        <Image src="/landing.svg" alt="Landing" width={900.94} height={787} />
      </motion.div>
    </div>
  );
};

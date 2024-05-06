'use client';

import data from '@/constants/data.json';
import useAnimate from '@/hooks/useAnimate';
import { iconify } from '@/ts/utils';
import { Fade, Tooltip, Zoom } from '@material-ui/core';
import { BanIcon } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useRef } from 'react';
import simpleIcons from 'simple-icons';

const { skills } = data;

export const Skills = () => {
  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  const wrappedSkills = useMemo(() => {
    let _wrappedSkills: {
      [key: string]: {
        alt: string;
        backgroundColor: string;
        icon: JSX.Element;
      }[];
    } = {};
    Object.getOwnPropertyNames(skills).forEach(type => {
      _wrappedSkills[type] = wrapper(skills[type]);
    });
    return _wrappedSkills;
  }, []);

  return (
    <div
      className="container px-6 md:px-0 flex flex-col lg:flex-row gap-24 items-center justify-center pb-[80px]"
      style={{ minHeight: `calc(100vh - 32px)` }}>
      <div ref={animRef}>
        <h3 className="text-text dark:text-textDark text-2xl md:text-4xl mb-6 text-center">
          Skills
        </h3>
        <Fade in={animate} style={{ transitionDelay: '100ms' }}>
          <div>
            <Image alt="Skills" src="/skill.svg" width={1139} height={655} />
          </div>
        </Fade>
      </div>
      <div className="container flex flex-col items-center md:items-end gap-8">
        {Object.getOwnPropertyNames(wrappedSkills).map((title, id) => (
          <div key={id} className="mb-[32px]">
            <p className="text-text dark:text-textDark text-2xl text-center md:text-right mb-4">
              {title}
            </p>
            <div className="container flex flex-row flex-wrap gap-2 justify-center sm:justify-end">
              {wrappedSkills[title].map(({ alt, icon }, i) => {
                return (
                  <div key={i}>
                    <Zoom
                      in={animate}
                      style={{ transitionDelay: `${150 * i}ms` }}>
                      <Tooltip title={alt.replace('_', ' ')} placement="top">
                        <div
                          className="rounded-lg"
                          style={{
                            backgroundColor:
                              wrappedSkills[title][i].backgroundColor,
                            padding: 16,
                            height: 64,
                            width: 64,
                          }}>
                          {icon}
                        </div>
                      </Tooltip>
                    </Zoom>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const wrapper = (
  sk: (string | { alt: string; icon: string; backgroundColor: string })[],
) => {
  return sk.map(v => {
    const iconFromSimpleIcons = simpleIcons.get(
      iconify(typeof v === 'string' ? v : v.icon),
    );
    return {
      alt: iconFromSimpleIcons.title ?? '',
      backgroundColor: '#' + iconFromSimpleIcons.hex,
      icon: iconFromSimpleIcons.path ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="100%"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>{iconFromSimpleIcons.title}</title>
          <path d={iconFromSimpleIcons.path} fill="white" />
        </svg>
      ) : (
        <BanIcon className="text-zinc-500" />
      ),
    };
  });
};

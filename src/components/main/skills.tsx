'use client';

import { Tooltip } from '@/components/ui/tool-tip';
import data from '@/constants/data.json';
import { iconify } from '@/ts/utils';
import { motion } from 'framer-motion';
import { BanIcon } from 'lucide-react';
import Image from 'next/image';
import simpleIcons from 'simple-icons';

const { skills } = data;

export const Skills = () => {
  const data = wrappedSkills();
  return (
    <div
      className="container px-6 md:px-0 flex flex-col lg:flex-row gap-24 items-center justify-center pb-[80px]"
      style={{ minHeight: `calc(100vh - 32px)` }}>
      <div>
        <h3 className="text-text dark:text-textDark text-2xl md:text-4xl mb-6 text-center">
          Skills
        </h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 'all' }}>
          <Image alt="Skills" src="/skill.svg" width={1139} height={655} />
        </motion.div>
      </div>
      <div className="container flex flex-col items-center md:items-end gap-8">
        {Object.getOwnPropertyNames(data).map((title, id) => (
          <div key={id} className="mb-[32px]">
            <p className="text-text dark:text-textDark text-2xl text-center md:text-right mb-4">
              {title}
            </p>
            <div className="container flex flex-row flex-wrap gap-2 justify-center sm:justify-end">
              {data[title].map(({ alt, icon }, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}>
                    <Tooltip text={alt.replace('_', ' ')}>
                      <div
                        className="rounded-lg"
                        style={{
                          backgroundColor: data[title][i].backgroundColor,
                          padding: 16,
                          height: 64,
                          width: 64,
                        }}>
                        {icon}
                      </div>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const wrappedSkills = () => {
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
};

const wrapper = (
  sk: (string | { alt: string; icon: string; backgroundColor: string })[],
) => {
  return sk.map(v => {
    const iconFromSimpleIcons = simpleIcons.get(
      iconify(typeof v === 'string' ? v : v.icon),
    );
    return {
      alt:
        (v as any).alt ??
        iconFromSimpleIcons?.title ??
        (typeof v === 'string' ? v : v.icon) ??
        '',
      backgroundColor: '#' + (iconFromSimpleIcons?.hex ?? '000000'),
      icon: iconFromSimpleIcons?.path ? (
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

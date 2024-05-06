'use client';

import data from '@/constants/data.json';
import useAnimate from '@/hooks/useAnimate';
import { getHumanDiff } from '@/ts/utils';
import { Fade } from '@material-ui/core';
import { Calendar, Code, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const { experience } = data;

export const Experience = () => {
  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center pb-[80px] container px-6 md:px-0"
      style={{ minHeight: `calc(100vh - 32px)` }}>
      <div>
        <h3 className="text-text dark:text-textDark text-2xl md:text-4xl mb-6 text-center">
          Experience
        </h3>
        <Fade in={animate} style={{ transitionDelay: '250ms' }}>
          <div className="max-w-md">
            <Image
              alt="Experience"
              src="/experience.svg"
              width={996.46}
              height={828.18}
            />
          </div>
        </Fade>
      </div>
      <div className="w-12 h-12" />
      <div className="flex flex-1 flex-col items-center md:items-end gap-8">
        {Object.getOwnPropertyNames(experience).map((title, id) => (
          <div key={id} className="mb-[32px]">
            <div className="flex flex-col justify-center items-end w-full md:w-auto gap-4">
              {experience[title].map(
                (
                  {
                    organization,
                    role,
                    type,
                    startDate,
                    endDate,
                    city,
                    state,
                    country,
                    url,
                    thumbnail,
                    description,
                  },
                  i: number,
                ) => (
                  <div key={i}>
                    <Fade
                      in={animate}
                      style={{ transitionDelay: `${200 * i}ms` }}>
                      <div className="p-6 max-w-md h-full bg-card dark:bg-cardDark hover:bg-card/60 dark:hover:bg-cardDark/60 rounded-lg">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col gap-5">
                          <div className="flex flex-row gap-4">
                            {!!thumbnail && (
                              <Image
                                alt={`${organization} logo`}
                                src={thumbnail}
                                width={40}
                                height={40}
                                className="rounded-lg"
                              />
                            )}
                            <div>
                              <p>{organization}</p>
                              <p className="text-zinc-600 dark:text-zinc-400">
                                {role + (type ? ' - ' + type : '')}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row gap-8">
                            <div className="w-3 h-3">
                              <Calendar className="text-text dark:text-textDark" />
                            </div>
                            <div>
                              <p>{getHumanDiff(startDate, endDate)}</p>
                              <p className="text-zinc-600 dark:text-zinc-400">
                                {`${startDate} - ${
                                  endDate !== undefined ? endDate : 'Present'
                                }`}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row gap-8">
                            <div className="w-3 h-3">
                              <MapPin className="text-text dark:text-textDark" />
                            </div>
                            <div>
                              <p className="text-zinc-600 dark:text-zinc-400">
                                {`${city}, ${state}, ${country}`}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row gap-8">
                            <div className="w-3 h-3">
                              <Code className="text-text dark:text-textDark" />
                            </div>
                            <div>
                              <p className="text-zinc-600 dark:text-zinc-400">
                                {`${description}`}
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </Fade>
                  </div>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
      <div ref={animRef}></div>
    </div>
  );
};

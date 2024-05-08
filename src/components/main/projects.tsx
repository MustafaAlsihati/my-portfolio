'use client';

import { RepoForkedIcon, RepoIcon, StarIcon } from '@primer/octicons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  projects: any[];
}

export const Projects = ({ projects }: Props) => {
  return (
    <div
      className="flex flex-col lg:flex-row-reverse items-center justify-center pb-[80px] container px-6 md:px-0"
      style={{ minHeight: `calc(100vh - 32px)` }}>
      <div>
        <h3 className="text-text dark:text-textDark text-2xl md:text-4xl mb-6 text-center">
          Projects
        </h3>
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 'all' }}>
          <Image
            alt="Projects"
            src="/projects.svg"
            width={1144}
            height={617.32}
          />
        </motion.div>
      </div>
      <div className="w-12 h-12" />
      <div className="flex flex-1 flex-col items-start">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          {!!projects &&
            projects.map((v, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}>
                <div className="p-6 max-w-md h-full bg-card dark:bg-cardDark hover:bg-card/60 dark:hover:bg-cardDark/60 rounded-lg">
                  <a
                    className="flex flex-col gap-5"
                    href={v.value.html_url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row items-center gap-2 text-2xl">
                        <RepoIcon verticalAlign="middle" />
                        <p className="text-text dark:text-textDark">
                          {v.value.name}
                        </p>
                      </div>
                      <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-1 text-zinc-600 dark:text-zinc-400 text-md">
                          <StarIcon verticalAlign="middle" />
                          <p>{Number(v.value.stargazers_count || 0)}</p>
                        </div>
                        <div className="flex flex-row gap-1 text-zinc-600 dark:text-zinc-400 text-md">
                          <RepoForkedIcon verticalAlign="middle" />
                          <p>{Number(v.value.forks || 0)}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-8">
                      <div>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {v.value.description || ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-2">
                      {!!v.value.languages &&
                        v.value.languages.map((lang, i) => (
                          <div
                            key={i}
                            className="px-3 py-1 bg-zinc-400 dark:bg-zinc-600 rounded-2xl text-black dark:text-white">
                            {lang}
                          </div>
                        ))}
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

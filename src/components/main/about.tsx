'use client';

import { CardContainer, CardItem } from '@/components/ui/3d-card';
import data from '@/constants/data.json';
import { motion } from 'framer-motion';
import Image from 'next/image';

const { about } = data;

export const About = () => {
  return (
    <div
      className="container px-6 md:px-0 flex flex-col md:flex-row gap-24 items-center justify-center pb-[80px]"
      style={{ minHeight: `calc(75vh - 32px)` }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 'all' }}>
        <CardContainer>
          <CardItem>
            <Image
              alt="Display Picture"
              src={about.picture}
              width={450}
              height={450}
              className="rounded-full"
            />
          </CardItem>
        </CardContainer>
      </motion.div>
      <motion.div
        className="flex-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 'all' }}>
        <h3 className="text-text dark:text-textDark text-4xl md:text-6xl mb-6">
          About me
        </h3>
        <h4 className="text-text dark:text-textDark text-xl md:text-2xl mb-12 mt-8">
          {about.description}
        </h4>
      </motion.div>
    </div>
  );
};

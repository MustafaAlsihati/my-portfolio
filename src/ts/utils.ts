import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function iconify(input = '') {
  const replacers = [
    {
      in: /\+/g,
      out: 'plus',
    },
    {
      in: /\./g,
      out: '-dot-',
    },
    {
      in: /&/g,
      out: '-and-',
    },
    {
      in: ' ',
      out: '',
    },
    {
      in: '_',
      out: '',
    },
  ];
  let output = input.toLowerCase();
  replacers.forEach(replacer => {
    output = output.replace(replacer.in, replacer.out);
  });
  return output;
}

export function getHumanDiff(startDate: Date | string, endDate: Date | string) {
  let str = '';
  const start = new Date(startDate);
  const end = !!endDate ? new Date(endDate) : new Date();
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0) {
    str += years + ' year';
    if (years > 1) str += 's';
  }

  if (str.length > 0) str += ', ';

  if (months > 0) {
    str += months + ' month';
    if (months > 1) str += 's';
  }

  return str;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

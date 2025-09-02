import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Pokedex from 'pokedex-promise-v2';

export const pokedex = new Pokedex();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalize = (text: string) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

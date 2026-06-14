import type { TProject } from '@src/types/TProject';

import MultiplatformBotDetectorPicture from '@src/assets/projects/multiplatform_bot_detector.jpg';
import OldPortfolioPicture from '@src/assets/projects/old_portfolio.jpg';
import ParaPoPicture from '@src/assets/projects/parapo.jpg';
import {
  CSS,
  Flask,
  JavaScript,
  Mapbox,
  NextJS,
  NodeJS,
  Pandas,
  PostgreSQL,
  Prisma,
  Python,
  ReactJS,
  TailwindCSS,
  TypeScript,
} from '@src/utils/constants/StacksData';

export const ProjectsData: TProject[] = [
  {
    title: 'ParaPo',
    stacks: [TypeScript, NextJS, TailwindCSS, NodeJS, Mapbox, Prisma, PostgreSQL],
    description:
      'A web-based transit routing platform designed to help Filipino commuters navigate their local routes. The application features an interactive map and transit catalogs, backed by a secure admin dashboard where authorized users can seamlessly create, update, and manage route coordinates and location data.',
    imageSrc: ParaPoPicture,
    links: {
      prod: null,
      github: 'https://github.com/Pilner/ParaPo',
    },
  },
  {
    title: 'Multiplatform Bot Detector',
    stacks: [TypeScript, Python, NextJS, CSS, Flask, Pandas, NodeJS],
    // description: 'A Semi-Supervised Self-Training to Multiplatform Ensemble-Based Bot Detection System.',
    description:
      'An undergraduate thesis project featuring a Semi-Supervised Self-Training to Multiplatform Ensemble-Based Bot Detection System.',
    imageSrc: MultiplatformBotDetectorPicture,
    links: {
      prod: null,
      github: 'https://github.com/Pilner/multiplatform-bot-detector',
    },
  },
  {
    title: 'Old Portfolio',
    stacks: [JavaScript, ReactJS, CSS, NodeJS],
    description:
      'This is my old portfolio website when I was just fiddling on web development, before I knew exactly where this path would take me.',
    imageSrc: OldPortfolioPicture,
    links: {
      prod: 'https://personal-site-pilner.vercel.app/',
      github: 'https://github.com/Pilner/PersonalSite',
    },
  },
];

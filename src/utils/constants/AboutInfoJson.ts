import type { TJsonBlock } from '@src/types/TJsonBlock';
import { GetAge } from '../GetAge';

export const AboutInfoJson: TJsonBlock[] = [
  {
    label: 'Name',
    value: 'Fabian Railey Victuelles',
    type: 'string',
  },
  {
    label: 'Age',
    value: GetAge(new Date('2003-03-20')),
    type: 'number',
  },
  {
    label: 'Location',
    value: 'Philippines',
    type: 'string',
  },
  {
    label: 'Education',
    value: 'Polytechnic University of the Philippines',
    type: 'string',
  },
  {
    label: 'Degree',
    value: 'Bachelor of Science in Computer Science',
    // comment: 'What the helly',
    type: 'string',
  },
  {
    label: 'About',
    value: 'Associate Software Engineer @ PDAX',
    type: 'string',
  },
  {
    label: 'Interests',
    value: ['Coding', 'Algorithms', 'Gaming', 'Music', 'Architecture', 'System Design'],
    type: 'array',
  },
];

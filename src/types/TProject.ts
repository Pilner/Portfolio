import type { TStack } from './TStacks';

export type TProject = {
  title: string;
  stacks: TStack[];
  description: string;
  imageSrc: string;
  links: { prod: string | null; github: string };
};

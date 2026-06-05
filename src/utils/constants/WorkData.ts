import type { TWork } from '@src/types/TWork';

import EightBoxLogo from '@src/assets/work/8box-solutions-logo.png';
import LaminaStudiosLogo from '@src/assets/work/lamina-studios-logo.png';
import PDAXLogo from '@src/assets/work/pdax-logo.png';

export const WorkData: TWork[] = [
  {
    companyName: 'Philippine Digital Asset Exchange',
    position: 'Associate, Software Engineering',
    startDate: new Date('2025-09'),
    endDate: false,
    description:
      "As a Software Engineer at PDAX, I specialize in backend development as part of the development team that powers the company's main product. My primary responsibilities center on creating and managing scalable API endpoints that drive our main platform's core functionality. I also participate in the end-to-end development of new backend features, leveraging languages such as TypeScript and Golang to build highly efficient and maintainable systems.",
    imageSrc: PDAXLogo,
    link: 'https://pdax.ph/',
  },
  {
    companyName: '8box Solutions',
    position: 'Part-Time Frontend Web Developer',
    startDate: new Date('2024-11'),
    endDate: new Date('2025-09'),
    description:
      'At 8box Solutions, I worked with 50+ employees and contributed to the development, optimization, and maintenance of web applications for local/international clients. I implemented Git hooks, allowing the repository to have standardized code formats across teams, leading to a more structured codebase across 20+ developers. And I achieved multiple KPIs such as refactoring legacy codebases, reducing technical debt by 25% and improving maintainability.',
    imageSrc: EightBoxLogo,
    link: 'https://8box.solutions/',
  },
  {
    companyName: 'Lamina Studios',
    position: 'Web Developer Intern',
    startDate: new Date('2024-08'),
    endDate: new Date('2024-09'),
    description:
      'During my internship at Lamina Studios, I was involved in proposing and developing web applications using modern web technologies with 15+ other developers. I contributed 70+ commits covering thousands of lines of code to the codebase using Vue.js, PHP, Laravel, Python, Flask, MySQL in the span of a single month. And I developed and integrated 65% reusable components across a project, enabling teams to efficiently adopt and maintain consistent UI patterns.',
    imageSrc: LaminaStudiosLogo,
    link: 'https://laminastudios.com/',
  },
];

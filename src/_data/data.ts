import { TStacks } from '@/_types/Stacks';
import { TWork } from '@/_types/Work';
import { TCard } from '@/_types/Card';

export const languagesData: TStacks[] = [
	{
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		imgSrc: './images/stacks/languages/javascript.svg',
		alt: 'JavaScript Logo',
		text: 'JavaScript',
	},
	{
		url: 'https://www.typescriptlang.org/',
		imgSrc: './images/stacks/languages/typescript.svg',
		alt: 'TypeScript Logo',
		text: 'TypeScript',
	},
	{ url: 'https://www.cprogramming.com/', imgSrc: './images/stacks/languages/c.svg', alt: 'C Logo', text: 'C' },
	{ url: 'https://cplusplus.com/', imgSrc: './images/stacks/languages/cpp.svg', alt: 'CPP Logo', text: 'C++' },
	{
		url: 'https://www.python.org/',
		imgSrc: './images/stacks/languages/python.svg',
		alt: 'Python Logo',
		text: 'Python',
	},
	{
		url: 'https://en.wikipedia.org/wiki/HTML',
		imgSrc: './images/stacks/languages/html.svg',
		alt: 'HTML Logo',
		text: 'HTML',
	},
	{
		url: 'https://en.wikipedia.org/wiki/CSS',
		imgSrc: './images/stacks/languages/css.svg',
		alt: 'CSS Logo',
		text: 'CSS',
	},
];

export const frameworksData: TStacks[] = [
	{ url: 'https://react.dev/', imgSrc: './images/stacks/frameworks/react.svg', alt: 'React.js Logo', text: 'React.js' },
	{ url: 'https://nextjs.org/', imgSrc: './images/stacks/frameworks/nextjs.svg', alt: 'Next.js Logo', text: 'Next.js' },
	{
		url: 'https://tailwindcss.com/',
		imgSrc: './images/stacks/frameworks/tailwindcss.svg',
		alt: 'TailwindCSS Logo',
		text: 'TailwindCSS',
	},
	{
		url: 'https://getbootstrap.com/',
		imgSrc: './images/stacks/frameworks/bootstrap.svg',
		alt: 'Bootstrap Logo',
		text: 'Bootstrap',
	},
	{
		url: 'https://nodejs.org/en',
		imgSrc: './images/stacks/frameworks/nodejs.svg',
		alt: 'Node.js Logo',
		text: 'Node.js',
	},
	{
		url: 'https://expressjs.com/',
		imgSrc: './images/stacks/frameworks/express.svg',
		alt: 'Express Logo',
		text: 'Express',
	},
	{
		url: 'https://flask.palletsprojects.com/en/stable/',
		imgSrc: './images/stacks/frameworks/flask.svg',
		alt: 'Flask Logo',
		text: 'Flask',
	},
	{
		url: 'https://pandas.pydata.org/',
		imgSrc: './images/stacks/frameworks/pandas.svg',
		alt: 'Pandas Logo',
		text: 'Pandas',
	},
	{
		url: 'https://www.mapbox.com/',
		imgSrc: './images/stacks/frameworks/mapbox.svg',
		alt: 'Mapbox Logo',
		text: 'Mapbox',
	},
];

export const toolsData: TStacks[] = [
	{ url: 'https://git-scm.com/', imgSrc: './images/stacks/tools/git.svg', alt: 'Git Logo', text: 'Git' },
	{ url: 'https://www.docker.com/', imgSrc: './images/stacks/tools/docker.svg', alt: 'Docker Logo', text: 'Docker' },
	{ url: '#', imgSrc: './images/stacks/tools/postman.svg', alt: 'Postman Logo', text: 'Postman' },
	{
		url: 'https://www.prisma.io/',
		imgSrc: './images/stacks/tools/prisma.svg',
		alt: 'Prisma Logo',
		text: 'Prisma',
	},
	{
		url: 'https://www.mongodb.com/',
		imgSrc: './images/stacks/tools/mongodb.svg',
		alt: 'MongoDB Logo',
		text: 'MongoDB',
	},
	{
		url: 'https://www.postgresql.org/',
		imgSrc: './images/stacks/tools/postgresql.svg',
		alt: 'PostgreSQL Logo',
		text: 'PostgreSQL',
	},
	{ url: 'https://www.sqlite.org/', imgSrc: './images/stacks/tools/sqlite.svg', alt: 'SQLite Logo', text: 'SQLite' },
];

export const osData: TStacks[] = [
	{
		url: 'https://www.microsoft.com/en-us/windows',
		imgSrc: './images/stacks/os/windows.svg',
		alt: 'Windows Logo',
		text: 'Windows',
	},
	{ url: 'https://ubuntu.com/', imgSrc: './images/stacks/os/ubuntu.svg', alt: 'Ubuntu Logo', text: 'Ubuntu' },
	{
		url: 'https://www.apple.com/macos/macos-sequoia/',
		imgSrc: './images/stacks/os/macos.svg',
		alt: 'MacOS Logo',
		text: 'MacOS',
	},
];

export const workData: TWork[] = [
	{
		companyName: '8box Solutions',
		position: 'Part-Time Frontend Web Developer',
		startDate: new Date('2024-11'),
		endDate: false,
		description:
			'At 8box Solutions, I contributed to the development, optimization, and maintenance of web applications for clients. I implemented Git hooks, allowing the repository to have standardized code formats across teams, leading to a more structured codebase. I worked with the team to implement new features, resolve bugs, and optimize performance. I Integrated multiple web applications with Google Maps, allowing for seamless incorporation to API usage. And I researched and tested for API efficiency, code improvements, and identified and fixed API edge cases.',
		imageSrc: '/images/work/8box-solutions-logo.png',
		link: 'https://8box.solutions/',
	},
	{
		companyName: 'Lamina Studios',
		position: 'Web Developer Intern',
		startDate: new Date('2024-08'),
		endDate: new Date('2024-09'),
		description:
			'During my internship at Lamina Studios, I was involved in proposing and developing web applications using modern web technologies. I collaborated with other interns to implement new features, fix bugs, and optimize performance. This experience helped me enhance my skills in Python, PHP, Laravel, Vue.js, MySQL, and provided valuable insights into the software development lifecycle.',
		imageSrc: '/images/work/lamina-studios-logo.png',
		link: 'https://laminastudios.com/',
	},
];

export const projectData: TCard[] = [
	{
		title: 'ParaPo',
		description: 'A web-based navigation application designed for Filipino commuters. A transit routing map software.',
		imageSrc: '/images/projects/parapo.jpg',
		link: 'https://github.com/Pilner/ParaPo',
	},
	{
		title: 'EzStocks',
		description: 'An Inventory Management System designed for Sari-Sari Store Vendors.',
		imageSrc: '/images/projects/ezstocks.jpg',
		link: 'https://github.com/Pilner/EzStocks',
	},
	{
		title: 'Multiplatform Bot Detector',
		description: 'A Semi-Supervised Self-Training to Multiplatform Ensemble-Based Bot Detection System.',
		imageSrc: '/images/projects/multiplatform_bot_detector.jpg',
		link: 'https://github.com/Pilner/multiplatform-bot-detector',
	},
	{
		title: 'Old Portfolio',
		description: 'This is my old portfolio website. Originally built with Node.js, Express, and EJS.',
		imageSrc: '/images/projects/old_portfolio.jpg',
		link: 'https://github.com/Pilner/PersonalSite',
	},
	{
		title: 'Web Auth Boilerplate',
		description:
			'A boilerplate for web applications with authentication using Next.js, TailwindCSS, Prisma, and NextAuth.',
		imageSrc: '/images/projects/web_auth_boilerplate.jpg',
		link: 'https://github.com/Pilner/Web-Auth-Boilerplate',
	},
	{
		title: 'Efficient Logistics Web Application',
		description: 'A Design and Analysis of Algorithms project. A web application for efficient logistics using MST.',
		imageSrc: '/images/projects/mst_logistics.jpg',
		link: 'https://github.com/Pilner/MST-Multi-Deliveries',
	},
];

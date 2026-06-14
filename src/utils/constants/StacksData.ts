import type { TStack } from '@src/types/TStacks';

// Languages
import CLogo from '@src/assets/stacks/languages/c.svg';
import CppLogo from '@src/assets/stacks/languages/cpp.svg';
import CssLogo from '@src/assets/stacks/languages/css.svg';
import GoLogo from '@src/assets/stacks/languages/go.svg';
import HtmlLogo from '@src/assets/stacks/languages/html.svg';
import JavaScriptLogo from '@src/assets/stacks/languages/javascript.svg';
import PostgresqlLogo from '@src/assets/stacks/languages/postgresql.svg';
import PythonLogo from '@src/assets/stacks/languages/python.svg';
import SqliteLogo from '@src/assets/stacks/languages/sqlite.svg';
import TypeScriptLogo from '@src/assets/stacks/languages/typescript.svg';

// Frameworks
import BootstrapLogo from '@src/assets/stacks/frameworks/bootstrap.svg';
import ChiLogo from '@src/assets/stacks/frameworks/chi.svg';
import ExpressLogo from '@src/assets/stacks/frameworks/express.svg';
import FastapiLogo from '@src/assets/stacks/frameworks/fastapi.svg';
import FlaskLogo from '@src/assets/stacks/frameworks/flask.svg';
import MapboxLogo from '@src/assets/stacks/frameworks/mapbox.svg';
import NextjsLogo from '@src/assets/stacks/frameworks/nextjs.svg';
import NodejsLogo from '@src/assets/stacks/frameworks/nodejs.svg';
import PandasLogo from '@src/assets/stacks/frameworks/pandas.svg';
import PrismaLogo from '@src/assets/stacks/frameworks/prisma.svg';
import ReactLogo from '@src/assets/stacks/frameworks/react.svg';
import TailwindcssLogo from '@src/assets/stacks/frameworks/tailwindcss.svg';

// Tools
import AwsLogo from '@src/assets/stacks/tools/aws.svg';
import DockerLogo from '@src/assets/stacks/tools/docker.svg';
import GitLogo from '@src/assets/stacks/tools/git.svg';
import PostmanLogo from '@src/assets/stacks/tools/postman.svg';

// OS
import LinuxLogo from '@src/assets/stacks/os/linux.svg';
import MacosLogo from '@src/assets/stacks/os/macos.svg';
import WindowsLogo from '@src/assets/stacks/os/windows.svg';

// Languages Data
export const JavaScript: TStack = {
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  imageSrc: JavaScriptLogo,
  alt: 'JavaScript Logo',
  text: 'JavaScript',
};
export const TypeScript: TStack = {
  url: 'https://www.typescriptlang.org/',
  imageSrc: TypeScriptLogo,
  alt: 'TypeScript Logo',
  text: 'TypeScript',
};
export const C: TStack = { url: 'https://www.cprogramming.com/', imageSrc: CLogo, alt: 'C Logo', text: 'C' };
export const CPP: TStack = { url: 'https://cplusplus.com/', imageSrc: CppLogo, alt: 'CPP Logo', text: 'C++' };
export const Python: TStack = {
  url: 'https://www.python.org/',
  imageSrc: PythonLogo,
  alt: 'Python Logo',
  text: 'Python',
};
export const HTML: TStack = {
  url: 'https://en.wikipedia.org/wiki/HTML',
  imageSrc: HtmlLogo,
  alt: 'HTML Logo',
  text: 'HTML',
};
export const CSS: TStack = {
  url: 'https://en.wikipedia.org/wiki/CSS',
  imageSrc: CssLogo,
  alt: 'CSS Logo',
  text: 'CSS',
};
export const Go: TStack = {
  url: 'https://go.dev/',
  imageSrc: GoLogo,
  alt: 'Go Logo',
  text: 'Go',
};
export const PostgreSQL: TStack = {
  url: 'https://www.postgresql.org/',
  imageSrc: PostgresqlLogo,
  alt: 'PostgreSQL Logo',
  text: 'PostgreSQL',
};
export const SQLite: TStack = {
  url: 'https://www.sqlite.org/',
  imageSrc: SqliteLogo,
  alt: 'SQLite Logo',
  text: 'SQLite',
};
export const LanguagesData: TStack[] = [JavaScript, TypeScript, C, CPP, Python, HTML, CSS, Go, PostgreSQL, SQLite];

// Frameworks Data
export const ReactJS: TStack = {
  url: 'https://react.dev/',
  imageSrc: ReactLogo,
  alt: 'React.js Logo',
  text: 'React.js',
};
export const NextJS: TStack = {
  url: 'https://nextjs.org/',
  imageSrc: NextjsLogo,
  alt: 'Next.js Logo',
  text: 'Next.js',
};
export const TailwindCSS: TStack = {
  url: 'https://tailwindcss.com/',
  imageSrc: TailwindcssLogo,
  alt: 'TailwindCSS Logo',
  text: 'TailwindCSS',
};
export const Bootstrap: TStack = {
  url: 'https://getbootstrap.com/',
  imageSrc: BootstrapLogo,
  alt: 'Bootstrap Logo',
  text: 'Bootstrap',
};
export const NodeJS: TStack = {
  url: 'https://nodejs.org/en',
  imageSrc: NodejsLogo,
  alt: 'Node.js Logo',
  text: 'Node.js',
};
export const ExpressJS: TStack = {
  url: 'https://expressjs.com/',
  imageSrc: ExpressLogo,
  alt: 'Express Logo',
  text: 'Express',
};
export const Flask: TStack = {
  url: 'https://flask.palletsprojects.com/en/stable/',
  imageSrc: FlaskLogo,
  alt: 'Flask Logo',
  text: 'Flask',
};
export const FastAPI: TStack = {
  url: 'https://fastapi.tiangolo.com/',
  imageSrc: FastapiLogo,
  alt: 'FastAPI Logo',
  text: 'FastAPI',
};
export const Chi: TStack = {
  url: 'https://go-chi.io/',
  imageSrc: ChiLogo,
  alt: 'Chi Logo',
  text: 'Chi',
};
export const Pandas: TStack = {
  url: 'https://pandas.pydata.org/',
  imageSrc: PandasLogo,
  alt: 'Pandas Logo',
  text: 'Pandas',
};
export const Mapbox: TStack = {
  url: 'https://www.mapbox.com/',
  imageSrc: MapboxLogo,
  alt: 'Mapbox Logo',
  text: 'Mapbox',
};
export const Prisma: TStack = {
  url: 'https://www.prisma.io/',
  imageSrc: PrismaLogo,
  alt: 'Prisma Logo',
  text: 'Prisma',
};
export const FrameworksData: TStack[] = [
  ReactJS,
  NextJS,
  TailwindCSS,
  Bootstrap,
  NodeJS,
  ExpressJS,
  Flask,
  FastAPI,
  Chi,
  Pandas,
  Mapbox,
  Prisma,
];

// Tools Data
export const AWS: TStack = { url: 'https://aws.amazon.com/', imageSrc: AwsLogo, alt: 'AWS Logo', text: 'AWS' };
export const Git: TStack = { url: 'https://git-scm.com/', imageSrc: GitLogo, alt: 'Git Logo', text: 'Git' };
export const Docker: TStack = {
  url: 'https://www.docker.com/',
  imageSrc: DockerLogo,
  alt: 'Docker Logo',
  text: 'Docker',
};
export const Postman: TStack = {
  url: 'https://www.postman.com/',
  imageSrc: PostmanLogo,
  alt: 'Postman Logo',
  text: 'Postman',
};
export const ToolsData: TStack[] = [AWS, Git, Docker, Postman];

// OS Data
export const Windows: TStack = {
  url: 'https://www.microsoft.com/en-us/windows',
  imageSrc: WindowsLogo,
  alt: 'Windows Logo',
  text: 'Windows',
};
export const Linux: TStack = {
  url: 'https://www.linux.org/',
  imageSrc: LinuxLogo,
  alt: 'Linux Logo',
  text: 'Linux',
};
export const MacOS: TStack = {
  url: 'https://www.apple.com/macos/',
  imageSrc: MacosLogo,
  alt: 'MacOS Logo',
  text: 'MacOS',
};
export const OSData: TStack[] = [Windows, Linux, MacOS];

export const AllStacks: TStack[] = [...LanguagesData, ...FrameworksData, ...ToolsData, ...OSData];

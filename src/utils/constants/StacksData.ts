import type { TStacks } from '@src/types/TStacks';

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

export const LanguagesData: TStacks[] = [
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    imageSrc: JavaScriptLogo,
    alt: 'JavaScript Logo',
    text: 'JavaScript',
  },
  {
    url: 'https://www.typescriptlang.org/',
    imageSrc: TypeScriptLogo,
    alt: 'TypeScript Logo',
    text: 'TypeScript',
  },
  { url: 'https://www.cprogramming.com/', imageSrc: CLogo, alt: 'C Logo', text: 'C' },
  { url: 'https://cplusplus.com/', imageSrc: CppLogo, alt: 'CPP Logo', text: 'C++' },
  {
    url: 'https://www.python.org/',
    imageSrc: PythonLogo,
    alt: 'Python Logo',
    text: 'Python',
  },
  {
    url: 'https://en.wikipedia.org/wiki/HTML',
    imageSrc: HtmlLogo,
    alt: 'HTML Logo',
    text: 'HTML',
  },
  {
    url: 'https://en.wikipedia.org/wiki/CSS',
    imageSrc: CssLogo,
    alt: 'CSS Logo',
    text: 'CSS',
  },
  {
    url: 'https://go.dev/',
    imageSrc: GoLogo,
    alt: 'Go Logo',
    text: 'Go',
  },
  {
    url: 'https://www.postgresql.org/',
    imageSrc: PostgresqlLogo,
    alt: 'PostgreSQL Logo',
    text: 'PostgreSQL',
  },
  { url: 'https://www.sqlite.org/', imageSrc: SqliteLogo, alt: 'SQLite Logo', text: 'SQLite' },
];

export const FrameworksData: TStacks[] = [
  { url: 'https://react.dev/', imageSrc: ReactLogo, alt: 'React.js Logo', text: 'React.js' },
  { url: 'https://nextjs.org/', imageSrc: NextjsLogo, alt: 'Next.js Logo', text: 'Next.js' },
  {
    url: 'https://tailwindcss.com/',
    imageSrc: TailwindcssLogo,
    alt: 'TailwindCSS Logo',
    text: 'TailwindCSS',
  },
  {
    url: 'https://getbootstrap.com/',
    imageSrc: BootstrapLogo,
    alt: 'Bootstrap Logo',
    text: 'Bootstrap',
  },
  {
    url: 'https://nodejs.org/en',
    imageSrc: NodejsLogo,
    alt: 'Node.js Logo',
    text: 'Node.js',
  },
  {
    url: 'https://expressjs.com/',
    imageSrc: ExpressLogo,
    alt: 'Express Logo',
    text: 'Express',
  },
  {
    url: 'https://flask.palletsprojects.com/en/stable/',
    imageSrc: FlaskLogo,
    alt: 'Flask Logo',
    text: 'Flask',
  },
  {
    url: 'https://fastapi.tiangolo.com/',
    imageSrc: FastapiLogo,
    alt: 'FastAPI Logo',
    text: 'FastAPI',
  },
  {
    url: 'https://go-chi.io/',
    imageSrc: ChiLogo,
    alt: 'Chi Logo',
    text: 'Chi',
  },
  {
    url: 'https://pandas.pydata.org/',
    imageSrc: PandasLogo,
    alt: 'Pandas Logo',
    text: 'Pandas',
  },
  {
    url: 'https://www.mapbox.com/',
    imageSrc: MapboxLogo,
    alt: 'Mapbox Logo',
    text: 'Mapbox',
  },
  {
    url: 'https://www.prisma.io/',
    imageSrc: PrismaLogo,
    alt: 'Prisma Logo',
    text: 'Prisma',
  },
];

export const ToolsData: TStacks[] = [
  { url: 'https://aws.amazon.com/', imageSrc: AwsLogo, alt: 'AWS Logo', text: 'AWS' },
  { url: 'https://git-scm.com/', imageSrc: GitLogo, alt: 'Git Logo', text: 'Git' },
  { url: 'https://www.docker.com/', imageSrc: DockerLogo, alt: 'Docker Logo', text: 'Docker' },
  { url: 'https://www.postman.com/', imageSrc: PostmanLogo, alt: 'Postman Logo', text: 'Postman' },
];

export const OSData: TStacks[] = [
  {
    url: 'https://www.microsoft.com/en-us/windows',
    imageSrc: WindowsLogo,
    alt: 'Windows Logo',
    text: 'Windows',
  },
  { url: 'https://www.linux.org/', imageSrc: LinuxLogo, alt: 'Linux Logo', text: 'Linux' },
  {
    url: 'https://www.apple.com/macos/',
    imageSrc: MacosLogo,
    alt: 'MacOS Logo',
    text: 'MacOS',
  },
];

export const AllStacks: TStacks[] = [...LanguagesData, ...FrameworksData, ...ToolsData, ...OSData];

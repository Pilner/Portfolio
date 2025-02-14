import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Fabian Railey Victuelles | Web Developer',
	description: 'A portfolio website to showcase my work and skills.',
	authors: { name: 'Fabian Railey Victuelles' },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body className={`bg-gray ${inter.className}`}>{children}</body>
		</html>
	);
}

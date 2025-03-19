import type { Metadata } from 'next';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const metadata: Metadata = {
	title: 'Fabian Railey Victuelles | Web Developer',
	description: 'A portfolio website to showcase my work and skills.',
	authors: { name: 'Fabian Railey Victuelles' },
	icons: [
		{
			media: '(prefers-color-scheme: dark)',
			url: '/images/logo/frv-logo-white.png',
		},
		{
			media: '(prefers-color-scheme: light)',
			url: '/images/logo/frv-logo-black.png',
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body className={`bg-gray`}>{children}</body>
		</html>
	);
}

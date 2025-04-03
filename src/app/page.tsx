'use client';
import React from 'react';

import { Navbar } from '@/_components/semantics/Navbar';
import Hero from '@/_components/pages/Hero';

export default function Page() {
	const currentYear = new Date().getFullYear();
	console.log(`Copyright © ${currentYear} Fabian Railey Victuelles`);
	return (
		<>
			<main className={`h-dvh overflow-y-scroll scroll-smooth`}>
				<Navbar />
				<Hero />
			</main>
		</>
	);
}

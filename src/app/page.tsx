'use client';
import React from 'react';

import { Navbar } from '@/_components/semantics/Navbar';
import Hero from '@/_components/pages/Hero';

export default function Page() {
	return (
		<>
			<main className={`h-screen overflow-y-scroll scroll-smooth`}>
				<Navbar />
				<Hero />
			</main>
		</>
	);
}

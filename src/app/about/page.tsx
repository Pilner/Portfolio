'use client';
import React from 'react';

import { Navbar } from '@/_components/semantics/Navbar';
import About from '@/_components/pages/About';

export default function AboutPage() {
	return (
		<>
			<main className={`h-screen overflow-y-scroll scroll-smooth`}>
				<Navbar />
				<About />
			</main>
		</>
	);
}

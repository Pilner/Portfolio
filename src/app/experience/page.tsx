'use client';
import React from 'react';

import { Navbar } from '@/_components/semantics/Navbar';
import Experience from '@/_components/pages/Experience';

export default function ExperiencePage() {
	return (
		<>
			<main className={`h-screen overflow-y-scroll scroll-smooth`}>
				<Navbar />
				<Experience />
			</main>
		</>
	);
}

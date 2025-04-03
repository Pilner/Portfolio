'use client';
import React from 'react';

import { Navbar } from '@/_components/semantics/Navbar';
import Projects from '@/_components/pages/Projects';

export default function ProjectsPage() {
	return (
		<>
			<main className={`h-screen overflow-y-scroll scroll-smooth`}>
				<Navbar />
				<Projects />
			</main>
		</>
	);
}

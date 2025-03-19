'use client';
import React, { useState, useEffect } from 'react';

import { Navbar } from '@/_components/semantics/Navbar';
import About from '@/_components/pages/About';

export default function AboutPage() {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 250);
	}, []);

	return (
		<>
			<main
				className={`h-screen overflow-y-scroll scroll-smooth transition duration-500 ${loading ? 'opacity-0' : 'opacity-100'} ease-in`}
			>
				<Navbar />
				<About />
			</main>
		</>
	);
}

'use client';

import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
// import { TextInput, DropdownInput } from '@/_components/ui/Input';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<section className="h-full flex-grow">
				<div className="container">
					<div className="flex h-full items-center justify-between gap-4">
						<p>Hero Page</p>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}

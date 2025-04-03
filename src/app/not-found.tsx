import { Navbar } from '@/_components/semantics/Navbar';
import Image from 'next/image';

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<section className="h-screen w-full">
				<div className="relative container flex h-full w-full flex-col items-center justify-center">
					<div className="relative h-[10rem] w-full">
						<Image
							src="/images/questionmark.png"
							alt="Not Found Image"
							fill
							className="aspect-square h-full w-auto object-contain"
						/>
					</div>
				</div>
			</section>
		</main>
	);
}

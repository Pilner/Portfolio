import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
	// get current year
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-dark py-4">
			<div className="container">
				<div className="flex h-full flex-col items-center justify-center text-center">
					<div className="relative h-[2.5rem] w-[2.5rem]">
						<Link href="/" className="contents">
							<Image
								src="/images/logo/frv-logo-white.png"
								alt="Logo"
								fill
								className="aspect-square h-full w-auto object-contain"
							/>
						</Link>
					</div>
					<p className="text-white">© {currentYear} Fabian Railey Victuelles</p>
				</div>
			</div>
		</footer>
	);
}

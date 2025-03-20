import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
	return (
		<section className="h-screen w-full">
			<div className="relative container flex h-full w-full flex-col items-center justify-center">
				<div className="relative h-[25rem] w-full">
					<Image
						src="/images/logo/frv-logo-black.png"
						alt="Hero Logo"
						fill
						className="aspect-square h-full w-auto object-contain"
					/>
				</div>
				<div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform-gpu">
					<div className="flex w-full items-center justify-center gap-8">
						<Link href="mailto:raileyvictuelles@gmail.com" target="_blank" className="contents">
							<FontAwesomeIcon
								size="2x"
								icon={faEnvelope}
								className="text-dark/50 hover:text-dark aspect-square cursor-pointer rounded-lg p-[0.25rem] transition duration-250"
							/>
						</Link>
						<Link href="https://github.com/Pilner" target="_blank" className="contents">
							<FontAwesomeIcon
								size="2x"
								icon={faGithub}
								className="text-dark/50 hover:text-dark aspect-square cursor-pointer rounded-lg p-[0.25rem] transition duration-250"
							/>
						</Link>
						<Link href="https://www.linkedin.com/in/pilner/" target="_blank" className="contents">
							<FontAwesomeIcon
								size="2x"
								icon={faLinkedin}
								className="text-dark/50 hover:text-dark aspect-square cursor-pointer rounded-lg p-[0.25rem] transition duration-250"
							/>
						</Link>
						<Link href="#" target="_blank" className="contents">
							<FontAwesomeIcon
								size="2x"
								icon={faFileAlt}
								className="text-dark/50 hover:text-dark aspect-square cursor-pointer rounded-lg p-[0.25rem] transition duration-250"
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

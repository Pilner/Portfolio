import React from 'react';
import Link from 'next/link';
import Card from '@/_components/ui/Card';
import Button from '@/_components/ui/Button';
import { projectData } from '@/_data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
	return (
		<>
			<section className="h-screen w-full">
				<div className="relative container flex h-full w-full items-center justify-center">
					<h1 className="font-main xs:text-6xl text-center text-5xl font-semibold lg:text-7xl">
						Also made this <br className="hidden lg:inline" /> awesome <span className="text-sub-accent">stuff</span>
					</h1>
					<div className="absolute bottom-10 flex flex-col">
						<FontAwesomeIcon
							size="2xl"
							color="black"
							icon={faChevronDown}
							className="animation-delay-0 animate-pulse"
						/>
						<FontAwesomeIcon
							size="2xl"
							color="black"
							icon={faChevronDown}
							className="animation-delay-1 animate-pulse"
						/>
						<FontAwesomeIcon
							size="2xl"
							color="black"
							icon={faChevronDown}
							className="animation-delay-2 animate-pulse"
						/>
					</div>
				</div>
			</section>
			<section className="w-full">
				<div className="container my-16 flex h-full w-full flex-col">
					<div className="h-full">
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							{projectData.map((data, index) => (
								<Card key={index} {...data} />
							))}
						</div>
						<div className="mt-8 flex items-center justify-center">
							<Link href="https://github.com/Pilner" className="contents" target="_blank" rel="noreferrer">
								<Button variant="outline">
									<div className="flex items-center gap-2">
										<FontAwesomeIcon icon={faGithub} />
										<p className="text-md md:text-lg">
											<span className="hidden md:inline">View more on </span>GitHub
										</p>
									</div>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

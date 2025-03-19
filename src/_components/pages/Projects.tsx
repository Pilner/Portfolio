import React from 'react';
import Card, { CardProps } from '@/_components/ui/Card';
import Button from '@/_components/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const sampleData: CardProps[] = [
	{
		title: 'ParaPo',
		description: 'This is a description of the project',
		imageSrc: '/images/placeholder.png',
		link: '#',
	},
	{
		title: 'Atomix',
		description: 'This is a description of the project',
		imageSrc: '/images/placeholder.png',
		link: '#',
	},
	{
		title: 'PC Timer',
		description: 'This is a description of the project',
		imageSrc: '/images/placeholder.png',
		link: '#',
	},
	{
		title: 'Aircamp',
		description: 'This is a description of the project',
		imageSrc: '/images/placeholder.png',
		link: '#',
	},
	{
		title: 'Aircamp',
		description: 'This is a description of the project',
		imageSrc: '/images/placeholder.png',
		link: '#',
	},
	{
		title: 'Aircamp',
		description: 'This is a description of the project',
		imageSrc: '/images/placeholder.png',
		link: '#',
	},
	{
		title: 'Aircamp',
		description: 'This is a description of the project',
		imageSrc: '/images/placeholder.png',
		link: '#',
	},
];

export default function Projects() {
	return (
		<>
			<section className="h-screen w-full">
				<div className="relative container flex h-full w-full items-center justify-center">
					<h1 className="font-main text-7xl font-semibold">
						Also made this awesome <span className="text-sub-accent">stuff</span>
					</h1>
					<div className="absolute bottom-10 flex flex-col">
						<FontAwesomeIcon size="2xl" color="black" icon={faChevronDown} />
						<FontAwesomeIcon size="2xl" color="black" icon={faChevronDown} />
						<FontAwesomeIcon size="2xl" color="black" icon={faChevronDown} />
					</div>
				</div>
			</section>
			<section className="min-h-screen w-full">
				<div className="container my-16 flex h-full w-full flex-col">
					<div className="h-full">
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							{sampleData.map((data, index) => (
								<Card key={index} {...data} />
							))}
						</div>
						<div className="mt-8 flex items-center justify-center">
							<Link href="https://github.com/Pilner" className="contents" target="_blank" rel="noreferrer">
								<Button variant="outline">
									<p className="flex items-center gap-2 text-lg">
										<FontAwesomeIcon icon={faGithub} /> View More
									</p>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

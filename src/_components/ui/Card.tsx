import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface CardProps {
	title: string;
	description: string;
	imageSrc: string;
	link: string;
}

export default function Card({ title, description, imageSrc, link }: CardProps) {
	return (
		<div className="rounded-lg bg-white p-4 shadow-lg">
			<div className="group relative overflow-hidden rounded-lg border border-black/10">
				<div className="transition-[opacity, blur] duration-250 group-hover:opacity-50 group-hover:blur-md">
					<div className="aspect-video h-full w-full">
						<Image fill src={imageSrc} alt={title} className="w-full object-cover" />
					</div>
				</div>
				<div className="absolute top-0 left-0 hidden h-full w-full opacity-0 transition-all duration-250 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:opacity-100">
					<p className="font-secondary">{description}</p>
				</div>
			</div>
			<div className="mt-4 flex items-center justify-center">
				<Link href={link || '#'}>
					<h2 className="font-secondary transition-[tracking, decoration] text-center text-xl font-semibold tracking-normal underline decoration-transparent duration-250 hover:tracking-widest hover:decoration-black">
						{title}
					</h2>
				</Link>
			</div>
		</div>
	);
}

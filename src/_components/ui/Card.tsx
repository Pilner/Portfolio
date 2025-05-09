import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TCard } from '@/_types/Card';

export default function Card({ title, description, imageSrc, link }: TCard) {
	return (
		<div className="rounded-lg bg-white p-4 shadow-lg">
			<div className="group relative overflow-hidden rounded-lg border border-black/10">
				<div className="transition-[opacity, blur] duration-250 group-hover:opacity-50 group-hover:blur-md">
					<div className="relative aspect-video h-full w-full">
						<Image fill src={imageSrc} alt={title} className="w-full object-cover" />
					</div>
				</div>
				<div className="absolute top-0 left-0 hidden h-full w-full p-4 text-center opacity-0 transition-all duration-250 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:opacity-100">
					<p className="font-secondary text-md font-normal sm:text-lg lg:text-xl">{description}</p>
				</div>
			</div>
			<div className="mt-4 flex items-center justify-center">
				<Link href={link || '#'} target="_blank" rel="noreferrer">
					<h2 className="font-secondary transition-[tracking, decoration] text-md text-center font-semibold tracking-normal underline decoration-transparent duration-250 hover:tracking-widest hover:decoration-black sm:text-lg lg:text-xl">
						{title}
					</h2>
				</Link>
			</div>
		</div>
	);
}

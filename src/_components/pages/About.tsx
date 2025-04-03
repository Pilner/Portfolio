import React from 'react';
import Image from 'next/image';

import { TJsonBlock } from '@/_types/JsonBlock';
import JsonBlock from '../ui/JsonBlock';
import { getAge } from '@/_utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function About() {
	const age = getAge(new Date('2003-03-20'));

	const infoJson: TJsonBlock[] = [
		{
			label: 'Name',
			value: 'Fabian Railey Victuelles',
			type: 'string',
		},
		{
			label: 'Age',
			value: age,
			type: 'number',
		},
		{
			label: 'Location',
			value: 'Philippines',
			type: 'string',
		},
		{
			label: 'Education',
			value: 'Polytechnic University of the Philippines',
			type: 'string',
		},
		{
			label: 'Course',
			value: 'Bachelor of Science in Computer Science',
			comment: 'Currently 4th year',
			type: 'string',
		},
		{
			label: 'About',
			value: 'Computer Science Undergraduate | Part-time Frontend Developer @ 8boxSolutions Inc.',
			type: 'string',
		},
		{
			label: 'Interests',
			value: ['Coding', 'Algorithms', 'Gaming', 'Music'],
			type: 'array',
		},
	];

	return (
		<>
			<section className="h-screen w-full">
				<div className="relative container flex h-full w-full items-center justify-center">
					<h1 className="font-main xs:text-6xl text-5xl font-semibold lg:text-7xl">
						This is <span className="text-sub-accent">me</span>
					</h1>
					<div className="absolute bottom-10 flex flex-col">
						<FontAwesomeIcon
							color="black"
							icon={faChevronDown}
							className="animation-delay-0 animate-pulse text-2xl md:text-3xl xl:text-4xl"
						/>
						<FontAwesomeIcon
							color="black"
							icon={faChevronDown}
							className="animation-delay-1 animate-pulse text-2xl md:text-3xl xl:text-4xl"
						/>
						<FontAwesomeIcon
							color="black"
							icon={faChevronDown}
							className="animation-delay-2 animate-pulse text-2xl md:text-3xl xl:text-4xl"
						/>
					</div>
				</div>
			</section>
			<section className="flex min-h-screen w-full items-center py-8 lg:min-h-full">
				<div className="container flex h-full flex-col-reverse gap-16 lg:flex-row lg:gap-4">
					<div className="flex-1 basis-1/2 items-center justify-center gap-4 self-center">
						<JsonBlock data={infoJson}></JsonBlock>
					</div>
					<div className="flex basis-1/2 items-center justify-center">
						<div className="overflow relative aspect-square h-auto w-3/4 sm:w-3/5 lg:w-3/4">
							<Image
								src="/images/portraits/my_picture.jpg"
								alt="My Picture"
								fill
								className="relative z-10 rounded-xl object-contain drop-shadow-lg"
								// 3/4, 3/5, 3/4
								sizes="(max-width: 640px) 3/4, (max-width: 768px) 3/5, (max-width: 1024px) 3/4"
							/>
							<Image
								src="/images/background/intro-pic-bg.svg"
								alt="My Picture Background"
								width={0}
								height={0}
								className="absolute top-3 left-3 z-0 h-full w-full rounded-xl object-cover shadow-lg sm:top-4 sm:left-4 xl:top-5 xl:left-5"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

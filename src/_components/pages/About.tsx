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
					<h1 className="font-main text-7xl font-semibold">
						This is <span className="text-sub-accent">me</span>
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
			<section className="h-screen w-full">
				<div className="container flex h-full gap-4">
					<div className="flex-1 basis-1/2 items-center justify-center gap-4 self-center">
						<JsonBlock data={infoJson}></JsonBlock>
					</div>
					<div className="flex basis-1/2 items-center justify-center">
						<div className="overflow relative aspect-square h-auto w-3/4">
							<Image
								src="/images/portraits/my_picture.jpg"
								alt="My Picture"
								fill
								className="relative z-10 rounded-xl object-contain shadow-lg"
							/>
							<Image
								src="/images/background/intro-pic-bg.svg"
								alt="My Picture Background"
								width={0}
								height={0}
								className="absolute top-5 left-5 z-0 h-full w-full rounded-xl object-cover shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

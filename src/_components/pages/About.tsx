import React, { Fragment } from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function About() {
	const birthday = new Date('2003-03-20');
	const today = new Date();
	let age = today.getFullYear() - birthday.getFullYear();
	const monthDifference = today.getMonth() - birthday.getMonth();
	const dayDifference = today.getDate() - birthday.getDate();

	if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
		age--;
	}

	const infoTable: {
		label: string;
		value?: string;
		comment?: string;
		array?: string[];
	}[] = [
		{
			label: 'Name',
			value: 'Fabian Railey Victuelles',
		},
		{
			label: 'Age',
			value: String(age),
		},
		{
			label: 'Location',
			value: 'Philippines',
		},
		{
			label: 'Education',
			value: 'Polytechnic University of the Philippines',
		},
		{
			label: 'Course',
			value: 'Bachelor of Science in Computer Science',
			comment: 'Currently 4th year',
		},
		{
			label: 'About',
			value:
				'I am what they call an enthusiastic coder who focuses on what needed to be fixed and developed with no loose threads attached.',
		},
		{
			label: 'Interests',
			array: ['Coding', 'Gaming', 'Music'],
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
					<div className="flex-1 basis-1/2 self-center rounded-xl bg-[#fafafa] p-4 text-[#383a42] shadow-lg">
						<p className="text-2xl">
							<code>{`{`}</code>
						</p>
						<table className="ml-4 table border-separate border-spacing-x-4 border-spacing-y-2 self-center">
							<tbody>
								{infoTable.map((info, index) => (
									<tr key={`info-${index}`}>
										<th className="float-start text-2xl">
											<code>
												<span className="text-[#e45649]">{info.label}</span>:
											</code>
										</th>
										{info.value && (
											<td className="text-2xl text-[#50a14f]">
												<code>
													"{info.value}" {info.comment && <span className="text-[#a0a1a7]">// {info.comment}</span>}
												</code>
											</td>
										)}
										{info.array && (
											<td className="text-2xl text-[#50a14f]">
												<code>
													<span className="text-[#383a42]">[</span>
													{info.array.map((item, index) => (
														<Fragment key={`${item}-${index}`}>
															{`"${item}"`}
															{index !== info.array?.length! - 1 && <span className="text-[#383a42]">, </span>}
														</Fragment>
													))}
													<span className="text-[#383a42]">]</span>
												</code>
											</td>
										)}
									</tr>
								))}
							</tbody>
						</table>
						<p className="text-2xl">
							<code>{`}`}</code>
						</p>
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

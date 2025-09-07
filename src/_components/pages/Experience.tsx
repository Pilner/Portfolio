import React, { useState, Fragment } from 'react';
import Image from 'next/image';

import { languagesData, frameworksData, toolsData, osData, workData } from '@/_data/data';
import { TStacks } from '@/_types/Stacks';

import { formatDate } from '@/_utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Experience() {
	const [active, setActive] = useState<TStacks[] | null>(null);
	const allStacks = [...languagesData, ...frameworksData, ...toolsData, ...osData];

	return (
		<>
			<section className="h-screen w-full">
				<div className="relative container flex h-full w-full items-center justify-center">
					<h1 className="font-main xs:text-6xl text-center text-5xl font-semibold lg:text-7xl">
						I make <br className="inline md:hidden" /> things <span className="text-sub-accent">work</span>
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

			<section className="bg-gray w-full text-black">
				<div className="my-16 flex h-full w-full flex-col items-center gap-4">
					<div className="border-dark/50 container flex flex-col overflow-hidden rounded-lg border">
						<div className="border-dark/50 flex w-full items-center border-b">
							<div
								className={`hover:bg-dark/25 flex-1 cursor-pointer p-2 transition duration-500 ${active === languagesData ? 'bg-dark/25' : ''}`}
							>
								<p
									className={`font-main transition-[tracking, decoration] text-center text-xs tracking-normal underline duration-250 sm:text-sm md:text-lg lg:text-2xl ${active === languagesData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
									onClick={() => {
										if (active === languagesData) {
											setActive(null);
										} else {
											setActive(languagesData);
										}
									}}
								>
									Languages
								</p>
							</div>
							<div
								className={`hover:bg-dark/25 flex-1 cursor-pointer p-2 transition duration-500 ${active === frameworksData ? 'bg-dark/25' : ''}`}
							>
								<p
									className={`font-main transition-[tracking, decoration] text-center text-xs tracking-normal underline duration-250 sm:text-sm md:text-lg lg:text-2xl ${active === frameworksData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
									onClick={() => {
										if (active === frameworksData) {
											setActive(null);
										} else {
											setActive(frameworksData);
										}
									}}
								>
									Frameworks
								</p>
							</div>
							<div
								className={`hover:bg-dark/25 flex-1 cursor-pointer p-2 transition duration-500 ${active === toolsData ? 'bg-dark/25' : ''}`}
							>
								<p
									className={`font-main transition-[tracking, decoration] text-center text-xs tracking-normal underline duration-250 sm:text-sm md:text-lg lg:text-2xl ${active === toolsData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
									onClick={() => {
										if (active === toolsData) {
											setActive(null);
										} else {
											setActive(toolsData);
										}
									}}
								>
									Tools
								</p>
							</div>
							<div
								className={`hover:bg-dark/25 flex-1 cursor-pointer p-2 transition duration-500 ${active === osData ? 'bg-dark/25' : ''}`}
							>
								<p
									className={`font-main transition-[tracking, decoration] text-center text-xs tracking-normal underline duration-250 sm:text-sm md:text-lg lg:text-2xl ${active === osData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
									onClick={() => {
										if (active === osData) {
											setActive(null);
										} else {
											setActive(osData);
										}
									}}
								>
									OS
								</p>
							</div>
						</div>
						<div className={`flex w-full flex-wrap justify-center gap-1 px-4 py-8 sm:gap-2 md:gap-3 xl:gap-4`}>
							{allStacks.map((stack, index) => (
								<Link href={stack.url} className="contents" target="_blank" rel="noreferrer" key={index}>
									<div
										className={`bg-gray border-dark/25 group relative aspect-square h-16 w-auto rounded-lg p-2 transition duration-500 sm:h-20 md:h-24 lg:h-28 xl:h-30 2xl:h-32 ${active && !active.includes(stack) ? 'opacity-50 blur-sm grayscale' : ''}`}
									>
										<div className="transition-[opacity, color] group-hover:bg-gray relative h-full w-full duration-250 group-hover:opacity-25 group-hover:blur-sm">
											<Image src={stack.imgSrc} alt={stack.alt} fill className="object-contain" unoptimized={false} />
										</div>
										<div className="absolute top-0 left-0 hidden h-full w-full opacity-0 transition-all duration-250 group-hover:flex group-hover:items-center group-hover:justify-center group-hover:opacity-100">
											<p className="font-secondary text-sm font-semibold text-black">{stack.text}</p>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="flex w-full">
				<div className="container my-16 flex min-h-full flex-col gap-8 rounded-xl p-4">
					{workData.map((work, index) => (
						<Fragment key={`work-${index}`}>
							<div className="flex flex-col-reverse gap-8 lg:flex-row lg:justify-between lg:gap-16">
								<div className="h-full w-full">
									<div className="mb-4 flex flex-col">
										<div className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
											<Link href={work.link} target="_blank" rel="noreferrer">
												<h2 className="font-main transition-[tracking, decoration] text-center text-xl font-bold tracking-normal underline decoration-transparent duration-250 hover:tracking-widest hover:decoration-black lg:text-left lg:text-2xl">
													{work.companyName}
												</h2>
											</Link>
											<p className="font-secondary lg:text-md text-center text-sm font-semibold lg:text-left">
												({formatDate(work.startDate)} - {formatDate(work.endDate)})
											</p>
										</div>
										<p className="font-secondary text-md text-center font-semibold lg:text-left lg:text-lg">
											{work.position}
										</p>
									</div>
									<p className="font-secondary text-md text-justify lg:text-left lg:text-lg">{work.description}</p>
								</div>
								<div className="border-dark/50 relative mx-auto aspect-square h-64 w-64 overflow-clip rounded-xl border">
									<Image
										src={work.imageSrc}
										alt={`${work.companyName} Logo`}
										fill
										className="h-auto w-auto object-contain"
										sizes="16rem"
									/>
								</div>
							</div>
							{index !== workData.length - 1 && <hr className="border-dark/50" />}
						</Fragment>
					))}
					<hr className="border-dark/50" />
				</div>
			</section>
		</>
	);
}

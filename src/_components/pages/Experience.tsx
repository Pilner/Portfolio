import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { languagesData, frameworksData, toolsData, osData, workData } from '@/_data/data';
import { StacksData } from '@/_types/Stacks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Experience() {
	const [active, setActive] = useState<StacksData[]>(languagesData);

	useEffect(() => {
		// if active changes, have a loading state
	}, [active]);

	function formatDate(date: Date | false) {
		if (date === false) {
			return 'Present';
		}

		return new Date(date).toLocaleString('default', { month: 'short', year: 'numeric' });
	}

	return (
		<>
			<section className="h-screen w-full">
				<div className="relative container flex h-full w-full items-center justify-center">
					<h1 className="font-main text-7xl font-semibold">
						I make things <span className="text-sub-accent">work</span>
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
			<section className="bg-gray w-full text-black">
				<div className="my-16 flex h-full w-full flex-col items-center gap-4">
					<div className="border-dark/50 container flex flex-col overflow-hidden rounded-lg border">
						<div className="border-dark/50 flex w-full items-center border-b">
							<div className={`flex-1 p-2 transition duration-500 ${active === languagesData ? 'bg-dark/25' : ''}`}>
								<p
									className={`font-main transition-[tracking, decoration] text-center text-2xl tracking-normal underline duration-250 ${active === languagesData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
									onMouseEnter={() => setActive(languagesData)}
									onClick={() => setActive(languagesData)}
								>
									Languages
								</p>
							</div>
							<div className={`flex-1 p-2 transition duration-250 ${active === frameworksData ? 'bg-dark/25' : ''}`}>
								<p
									className={`font-main transition-[tracking, decoration] text-center text-2xl tracking-normal underline duration-250 ${active === frameworksData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
									onMouseEnter={() => setActive(frameworksData)}
									onClick={() => setActive(frameworksData)}
								>
									Frameworks
								</p>
							</div>
							<div className={`flex-1 p-2 transition duration-250 ${active === toolsData ? 'bg-dark/25' : ''}`}>
								<p
									className={`font-main transition-[tracking, decoration] text-center text-2xl tracking-normal underline duration-250 ${active === toolsData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
									onMouseEnter={() => setActive(toolsData)}
									onClick={() => setActive(toolsData)}
								>
									Tools
								</p>
							</div>
							<div className={`flex-1 p-2 transition duration-250 ${active === osData ? 'bg-dark/25' : ''}`}>
								<p
									className={`font-main transition-[tracking, decoration] text-center text-2xl tracking-normal underline duration-250 ${active === osData ? 'font-bold tracking-widest text-black decoration-black' : 'font-semibold text-black/25 decoration-transparent'}`}
									onMouseEnter={() => setActive(osData)}
									onClick={() => setActive(osData)}
								>
									OS
								</p>
							</div>
						</div>
						<div className={`flex w-full flex-wrap justify-center gap-4 px-4 py-8 transition duration-500`}>
							{active.map((stack, index) => (
								<Link href={stack.url} className="contents" target="_blank" rel="noreferrer">
									<div
										key={index}
										className="bg-gray border-dark/25 group relative aspect-square h-32 w-auto rounded-lg border p-2 hover:scale-100"
									>
										<div className="transition-[opacity, color] group-hover:bg-gray relative h-full w-full duration-250 group-hover:opacity-25 group-hover:blur-sm">
											<Image src={stack.imgSrc} alt={stack.alt} fill className="object-contain" />
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
			<section className="flex min-h-screen w-full">
				<div className="container my-16 flex min-h-full flex-col gap-8 rounded-xl border p-4">
					{workData.map((work, index) => (
						<div key={`work-${index}`} className="flex h-[20rem] justify-between gap-16">
							<div className="h-full">
								<div className="mb-4 flex flex-col">
									<div className="flex items-center gap-4">
										<Link href={work.link} target="_blank" rel="noreferrer">
											<h2 className="font-main transition-[tracking, decoration] text-2xl font-bold tracking-normal underline decoration-transparent duration-250 hover:tracking-widest hover:decoration-black">
												{work.companyName}
											</h2>
										</Link>
										<p className="font-secondary text-md font-semibold">
											({formatDate(work.startDate)} - {formatDate(work.endDate)})
										</p>
									</div>
									<p className="font-secondary text-lg font-semibold">{work.position}</p>
								</div>
								<p className="font-secondary text-lg">{work.description}</p>
							</div>
							<div className="border-dark/50 relative aspect-square h-full w-auto overflow-clip rounded-xl border">
								<Image
									src={work.imageSrc}
									alt={`${work.companyName} Logo`}
									fill
									className="h-full w-auto object-contain"
								/>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

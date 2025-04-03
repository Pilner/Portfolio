'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import TransitionLink from '../ui/TransitionLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faDiagramProject, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const TabList = [
	{
		name: 'hero',
		icon: faHouse,
		text: 'Home',
		url: '/',
	},
	{
		name: 'about',
		icon: faUser,
		text: 'About',
		url: '/about',
	},
	{
		name: 'experience',
		icon: faBriefcase,
		text: 'Experience',
		url: '/experience',
	},
	{
		name: 'projects',
		icon: faDiagramProject,
		text: 'Projects',
		url: '/projects',
	},
];

export function Navbar() {
	const activeTab = usePathname();
	console.log(activeTab);

	return (
		<div className="relative w-full">
			<nav className="absolute top-2 left-1/2 z-50 my-auto w-full -translate-x-1/2 py-4 opacity-25 transition-opacity duration-250 hover:opacity-100 lg:fixed lg:top-1/2 lg:right-2 lg:left-auto lg:w-[5rem] lg:-translate-y-1/2 lg:translate-x-0">
				<div className="flex h-full flex-row items-center justify-center lg:flex-col">
					<ul className="flex w-3/4 flex-row justify-between sm:w-1/2 lg:flex-col lg:gap-16">
						{TabList.map((tab, index) => (
							<TransitionLink href={tab.url} className="contents" key={`tab-${index}`} disabled={tab.url === activeTab}>
								<li
									className={`group transition-[color, margin] relative z-[200] flex aspect-square h-[2.75rem] w-[2.75rem] items-center justify-center rounded-lg border duration-250 hover:my-2 sm:h-[3rem] sm:w-[3rem] ${tab.url === activeTab ? 'bg-dark border-dark cursor-default text-white' : 'text-dark border-dark/50 hover:bg-dark cursor-pointer bg-white hover:text-white'}`}
								>
									<FontAwesomeIcon icon={tab.icon} />
									<div className="text-dark absolute top-1/2 right-1/2 z-[199] flex -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-lg px-1 opacity-0 transition-all duration-500 group-hover:top-[150%] group-hover:opacity-100 lg:-right-0 lg:translate-x-0 lg:group-hover:top-1/2 lg:group-hover:right-[125%]">
										<p className="text-dark text-md font-normal lg:text-lg">{tab.text}</p>
									</div>
								</li>
							</TransitionLink>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
}

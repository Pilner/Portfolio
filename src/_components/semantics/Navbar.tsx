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
		<nav className="fixed top-1/2 right-2 z-50 my-auto w-[5rem] -translate-y-1/2 py-4 opacity-25 transition-opacity duration-250 hover:opacity-100">
			<div className="flex h-full flex-col items-center justify-center">
				<ul className="flex flex-col gap-16">
					{TabList.map((tab, index) => (
						<TransitionLink href={tab.url} className="contents" key={`tab-${index}`} disabled={tab.url === activeTab}>
							<li
								className={`group transition-[color, margin] relative z-[200] flex aspect-square h-[3rem] w-[3rem] items-center justify-center rounded-lg border border-black bg-black duration-250 hover:my-2 hover:bg-white hover:text-black ${tab.url === activeTab ? 'cursor-default bg-white text-black' : 'cursor-pointer text-white'}`}
							>
								<FontAwesomeIcon icon={tab.icon} />
								<div className="bg-gray/25 absolute top-1/2 -right-0 z-[199] flex -translate-y-1/2 items-center justify-center rounded-lg p-1 text-black opacity-0 transition-all duration-500 group-hover:right-[125%] group-hover:opacity-100">
									<p className="text-lg font-normal text-black">{tab.text}</p>
								</div>
							</li>
						</TransitionLink>
					))}
				</ul>
			</div>
		</nav>
	);
}

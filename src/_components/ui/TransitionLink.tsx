'use client';

import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import { sleep } from '@/_utils';

interface TransitionLinkProps extends LinkProps {
	children: React.ReactNode;
	href: string;
	className?: string;
	disabled?: boolean;
}

export default function TransitionLink({ children, href, className, disabled, ...props }: TransitionLinkProps) {
	const router = useRouter();

	const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		if (disabled) {
			return;
		}
		const body = document.querySelector('body');
		body?.classList.add('page-transition');
		await sleep(250);
		router.push(href);
	};

	return (
		<Link href={href} {...props} onClick={handleClick} className={className}>
			{children}
		</Link>
	);
}

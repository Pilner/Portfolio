'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface RouteTransitionLayoutProps {
	children: React.ReactNode;
}

export default function RouteTransitionLayout({ children }: RouteTransitionLayoutProps) {
	const pathname = usePathname();

	useEffect(() => {
		const body = document.querySelector('body');
		body?.classList.remove('page-transition');
	}, [pathname]);

	return <>{children}</>;
}

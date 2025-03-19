import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
	return (
		<>
			<section className="h-screen w-full">
				<div className="relative container flex h-full w-full items-center justify-center">
					<h1 className="font-main text-7xl font-semibold">
						Give me a <span className="text-sub-accent">call</span>
					</h1>
					<div className="absolute bottom-10 flex flex-col">
						<FontAwesomeIcon size="2xl" color="black" icon={faChevronDown} />
						<FontAwesomeIcon size="2xl" color="black" icon={faChevronDown} />
						<FontAwesomeIcon size="2xl" color="black" icon={faChevronDown} />
					</div>
				</div>
			</section>
		</>
	);
}

import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { TJsonBlock } from '@/_types/JsonBlock';

interface JsonBlockProps {
	data: TJsonBlock[];
}

export default function JsonBlock({ data }: JsonBlockProps) {
	return (
		<div className="border-dark/25 flex flex-col overflow-clip rounded-xl border shadow-lg">
			<div className="relative flex gap-4 p-4">
				<div className="aspect-square h-4 rounded-full bg-[#FF605C]" />
				<div className="aspect-square h-4 rounded-full bg-[#FFBD44]" />
				<div className="aspect-square h-4 rounded-full bg-[#00CA4E]" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default">
					<div className="flex items-center justify-center gap-2">
						<FontAwesomeIcon icon={faFileCode} className="text-dark/50 text-lg" />
						<p className="font-secondary text-dark/50 text-lg font-semibold">my_info.json</p>
					</div>
				</div>
			</div>
			<div className="bg-[#fafafa] p-4 text-[#383a42] shadow-lg">
				<p className="text-2xl">
					<code>{`{`}</code>
				</p>
				<table className="ml-4 table border-separate border-spacing-x-4 border-spacing-y-2 self-center">
					<tbody>
						{data.map((info, index) => (
							<tr key={`info-${index}`}>
								<th className="float-start text-2xl">
									<code>
										<span className="text-[#e45649]">{info.label}</span>:
									</code>
								</th>
								{info.type === 'string' && (
									<td className="text-2xl text-[#50a14f]">
										<code>
											{`"${info.value}"`}{' '}
											{info.comment && <span className="text-[#a0a1a7]">{`// ` + info.comment}</span>}
										</code>
									</td>
								)}
								{info.type === 'number' && (
									<td className="text-2xl text-[#c18401]">
										<code>
											{info.value} {info.comment && <span className="text-[#a0a1a7]">{`//` + info.comment}</span>}
										</code>
									</td>
								)}
								{info.type === 'array' && (
									<td className="text-2xl">
										<code>
											<span className="text-[#383a42]">[</span>

											{typeof (info.value as string[] | number[])[0] === 'string'
												? (info.value as string[]).map((item, index) => (
														<Fragment key={`${item}-${index}`}>
															<span className="text-[#50a14f]">{`"${item}"`}</span>
															{index !== (info.value as string[]).length - 1 && (
																<span className="text-[#383a42]">, </span>
															)}
														</Fragment>
													))
												: (info.value as number[]).map((item, index) => (
														<Fragment key={`${item}-${index}`}>
															<span className="text-[#c18401]">{item}</span>
															{index !== (info.value as number[]).length - 1 && (
																<span className="text-[#383a42]">, </span>
															)}
														</Fragment>
													))}

											<span className="text-[#383a42]">
												] {info.comment && <span className="text-[#a0a1a7]">{`//` + info.comment}</span>}
											</span>
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
		</div>
	);
}

export type TJsonBlock = {
	label: string;
	value: string | number | string[] | number[];
	comment?: string;
	type: 'string' | 'array' | 'number';
};

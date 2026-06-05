export type TJsonBlock = {
  type: 'string' | 'array' | 'number';
  label: string;
  value: string | number | (string | number)[];
  comment?: string;
};

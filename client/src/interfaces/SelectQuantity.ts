import { ChangeEvent } from 'react';

export interface ISelectQuantityProps {
  countInStock: number | undefined;
  value: number | string;
  setter: (event: ChangeEvent<HTMLSelectElement>) => void;
}

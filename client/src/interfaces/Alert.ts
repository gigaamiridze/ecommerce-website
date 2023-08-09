import { ReactNode } from 'react';

export interface IAlertVariant {
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export interface IAlertProps extends IAlertVariant {
  children: ReactNode;
}

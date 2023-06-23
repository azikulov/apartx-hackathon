import type { ColumnProps } from './types';

export function Column({ children, className, columns, ...rest }: ColumnProps) {
  return (
    <div {...rest} className={`${className} grid grid-cols-2 gap-x-6`}>
      {children}
    </div>
  );
}

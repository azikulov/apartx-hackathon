import type { RowProps } from './types';

export function Row({ children, className, columns, ...rest }: RowProps) {
  return (
    <div {...rest} className={`${className} grid grid-row-1 gap-y-6`}>
      {children}
    </div>
  );
}

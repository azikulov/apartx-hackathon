import type { TableProps } from './types';

export function Table({ header, body, className }: TableProps) {
  return (
    <div className={className}>
      <div>{header}</div>
      <div>{body}</div>
    </div>
  );
}

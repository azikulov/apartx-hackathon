import type { TableProps } from './types';

export function Table({ header, content, className }: TableProps) {
  return (
    <div className={className}>
      <div>{header}</div>
      <div>{content}</div>
    </div>
  );
}

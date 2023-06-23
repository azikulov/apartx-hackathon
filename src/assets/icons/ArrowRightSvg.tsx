import type { SVGProps } from 'react';

export function ArrowRightSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='16' cy='16' r='16' fill='white' />
      <path d='M13 10L19 16L13 22' stroke='#5774CD' strokeWidth='1.5' />
    </svg>
  );
}

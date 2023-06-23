import type { SVGProps } from 'react';

export function PlusSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Group 6'>
        <circle id='Ellipse 3' cx='10' cy='10' r='10' fill='white' />
        <path
          id='Vector 4'
          d='M6.25 10H13.75'
          stroke='#5774CD'
          strokeLinecap='round'
        />
        <path
          id='Vector 2'
          d='M10 6.25V13.75'
          stroke='#5774CD'
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
}

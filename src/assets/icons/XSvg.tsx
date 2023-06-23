import type { SVGProps } from 'react';

export function XSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Group 11'>
        <path
          id='Vector 6'
          d='M1.5 1.5L13.5 13.5'
          stroke='#2D2F37'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
        <path
          id='Vector 7'
          d='M13.5 1.5L1.5 13.5'
          stroke='#2D2F37'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
      </g>
    </svg>
  );
}

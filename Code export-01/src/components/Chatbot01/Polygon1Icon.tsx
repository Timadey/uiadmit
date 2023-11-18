import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 268 268' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M134 0L250.047 201H17.9526L134 0Z' fill='#FFC8E2' />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };

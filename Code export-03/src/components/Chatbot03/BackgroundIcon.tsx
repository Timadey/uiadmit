import { memo, SVGProps } from 'react';

const BackgroundIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={16} cy={16} r={16} fill='#F2F8FF' />
  </svg>
);

const Memo = memo(BackgroundIcon);
export { Memo as BackgroundIcon };

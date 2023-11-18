import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 240 240' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={120} cy={120} r={120} fill='#FFF0C8' />
  </svg>
);

const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };

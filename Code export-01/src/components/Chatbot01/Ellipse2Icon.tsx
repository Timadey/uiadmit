import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 198 198' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={99} cy={99} r={99} fill='#C8FFF2' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };

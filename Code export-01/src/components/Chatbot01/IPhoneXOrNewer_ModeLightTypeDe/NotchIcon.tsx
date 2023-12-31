import { memo, SVGProps } from 'react';

const NotchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 219 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 0H219V0C216.894 0.602689 215.418 2.49525 215.345 4.68446L215.317 5.5618V5.5618C215.317 19.0587 204.375 30 190.878 30H28.1217C14.6249 30 3.68349 19.0587 3.68349 5.5618V5.5618L3.65455 4.68447C3.58233 2.49525 2.10586 0.602689 0 0V0Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(NotchIcon);
export { Memo as NotchIcon };

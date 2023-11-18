import { memo, SVGProps } from 'react';

const GroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.70467 2.458C8.76533 1.19 12.274 2.644 13.542 5.70467C14.81 8.76533 13.356 12.274 10.2953 13.542C7.23467 14.81 3.726 13.356 2.458 10.2953C1.19067 7.23467 2.644 3.726 5.70467 2.458'
      stroke='white'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.812 5.32333V8.424L10.2493 9.91'
      stroke='white'
      strokeWidth={1.2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(GroupIcon2);
export { Memo as GroupIcon2 };

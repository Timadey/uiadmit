import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.557 3.687C13.148 1.785 18.411 3.966 20.313 8.557C22.215 13.148 20.034 18.411 15.443 20.313C10.852 22.215 5.589 20.034 3.687 15.443C1.786 10.852 3.966 5.589 8.557 3.687'
      stroke='#323232'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.718 7.985V12.636L15.374 14.865'
      stroke='#323232'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };

import { memo, SVGProps } from 'react';

const RightSideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 68 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.35}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M43 3.00004C43 1.52728 44.1939 0.333374 45.6667 0.333374H62.3333C63.8061 0.333374 65 1.52728 65 3.00004V9.00004C65 10.4728 63.8061 11.6667 62.3333 11.6667H45.6667C44.1939 11.6667 43 10.4728 43 9.00004V3.00004Z'
      stroke='#212226'
    />
    <path
      opacity={0.4}
      d='M66 4.00004V8.00004C66.8047 7.66126 67.328 6.87317 67.328 6.00004C67.328 5.12691 66.8047 4.33882 66 4.00004'
      fill='#212226'
    />
    <path
      d='M45 3.66671C45 2.93033 45.597 2.33337 46.3333 2.33337H61.6667C62.403 2.33337 63 2.93033 63 3.66671V8.33337C63 9.06975 62.403 9.66671 61.6667 9.66671H46.3333C45.597 9.66671 45 9.06975 45 8.33337V3.66671Z'
      fill='#212226'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M30.3303 2.60802C32.5462 2.60811 34.6774 3.45955 36.2833 4.98635C36.4043 5.10422 36.5976 5.10274 36.7167 4.98302L37.8727 3.81635C37.933 3.75563 37.9666 3.67338 37.9661 3.58779C37.9656 3.50221 37.931 3.42036 37.87 3.36035C33.6549 -0.679198 27.0051 -0.679198 22.79 3.36035C22.7289 3.42032 22.6943 3.50215 22.6937 3.58773C22.6932 3.67331 22.7267 3.75558 22.787 3.81635L23.9433 4.98302C24.0624 5.10292 24.2558 5.10441 24.3767 4.98635C25.9828 3.45945 28.1142 2.60801 30.3303 2.60802ZM30.3303 6.40368C31.5478 6.40361 32.7219 6.85614 33.6243 7.67335C33.7464 7.78933 33.9387 7.78682 34.0577 7.66768L35.2123 6.50102C35.2731 6.43982 35.3069 6.3568 35.306 6.27054C35.3051 6.18428 35.2697 6.10196 35.2077 6.04202C32.4595 3.48563 28.2035 3.48563 25.4553 6.04202C25.3932 6.10196 25.3578 6.18432 25.357 6.27061C25.3562 6.3569 25.3901 6.43991 25.451 6.50102L26.6053 7.66768C26.7243 7.78682 26.9166 7.78933 27.0387 7.67335C27.9405 6.85668 29.1136 6.40419 30.3303 6.40368ZM32.6433 8.9575C32.6451 9.04401 32.6111 9.12741 32.5493 9.18801L30.552 11.2037C30.4934 11.2629 30.4136 11.2963 30.3303 11.2963C30.247 11.2963 30.1672 11.2629 30.1087 11.2037L28.111 9.18801C28.0493 9.12736 28.0153 9.04393 28.0172 8.95743C28.019 8.87092 28.0564 8.789 28.1207 8.73102C29.3962 7.65213 31.2644 7.65213 32.54 8.73102C32.6042 8.78905 32.6416 8.87099 32.6433 8.9575Z'
      fill='#212226'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.6667 0.666626H15.6667C15.1144 0.666626 14.6667 1.11434 14.6667 1.66663V10.3333C14.6667 10.8856 15.1144 11.3333 15.6667 11.3333H16.6667C17.2189 11.3333 17.6667 10.8856 17.6667 10.3333V1.66663C17.6667 1.11434 17.2189 0.666626 16.6667 0.666626ZM11 2.99996H12C12.5523 2.99996 13 3.44768 13 3.99996V10.3333C13 10.8856 12.5523 11.3333 12 11.3333H11C10.4477 11.3333 10 10.8856 10 10.3333V3.99996C10 3.44768 10.4477 2.99996 11 2.99996ZM7.33331 5.33329H6.33331C5.78103 5.33329 5.33331 5.78101 5.33331 6.33329V10.3333C5.33331 10.8856 5.78103 11.3333 6.33331 11.3333H7.33331C7.8856 11.3333 8.33331 10.8856 8.33331 10.3333V6.33329C8.33331 5.78101 7.8856 5.33329 7.33331 5.33329ZM2.66666 7.33329H1.66666C1.11437 7.33329 0.666656 7.78101 0.666656 8.33329V10.3333C0.666656 10.8856 1.11437 11.3333 1.66666 11.3333H2.66666C3.21894 11.3333 3.66666 10.8856 3.66666 10.3333V8.33329C3.66666 7.78101 3.21894 7.33329 2.66666 7.33329Z'
      fill='#212226'
    />
  </svg>
);

const Memo = memo(RightSideIcon);
export { Memo as RightSideIcon };

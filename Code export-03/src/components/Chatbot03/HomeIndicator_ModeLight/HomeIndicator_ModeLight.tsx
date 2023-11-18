import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HomeIndicator_ModeLight.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    homeIndicator?: string;
  };
}
/* @figmaId 1:1151 */
export const HomeIndicator_ModeLight: FC<Props> = memo(function HomeIndicator_ModeLight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.homeIndicator || ''} ${classes.homeIndicator}`}></div>
    </div>
  );
});

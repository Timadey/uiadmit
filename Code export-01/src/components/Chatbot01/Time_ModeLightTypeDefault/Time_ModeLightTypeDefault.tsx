import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _941Icon } from './_941Icon.js';
import classes from './Time_ModeLightTypeDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    _941?: ReactNode;
  };
}
/* @figmaId 1:54 */
export const Time_ModeLightTypeDefault: FC<Props> = memo(function Time_ModeLightTypeDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes._941}>{props.swap?._941 || <_941Icon className={classes.icon} />}</div>
    </div>
  );
});

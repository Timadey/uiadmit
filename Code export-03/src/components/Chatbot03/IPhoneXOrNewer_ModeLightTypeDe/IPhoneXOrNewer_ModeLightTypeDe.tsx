import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Time_ModeLightTypeDefault } from '../Time_ModeLightTypeDefault/Time_ModeLightTypeDefault.js';
import classes from './IPhoneXOrNewer_ModeLightTypeDe.module.css';
import { NotchIcon } from './NotchIcon.js';
import { RightSideIcon } from './RightSideIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    rightSide?: string;
  };
  swap?: {
    rightSide?: ReactNode;
    time?: ReactNode;
  };
  hide?: {
    notch?: boolean;
  };
}
/* @figmaId 1:7 */
export const IPhoneXOrNewer_ModeLightTypeDe: FC<Props> = memo(function IPhoneXOrNewer_ModeLightTypeDe(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.notch && (
        <div className={classes.notch}>
          <NotchIcon className={classes.icon} />
        </div>
      )}
      <div className={`${props.classes?.rightSide || ''} ${classes.rightSide}`}>
        {props.swap?.rightSide || <RightSideIcon className={classes.icon2} />}
      </div>
      {props.swap?.time || <Time_ModeLightTypeDefault className={classes.time} />}
    </div>
  );
});

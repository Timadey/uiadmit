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
    rightSide?: string;
    root?: string;
  };
  swap?: {
    rightSide?: ReactNode;
    _941?: ReactNode;
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
      <Time_ModeLightTypeDefault
        className={classes.time}
        swap={{
          _941: props.swap?._941,
        }}
      />
    </div>
  );
});

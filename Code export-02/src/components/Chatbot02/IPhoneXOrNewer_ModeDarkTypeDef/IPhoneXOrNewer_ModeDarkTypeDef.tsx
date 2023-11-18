import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IPhoneXOrNewer_ModeLightTypeDe } from '../IPhoneXOrNewer_ModeLightTypeDe/IPhoneXOrNewer_ModeLightTypeDe.js';
import { Time_ModeDarkTypeDefault } from '../Time_ModeDarkTypeDefault/Time_ModeDarkTypeDefault.js';
import classes from './IPhoneXOrNewer_ModeDarkTypeDef.module.css';
import { RightSideIcon } from './RightSideIcon.js';

interface Props {
  className?: string;
  classes?: {
    rightSide?: string;
    root?: string;
  };
  swap?: {
    rightSide?: ReactNode;
  };
  hide?: {
    notch?: boolean;
  };
}
/* @figmaId 1:41 */
export const IPhoneXOrNewer_ModeDarkTypeDef: FC<Props> = memo(function IPhoneXOrNewer_ModeDarkTypeDef(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <IPhoneXOrNewer_ModeLightTypeDe
        className={classes.iPhoneXOrNewer}
        classes={{ rightSide: props.classes?.rightSide || '' }}
        swap={{
          rightSide: props.swap?.rightSide || <RightSideIcon className={classes.icon} />,
          time: <Time_ModeDarkTypeDefault className={classes.time} />,
        }}
        hide={{
          notch: props.hide?.notch,
        }}
      />
    </div>
  );
});

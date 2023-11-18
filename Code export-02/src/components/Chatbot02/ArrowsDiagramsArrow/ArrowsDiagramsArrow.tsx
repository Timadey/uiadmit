import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowsDiagramsArrow.module.css';
import { GroupIcon } from './GroupIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 1:1318 */
export const ArrowsDiagramsArrow: FC<Props> = memo(function ArrowsDiagramsArrow(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.group}>{props.swap?.group || <GroupIcon className={classes.icon} />}</div>
    </div>
  );
});

import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _941Icon } from './_941Icon.js';
import classes from './Chatbot01.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Ellipse148Icon } from './Ellipse148Icon.js';
import { Group4Icon } from './Group4Icon.js';
import { IPhoneXOrNewer_ModeLightTypeDe } from './IPhoneXOrNewer_ModeLightTypeDe/IPhoneXOrNewer_ModeLightTypeDe.js';
import { Polygon1Icon } from './Polygon1Icon.js';
import { RightSideIcon } from './RightSideIcon.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
  hide?: {
    notch?: boolean;
  };
}
/* @figmaId 106:3094 */
export const Chatbot01: FC<Props> = memo(function Chatbot01(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon3} />
      </div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon5} />
      </div>
      <div className={classes.union}>
        <UnionIcon className={classes.icon6} />
      </div>
      <div className={classes.uiAdmissionPortal_1}></div>
      <IPhoneXOrNewer_ModeLightTypeDe
        className={classes.iPhoneXOrNewer}
        classes={{ rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon} />
            </div>
          ),
          _941: <_941Icon className={classes.icon2} />,
        }}
        hide={{
          notch: true,
        }}
      />
      <div className={classes.frame2127}>
        <div className={classes.ellipse148}>
          <Ellipse148Icon className={classes.icon7} />
        </div>
        <div className={classes.chatbotIcon1}></div>
        <div className={classes.whiteMessageWhiteChatBubbleAng}></div>
        <div className={classes.group4}>
          <Group4Icon className={classes.icon8} />
        </div>
        <div className={classes.hiThereNeedSomeHelp}>
          <div className={classes.textBlock}>Hi, there!</div>
          <div className={classes.textBlock2}>Need some help?</div>
        </div>
        <div className={classes.closeButton_black1}></div>
      </div>
    </div>
  );
});

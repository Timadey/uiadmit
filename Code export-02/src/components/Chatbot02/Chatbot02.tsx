import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowsDiagramsArrow } from './ArrowsDiagramsArrow/ArrowsDiagramsArrow.js';
import classes from './Chatbot02.module.css';
import { Ellipse144Icon2 } from './Ellipse144Icon2.js';
import { Ellipse144Icon } from './Ellipse144Icon.js';
import { Ellipse147Icon } from './Ellipse147Icon.js';
import { Ellipse148Icon } from './Ellipse148Icon.js';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import { InterfaceEssentialAlarmClockTi } from './InterfaceEssentialAlarmClockTi/InterfaceEssentialAlarmClockTi.js';
import { IPhoneXOrNewer_ModeDarkTypeDef } from './IPhoneXOrNewer_ModeDarkTypeDef/IPhoneXOrNewer_ModeDarkTypeDef.js';
import { Line1Icon } from './Line1Icon.js';
import { RightSideIcon } from './RightSideIcon.js';

interface Props {
  className?: string;
  hide?: {
    notch?: boolean;
  };
}
/* @figmaId 1:1558 */
export const Chatbot02: FC<Props> = memo(function Chatbot02(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle6}></div>
      <ArrowsDiagramsArrow
        className={classes.arrowsDiagramsArrow}
        swap={{
          group: <GroupIcon className={classes.icon} />,
        }}
      />
      <div className={classes.messages}>Messages</div>
      <div className={classes.hiThere}>Hi There 👋</div>
      <div className={classes.welcomeToUIAdmitGuideAskAnythi}>
        <div className={classes.textBlock}>
          Welcome to UIAdmitGuide. Ask anything about University of Ibadan admissions.
        </div>
        <div className={classes.textBlock2}>What can I help you with today? </div>
        <div className={classes.textBlock3}>I’m here and happy to assist.</div>
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.startANewCoversation}>Start A New Coversation</div>
      <div className={classes.ellipse148}>
        <Ellipse148Icon className={classes.icon4} />
      </div>
      <div className={classes.chatbotIcon1}></div>
      <div className={classes.uIAdmitGuideUsualReplyTime}>UIAdmitGuide Usual Reply Time</div>
      <div className={classes._6Sec}>6 sec</div>
      <InterfaceEssentialAlarmClockTi
        className={classes.interfaceEssentialAlarmClockTi}
        classes={{ group: classes.group }}
        swap={{
          group: (
            <div className={classes.group}>
              <GroupIcon2 className={classes.icon2} />
            </div>
          ),
        }}
      />
      <div className={classes.frame}>
        <div className={classes.sendMessageToUIAdmitGuide}>Send Message to UIAdmitGuide</div>
      </div>
      <div className={classes.recentConversation}>
        <div className={classes.latestUpdates}>Latest Updates</div>
        <div className={classes._3}>
          <div className={classes.avatar05}>
            <div className={classes.ellipse144}>
              <Ellipse144Icon className={classes.icon5} />
            </div>
            <div className={classes.uILogo2}></div>
          </div>
          <div className={classes._32}>
            <div className={classes.pREPARATIONFORUIPUTMEEXERCISE}>PREPARATION FOR UI PUTME EXERCISE</div>
            <div className={classes.uIAdmitGuide2dAgo}>UIAdmitGuide - 2d ago</div>
          </div>
        </div>
      </div>
      <div className={classes.ellipse1442}>
        <Ellipse144Icon2 className={classes.icon6} />
      </div>
      <div className={classes.uILogo22}></div>
      <IPhoneXOrNewer_ModeDarkTypeDef
        className={classes.iPhoneXOrNewer}
        classes={{ rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon3} />
            </div>
          ),
        }}
        hide={{
          notch: true,
        }}
      />
      <div className={classes.ReturnToUIAdmissionsPortal}>&lt;&lt; Return to UI Admissions Portal</div>
      <div className={classes.line1}>
        <Line1Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse147}>
        <Ellipse147Icon className={classes.icon8} />
      </div>
      <div className={classes.chatbotIcon12}></div>
      <div className={classes.messenger}></div>
      <div className={classes.xCloseButton_w1}></div>
      <div className={classes.telegramIcon}></div>
      <div className={classes.whatsappIcon}></div>
    </div>
  );
});

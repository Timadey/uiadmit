import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ArrowsDiagramsArrow } from './ArrowsDiagramsArrow/ArrowsDiagramsArrow.js';
import { BackgroundIcon } from './BackgroundIcon.js';
import { CategoriesIconButtonIcon } from './CategoriesIconButtonIcon.js';
import classes from './Chatbot03.module.css';
import { DeleteButtonIcon } from './DeleteButtonIcon.js';
import { DictationIcon } from './DictationIcon.js';
import { Ellipse12Icon } from './Ellipse12Icon.js';
import { Ellipse147Icon } from './Ellipse147Icon.js';
import { EmojiIcon } from './EmojiIcon.js';
import { GroupIcon } from './GroupIcon.js';
import { IPhoneXOrNewer_ModeDarkTypeDef } from './IPhoneXOrNewer_ModeDarkTypeDef/IPhoneXOrNewer_ModeDarkTypeDef.js';
import { Keyboard_ModeLightTypeAlphabet } from './Keyboard_ModeLightTypeAlphabet/Keyboard_ModeLightTypeAlphabet.js';
import { RectangleIcon2 } from './RectangleIcon2.js';
import { RectangleIcon3 } from './RectangleIcon3.js';
import { RectangleIcon4 } from './RectangleIcon4.js';
import { RectangleIcon } from './RectangleIcon.js';
import { RightSideIcon } from './RightSideIcon.js';
import { ShiftIcon } from './ShiftIcon.js';

interface Props {
  className?: string;
  hide?: {
    notch?: boolean;
  };
}
/* @figmaId 1:1602 */
export const Chatbot03: FC<Props> = memo(function Chatbot03(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle62}></div>
      <ArrowsDiagramsArrow
        className={classes.arrowsDiagramsArrow}
        swap={{
          group: <GroupIcon className={classes.icon} />,
        }}
      />
      <div className={classes.conversation}>Conversation</div>
      <div className={classes.ellipse147}>
        <Ellipse147Icon className={classes.icon11} />
      </div>
      <div className={classes.chatbotIcon1}></div>
      <div className={classes.uIAdmitGuide}>UIAdmitGuide </div>
      <div className={classes.thisIsPrivateMessageBetweenYou}>
        This is private message, between you and UIAdmitGuide. this chat is end to end encrypted...
      </div>
      <div className={classes.sendAMessagePrompt}>
        <div className={classes.sendMessageInput}>
          <div className={classes.input}>
            <div className={classes.typeAMessage}>Type a message...</div>
          </div>
          <div className={classes.categoriesIconButton}>
            <CategoriesIconButtonIcon className={classes.icon12} />
          </div>
        </div>
      </div>
      <Keyboard_ModeLightTypeAlphabet
        className={classes.keyboard}
        classes={{
          homeIndicator2: classes.homeIndicator,
          dictation: classes.dictation,
          emoji: classes.emoji,
          rectangle: classes.rectangle,
          rectangle2: classes.rectangle2,
          rectangle3: classes.rectangle3,
          rectangle4: classes.rectangle4,
          deleteButton: classes.deleteButton,
          rectangle5: classes.rectangle5,
          rectangle6: classes.rectangle6,
          rectangle7: classes.rectangle7,
          rectangle8: classes.rectangle8,
          rectangle9: classes.rectangle9,
          rectangle10: classes.rectangle10,
          rectangle11: classes.rectangle11,
          rectangle12: classes.rectangle12,
          rectangle13: classes.rectangle13,
          rectangle14: classes.rectangle14,
          rectangle15: classes.rectangle15,
          rectangle16: classes.rectangle16,
          rectangle17: classes.rectangle17,
          rectangle18: classes.rectangle18,
          rectangle19: classes.rectangle19,
          rectangle20: classes.rectangle20,
          rectangle21: classes.rectangle21,
          rectangle22: classes.rectangle22,
          rectangle23: classes.rectangle23,
          rectangle24: classes.rectangle24,
          rectangle25: classes.rectangle25,
          rectangle26: classes.rectangle26,
          rectangle27: classes.rectangle27,
          rectangle28: classes.rectangle28,
          rectangle29: classes.rectangle29,
          rectangle30: classes.rectangle30,
          rectangle31: classes.rectangle31,
        }}
        swap={{
          dictation: (
            <div className={classes.dictation}>
              <DictationIcon className={classes.icon2} />
            </div>
          ),
          emoji: (
            <div className={classes.emoji}>
              <EmojiIcon className={classes.icon3} />
            </div>
          ),
          rectangle: (
            <div className={classes.rectangle}>
              <RectangleIcon className={classes.icon4} />
            </div>
          ),
          rectangle2: (
            <div className={classes.rectangle2}>
              <RectangleIcon2 className={classes.icon5} />
            </div>
          ),
          rectangle3: (
            <div className={classes.rectangle3}>
              <RectangleIcon3 className={classes.icon6} />
            </div>
          ),
          rectangle4: (
            <div className={classes.rectangle4}>
              <RectangleIcon4 className={classes.icon7} />
            </div>
          ),
          deleteButton: (
            <div className={classes.deleteButton}>
              <DeleteButtonIcon className={classes.icon8} />
            </div>
          ),
          shift: <ShiftIcon className={classes.icon9} />,
        }}
        text={{
          label: <div className={classes.label}>Go</div>,
          label2: <div className={classes.label2}>space</div>,
          label3: <div className={classes.label3}>123</div>,
          label4: <div className={classes.label4}> </div>,
          symbol: <div className={classes.symbol}> </div>,
          symbol2: <div className={classes.symbol2}>M</div>,
          symbol3: <div className={classes.symbol3}>N</div>,
          symbol4: <div className={classes.symbol4}>B</div>,
          symbol5: <div className={classes.symbol5}>V</div>,
          symbol6: <div className={classes.symbol6}>C</div>,
          symbol7: <div className={classes.symbol7}>X</div>,
          symbol8: <div className={classes.symbol8}>Z</div>,
          symbol9: <div className={classes.symbol9}>L</div>,
          symbol10: <div className={classes.symbol10}>K</div>,
          symbol11: <div className={classes.symbol11}>J</div>,
          symbol12: <div className={classes.symbol12}>H</div>,
          symbol13: <div className={classes.symbol13}>G</div>,
          symbol14: <div className={classes.symbol14}>F</div>,
          symbol15: <div className={classes.symbol15}>D</div>,
          symbol16: <div className={classes.symbol16}>S</div>,
          symbol17: <div className={classes.symbol17}>A</div>,
          symbol18: <div className={classes.symbol18}>P</div>,
          symbol19: <div className={classes.symbol19}>O</div>,
          symbol20: <div className={classes.symbol20}>I</div>,
          symbol21: <div className={classes.symbol21}>U</div>,
          symbol22: <div className={classes.symbol22}>Y</div>,
          symbol23: <div className={classes.symbol23}>T</div>,
          symbol24: <div className={classes.symbol24}>R</div>,
          symbol25: <div className={classes.symbol25}>E</div>,
          symbol26: <div className={classes.symbol26}>W</div>,
          symbol27: <div className={classes.symbol27}>Q</div>,
        }}
      />
      <IPhoneXOrNewer_ModeDarkTypeDef
        className={classes.iPhoneXOrNewer}
        classes={{ rightSide: classes.rightSide }}
        swap={{
          rightSide: (
            <div className={classes.rightSide}>
              <RightSideIcon className={classes.icon10} />
            </div>
          ),
        }}
        hide={{
          notch: true,
        }}
      />
      <div className={classes.nameActivity}>
        <div className={classes.alwaysActive}>
          <div className={classes.ellipse12}>
            <Ellipse12Icon className={classes.icon13} />
          </div>
          <div className={classes.alwaysActive2}>Always active</div>
        </div>
      </div>
      <div className={classes.botMessage}>
        <div className={classes.messageFromBot}>
          <div className={classes.wed821AM}>Wed 8:21 AM</div>
          <div className={classes.message}>
            <div className={classes.frame2107}>
              <div className={classes.background}>
                <BackgroundIcon className={classes.icon14} />
              </div>
              <div className={classes.bot}>
                <div className={classes.chatbotIcon12}></div>
              </div>
            </div>
            <div className={classes.textBox}>
              <div className={classes.helloIMUIAdmitGuideYourPersona}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label5}>Hello, I’m </span>
                  <span className={classes.label6}>UIAdmitGuide</span>
                  <span className={classes.label7}>
                    ! 👋 your personal guide to the University of Ibadan admissions process. How can I assist you today?
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.xCloseButton_w1}></div>
    </div>
  );
});

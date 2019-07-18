import React from 'react';
import PropTypes from 'prop-types';
import styles from './LayoutSwitch.module.scss';
import { ImgButton } from '../ImgButton';
import { LayoutType } from './LayoutType';
import desktopIconPath from './desktopIcon.svg';
import tabletIconPath from './tabletIcon.svg';
import mobileIconPath from './mobileIcon.svg';

const buttons = [
  {
    type: LayoutType.DESKTOP,
    src: desktopIconPath,
  },
  {
    type: LayoutType.TABLET,
    src: tabletIconPath,
  },
  {
    type: LayoutType.MOBILE,
    src: mobileIconPath,
  },
];

export const LayoutSwitch = ({ onSwitchLayout, activeLayout }) => (
  <div className={styles.layoutSwitch}>
    {buttons.map(({ type, src }) => (
      <div key={type} className={styles.layoutSwitchButton}>
        <ImgButton
          src={src}
          width={30}
          active={type === activeLayout}
          onClick={() => onSwitchLayout(type)}
        />
      </div>
    ))}
  </div>
);

LayoutSwitch.defaultProps = {
  activeLayout: LayoutType.DESKTOP,
  onSwitchLayout: () => {},
};

LayoutSwitch.propTypes = {
  activeLayout: PropTypes.oneOf([LayoutType.DESKTOP, LayoutType.TABLET, LayoutType.MOBILE]),
  onSwitchLayout: PropTypes.func,
};

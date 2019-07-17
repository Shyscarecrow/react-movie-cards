import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImgButton.module.scss';


export const ImgButton = ({
  src, active, width, onClick,
}) => {
  const maskImage = `url("${src}")`;
  const style = {
    width,
    height: width,
    maskImage,
    WebkitMaskImage: maskImage,
    backgroundColor: active ? 'gold' : 'black',
  };
  return (
    <div
      className={styles.buttonIcon}
      style={style}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={onClick}
    />
  );
};

ImgButton.defaultProps = {
  src: '',
  active: false,
  width: 30,
  onClick: () => {},
};

ImgButton.propTypes = {
  src: PropTypes.string,
  active: PropTypes.bool,
  width: PropTypes.number,
  onClick: PropTypes.func,
};

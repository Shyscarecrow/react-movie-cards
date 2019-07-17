import React from 'react';
import PropTypes from 'prop-types';

export function MovieCardDesktopLayout({ img, body, footer }) {
  return (
    <>
      {img}
      {body}
      {footer}
    </>
  );
}

MovieCardDesktopLayout.defaultProps = {
  img: null,
  body: null,
  footer: null,
};

MovieCardDesktopLayout.propTypes = {
  img: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
};

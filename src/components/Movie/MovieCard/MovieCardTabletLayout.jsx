import React from 'react';
import PropTypes from 'prop-types';

export function MovieCardTabletLayout({
  img, body, footer, reverse,
}) {
  return (
    reverse
      ? (
        <>
          {footer}
          {body}
        </>
      )
      : (
        <>
          {img}
          {body}
          {footer}
        </>
      )
  );
}

MovieCardTabletLayout.defaultProps = {
  img: null,
  body: null,
  footer: null,
  reverse: false,
};

MovieCardTabletLayout.propTypes = {
  img: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  reverse: PropTypes.bool,
};

import React from 'react';
import PropTypes from 'prop-types';

export function MovieCardMobileLayout({
  img, body, footer, reverse,
}) {
  return (
    reverse
      ? (
        <>
          {img}
          {body}
          {footer}
        </>
      )
      : (
        <>
          {body}
          {footer}
          {img}
        </>
      )
  );
}

MovieCardMobileLayout.defaultProps = {
  img: null,
  body: null,
  footer: null,
  reverse: false,
};

MovieCardMobileLayout.propTypes = {
  img: PropTypes.node,
  body: PropTypes.node,
  footer: PropTypes.node,
  reverse: PropTypes.bool,
};

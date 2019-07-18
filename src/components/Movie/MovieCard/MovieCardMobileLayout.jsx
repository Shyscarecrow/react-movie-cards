import React from 'react';
import PropTypes from 'prop-types';

export function MovieCardMobileLayout({
  img, body, reverse,
}) {
  return (
    reverse
      ? (
        <>
          {img}
          {body}
        </>
      )
      : (
        <>
          {body}
          {img}
        </>
      )
  );
}

MovieCardMobileLayout.defaultProps = {
  img: null,
  body: null,
  reverse: false,
};

MovieCardMobileLayout.propTypes = {
  img: PropTypes.node,
  body: PropTypes.node,
  reverse: PropTypes.bool,
};

import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => Math.floor(rating * width / 5);

export const StarRating = ({ rating }) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg" style={styles.star} />
            <i className="fa fa-star-o fa-lg" style={styles.star} />
            <i className="fa fa-star-o fa-lg" style={styles.star} />
            <i className="fa fa-star-o fa-lg" style={styles.star} />
            <i className="fa fa-star-o fa-lg" style={styles.star} />
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star} />
            <i className="fa fa-star fa-lg" style={styles.star} />
            <i className="fa fa-star fa-lg" style={styles.star} />
            <i className="fa fa-star fa-lg" style={styles.star} />
            <i className="fa fa-star fa-lg" style={styles.star} />
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

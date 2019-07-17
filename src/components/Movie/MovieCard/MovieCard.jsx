import React from 'react';
import PropTypes from 'prop-types';
import { StarRating } from '../../StarRating';
import { LayoutType } from '../../LayoutSwitch/LayoutType';
import styles from './MovieCard.module.scss';
import { MovieCardDesktopLayout } from './MovieCardDesktopLayout';
import { MovieCardTabletLayout } from './MovieCardTabletLayout';
import { MovieCardMobileLayout } from './MovieCardMobileLayout';


const ExtraRatingCSS = {
  silver: {
    border: '3px solid silver',
  },
  gold: {
    border: '3px solid gold',
  },
};

export const MovieCard = ({
  className,
  layoutType,
  reverse,
  movie: {
    imageUrl,
    title,
    subtitle,
    description,
    rating,
    extras,
  },
}) => {
  const isReverseTabletLayout = (layoutType === LayoutType.TABLET && reverse);
  const img = renderImg({ imageUrl });
  const body = renderBody({
    title, subtitle, description, children: isReverseTabletLayout && renderImg({ imageUrl }),
  });
  const footer = renderFooter({ rating, extraRating: extras.rating });
  return (
    <div className={styles.movieCard}>
      <div className={[styles.movieCard, 'card', className].filter(Boolean).join(' ')}>
        {renderLayout({
          layoutType, reverse, img, body, footer,
        })}
      </div>
    </div>
  );
};

function renderLayout({ layoutType, ...rest }) {
  switch (layoutType) {
    case LayoutType.TABLET: return <MovieCardTabletLayout {...rest} />;
    case LayoutType.MOBILE: return <MovieCardMobileLayout {...rest} />;
    default: return <MovieCardDesktopLayout {...rest} />;
  }
}

function renderImg({ imageUrl }) {
  return <img className="card-img-top" src={imageUrl} alt="Movie poster" />;
}

function renderBody({
  title, subtitle, description, children,
}) {
  return (
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
      {children}
      <p className="text-justify" style={{ fontSize: '14px' }}>{description}</p>
    </div>
  );
}

function renderFooter({ rating, extraRating }) {
  return (
    <div style={ExtraRatingCSS[extraRating]} className="card-footer">
      <div className="clearfix">
        <div className="float-left mt-1">
          <StarRating rating={rating} />
        </div>
        <div className={['cardFooterBadge', 'float-right', 'badge', 'badge-primary', 'badge-pill'].join(' ')}>{rating}</div>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  reverse: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  layoutType: PropTypes.string,
};

MovieCard.defaultProps = {
  movie: {},
  className: '',
  reverse: false,
  title: '',
  subtitle: '',
  description: '',
  layoutType: '',
};

renderFooter.propTypes = {
  rating: PropTypes.string,
  extraRating: PropTypes.string,
};

renderFooter.defaultProps = {
  rating: '',
  extraRating: '',
};

renderBody.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any),
};

renderBody.defaultProps = {
  title: '',
  subtitle: '',
  description: '',
  children: [],
};

renderImg.propTypes = {
  imageUrl: PropTypes.string,
};

renderImg.defaultProps = {
  imageUrl: '',
};

renderLayout.propTypes = {
  layoutType: PropTypes.string,
};

renderLayout.defaultProps = {
  layoutType: '',
};

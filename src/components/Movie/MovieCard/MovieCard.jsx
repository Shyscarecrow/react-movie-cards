import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
  const isMobileLayout = (layoutType === LayoutType.MOBILE);
  const isReverseTabletLayout = (layoutType === LayoutType.TABLET && reverse);
  const img = renderImg({ imageUrl });
  const footer = renderFooter({ rating, extraRating: extras[0].rating });
  const body = renderBody({
    title,
    subtitle,
    description,
    childImage: isReverseTabletLayout && img,
    childFooter: isMobileLayout && footer,
  });
  return (
    <div className={className}>
      <div className={classnames(styles.movieCard, 'card', { 'flex-row': isMobileLayout })}>
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
  title, subtitle, description, childImage, childFooter,
}) {
  return (
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
      {childImage}
      <p className="text-justify" style={{ fontSize: '14px' }}>{description}</p>
      {childFooter}
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
        <div className="float-right badge badge-primary badge-pill" style={{ fontSize: '1rem' }}>{rating}</div>
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

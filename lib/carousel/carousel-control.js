import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import {
  carouselControlNext,
  carouselControlNextIcon,
  carouselControlPrev,
  carouselControlPrevIcon,
  srOnly,
} from '@farvisionllc/emotion-bootstrap';

const anchorMap = {
  next: carouselControlNext,
  prev: carouselControlPrev,
};

const iconMap = {
  next: carouselControlNextIcon,
  prev: carouselControlPrevIcon,
};

const CarouselControl = (props) => {
  const {
    direction, onClickHandler, directionText, className,
  } = props;

  const anchorClasses = cx(className, anchorMap[direction]);

  const iconClasses = cx(iconMap[direction]);

  const screenReaderClasses = cx(srOnly);

  return (
    <a
      className={anchorClasses}
      role="button"
      tabIndex="0"
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      <span className={iconClasses} aria-hidden="true" />
      <span className={screenReaderClasses}>
        {directionText || direction}
      </span>
    </a>
  );
};

CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  directionText: PropTypes.string,
  className: PropTypes.string,
};

export default CarouselControl;
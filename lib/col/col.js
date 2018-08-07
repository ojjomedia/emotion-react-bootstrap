import isobject from 'lodash.isobject';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { col, colAuto } from '@farvisionllc/emotion-bootstrap/dist/bootstrap';

const colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
]);

const columnProps = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.shape({
    size: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string,
    ]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  }),
]);

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: PropTypes.string,
  widths: PropTypes.array,
};

const defaultProps = {
  tag: 'div',
  widths: colWidths,
};

const getColumnSizeClass = (isXs, colWidth, colSize) => {
  if (colSize === true || colSize === '') {
    return isXs ? col : `col-${colWidth}`;
  }

  if (colSize === 'auto') {
    return isXs ? colAuto : `col-${colWidth}-auto`;
  }

  return isXs ? `col-${colSize}` : `col-${colWidth}-${colSize}`;
};

const Col = (props) => {
  const {
    className, widths, tag: Tag, ...attributes
  } = props;
  const colClasses = [];

  widths.forEach((colWidth, i) => {
    const columnProp = props[colWidth];

    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    const isXs = !i;

    if (isobject(columnProp)) {
      const colSizeInterfix = isXs ? '-' : `-${colWidth}-`;
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

      colClasses.push(
        classNames({
          [colClass]: columnProp.size || columnProp.size === '',
          [`order${colSizeInterfix}${columnProp.order}`]:
            columnProp.order || columnProp.order === 0,
          [`offset${colSizeInterfix}${columnProp.offset}`]:
            columnProp.offset || columnProp.offset === 0,
        }),
      );
    } else {
      const colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push(col);
  }

  const classes = (className, colClasses);

  return <Tag {...attributes} className={classes} />;
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
import {
  LeftOutlined,
  RightOutlined,
  VerticalLeftOutlined,
  VerticalRightOutlined,
} from '@ant-design/icons';
import React, { memo, useState } from 'react';
import { PaginationProps } from './interface';
import { PageButton, PaginationStyle } from './style';

const defaultProps = {
  color: '#1976D2',
  size: '32px',
  variant: 'text' as const,
  shape: 'circular' as const,
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
  count: 10,
  siblingCount: 1,
  boundaryCount: 1,
  defaultPage: 1,
};

const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    style,
    className,
    onChange,
    variant = defaultProps.variant,
    shape = defaultProps.shape,
    showFirstButton = defaultProps.showFirstButton,
    showLastButton = defaultProps.showLastButton,
    hideNextButton = defaultProps.hideNextButton,
    hidePrevButton = defaultProps.hidePrevButton,
    count = defaultProps.count,
    siblingCount = defaultProps.siblingCount,
    boundaryCount = defaultProps.boundaryCount,
    color = defaultProps.color,
    size = defaultProps.size,
    defaultPage = defaultProps.defaultPage,
  } = props;
  const propsWithDefault = { color, variant, shape, size, count };
  const [page, setPage] = useState(defaultPage);
  const handleClickEvent = (value: number) => {
    if (value < 1 || value > count) return;
    if (onChange) onChange(value);
    setPage(value);
  };
  let serial = new Array(count).fill(0).map((value, index) => index + 1);
  return (
    <PaginationStyle
      style={style}
      props={propsWithDefault}
      page={page}
      className={className}
    >
      {showFirstButton && (
        <div className="first" onClick={() => handleClickEvent(1)}>
          <VerticalRightOutlined />
        </div>
      )}
      {hidePrevButton || (
        <div className="prev" onClick={() => handleClickEvent(page - 1)}>
          <LeftOutlined />
        </div>
      )}
      {serial.slice(0, boundaryCount).map((value, index) => (
        <PageButton
          key={index}
          onClick={() => handleClickEvent(value)}
          chosen={page === value}
          props={propsWithDefault}
        >
          {value}
        </PageButton>
      ))}
      {page - 1 - siblingCount - boundaryCount > 1 && (
        <div className="ellipsis">...</div>
      )}
      {serial
        .slice(boundaryCount, count - boundaryCount)
        .map((value, index) => {
          let display = false;
          if (value >= page - siblingCount && value <= page + siblingCount)
            display = true;
          else if (
            page - 1 - siblingCount - boundaryCount <= 1 &&
            value - 2 * siblingCount - 1 <= boundaryCount + 1
          )
            display = true;
          else if (
            count - page - boundaryCount - siblingCount <= 1 &&
            value + 2 * siblingCount + 1 > count - boundaryCount - 1
          )
            display = true;
          return display ? (
            <PageButton
              className="page"
              key={index}
              onClick={() => handleClickEvent(value)}
              chosen={page === value}
              props={propsWithDefault}
            >
              {value}
            </PageButton>
          ) : null;
        })}
      {count - page - boundaryCount - siblingCount > 1 && (
        <div className="ellipsis">...</div>
      )}
      {serial.slice(count - boundaryCount).map((value, index) => (
        <PageButton
          key={index}
          onClick={() => handleClickEvent(value)}
          className="page"
          chosen={page === value}
          props={propsWithDefault}
        >
          {value}
        </PageButton>
      ))}
      {hideNextButton || (
        <div className="next" onClick={() => handleClickEvent(page + 1)}>
          <RightOutlined />
        </div>
      )}
      {showLastButton && (
        <div className="last" onClick={() => handleClickEvent(count)}>
          <VerticalLeftOutlined />
        </div>
      )}
    </PaginationStyle>
  );
};

export default memo(Pagination);

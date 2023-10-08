import {
  FireFilled,
  FireOutlined,
  HeartFilled,
  HeartOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons';
import { mousePositionInElement, throttle } from 'artistry-ui/utils';
import React, { memo, useState } from 'react';
import { RatingProps } from './interface';
import { RatingStyle } from './style';

const defaultProps = {
  allowHalf: false,
  size: '30px',
  color: '#FAAF00',
  defaultValue: 0,
  variant: 'star' as const,
  disabled: false,
};

const ICON = {
  star: {
    outlined: <StarOutlined />,
    filled: <StarFilled />,
  },
  fire: {
    outlined: <FireOutlined />,
    filled: <FireFilled />,
  },
  heart: {
    outlined: <HeartOutlined />,
    filled: <HeartFilled />,
  },
};

const Rating: React.FC<RatingProps> = (props) => {
  const {
    style,
    className,
    handleRatingCallback,
    size = defaultProps.size,
    color = defaultProps.color,
    allowHalf = defaultProps.allowHalf,
    defaultValue = defaultProps.defaultValue,
    variant = defaultProps.variant,
    disabled = defaultProps.disabled,
  } = props;

  const propsWithDefault = {
    size,
    color,
    allowHalf,
    disabled,
  };
  const starValue = [1, 2, 3, 4, 5];
  const [curValue, setCurValue] = useState(defaultValue);
  const [display, setDisplay] = useState(defaultValue);
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    value: number,
  ) => {
    if (disabled) return;
    let display =
      allowHalf && mousePositionInElement(e) === 'left' ? value - 0.5 : value;
    setDisplay(display);
  };
  const handleMouseMove = throttle(
    (e: React.MouseEvent<HTMLDivElement>, value: number) => {
      if (disabled) return;
      let display =
        allowHalf && mousePositionInElement(e) === 'left' ? value - 0.5 : value;
      setDisplay(display);
    },
    100,
  );
  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    value: number,
  ) => {
    if (disabled) return;
    let curValue =
      allowHalf && mousePositionInElement(e) === 'left' ? value - 0.5 : value;
    setCurValue(curValue);
    if (handleRatingCallback) handleRatingCallback(curValue);
  };
  const handleMouseLeave = () => {
    if (disabled) return;
    if (display === curValue) return;
    else setDisplay(curValue);
  };

  return (
    <RatingStyle
      style={style}
      props={propsWithDefault}
      display={display}
      className={className}
    >
      <div className="outlined">
        {starValue.map((value, index) => (
          <div
            key={index}
            className="star-outlined"
            onMouseEnter={(e) => handleMouseEnter(e, value)}
            onMouseDown={(e) => handleMouseDown(e, value)}
            onMouseLeave={() => handleMouseLeave()}
            onMouseMove={(e) => handleMouseMove(e, value)}
          >
            {ICON[variant].outlined}
          </div>
        ))}
      </div>
      <div className="filled">
        {starValue.map((value, index) => (
          <div
            key={index}
            className="star-filled"
            onMouseEnter={(e) => handleMouseEnter(e, value)}
            onMouseDown={(e) => handleMouseDown(e, value)}
            onMouseLeave={() => handleMouseLeave()}
            onMouseMove={(e) => handleMouseMove(e, value)}
          >
            {ICON[variant].filled}
          </div>
        ))}
      </div>
    </RatingStyle>
  );
};

export default memo(Rating);

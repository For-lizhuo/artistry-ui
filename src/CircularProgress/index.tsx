import React, { memo } from 'react';
import { CircularProgressProps } from './interface';
import { CircularProgressStyle } from './style';

const defaultProps = {
  size: 40,
  thickness: 4,
  variant: 'indeterminate' as const,
  color: '#1976D2',
  value: 60,
  label: false,
};

const CircularProgress: React.FC<CircularProgressProps> = (props) => {
  const {
    style,
    className,
    size = defaultProps.size,
    thickness = defaultProps.thickness,
    variant = defaultProps.variant,
    color = defaultProps.color,
    value = defaultProps.value,
    label = defaultProps.label,
  } = props;
  const propsWithDefault = { size, thickness, variant, color, value };
  return (
    <CircularProgressStyle
      style={style}
      props={propsWithDefault}
      className={className}
    >
      <div className="inner">
        {variant === 'determinate' && label && (
          <div className="label">{`${value}%`}</div>
        )}
      </div>
    </CircularProgressStyle>
  );
};

export default memo(CircularProgress);

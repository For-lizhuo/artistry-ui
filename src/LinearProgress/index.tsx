import React, { memo } from 'react';
import { LinearProgressProps } from './interface';
import { LinearProgressColor, LinearProgressStyle } from './style';

const defaultProps = {
  thickness: '5px',
  variant: 'indeterminate' as const,
  theme: 'primary' as const,
  value: 50,
  buffer: 0,
  label: false,
};

const LinearProgress: React.FC<LinearProgressProps> = (props) => {
  const {
    style,
    className,
    thickness = defaultProps.thickness,
    variant = defaultProps.variant,
    theme = defaultProps.theme,
    color = LinearProgressColor[theme],
    value = defaultProps.value,
    buffer = defaultProps.buffer,
    label = defaultProps.label,
  } = props;
  const propsWithDefault = { color, thickness, variant, value, buffer };
  return (
    <LinearProgressStyle style={style} props={propsWithDefault} className={className}>
      <div className="progress">
        <div className='container'></div>
        {variant==='buffer'&&<div className="buffer"></div>}
        <div className="value"></div>
      </div>
      {label && <div className="label">{`${value}%`}</div>}
    </LinearProgressStyle>
  );
};

export default memo(LinearProgress);

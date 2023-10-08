import React, { memo } from 'react';
import { DividerProps } from './interface';
import { DividerStyle } from './style';

const defaultProps = {
  fontSize: 14,
  align: 'center' as const,
  color: '#E0E0E0',
  fontColor: '#1C2025',
  type: 'solid' as const,
  thickness: '1px',
  vertical: false,
};

const Divider: React.FC<DividerProps> = (props) => {
  const {
    children,
    style,
    className,
    fontSize = defaultProps.fontSize,
    align = defaultProps.align,
    color = defaultProps.color,
    fontColor = defaultProps.fontColor,
    type = defaultProps.type,
    thickness = defaultProps.thickness,
    vertical = defaultProps.vertical,
  } = props;
  const propsWithDefault = {
    fontSize,
    align,
    color,
    fontColor,
    type,
    thickness,
    vertical,
  };
  return (
    <DividerStyle style={style} props={propsWithDefault} className={className}>
      <div className="left"></div>
      {children && <div className="center">{children}</div>}
      <div className="right"></div>
    </DividerStyle>
  );
};

export default memo(Divider);

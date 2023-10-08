import React, { memo } from 'react';
import { HeaderProps } from '../interface';
import { HeaderStyle } from '../style';

const Header: React.FC<HeaderProps> = (props) => {
  const {
    children,
    style,
    className,
  } = props;
  return (
    <HeaderStyle style={style} className={className}>
      {children}
    </HeaderStyle>
  );
};

export default memo(Header);

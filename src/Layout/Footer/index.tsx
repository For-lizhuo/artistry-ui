import React, { memo } from 'react';
import { FooterProps } from '../interface';
import { FooterStyle } from '../style';

const Footer: React.FC<FooterProps> = (props) => {
  const {
    children,
    style,
    className,
  } = props;
  return (
    <FooterStyle style={style} className={className}>
      {children}
    </FooterStyle>
  );
};

export default memo(Footer);

import React, { memo } from 'react';
import { ContentProps } from '../interface';
import { ContentStyle } from '../style';

const Content: React.FC<ContentProps> = (props) => {
  const {
    children,
    style,
    className,
  } = props;
  return (
    <ContentStyle style={style} className={className}>
      {children}
    </ContentStyle>
  );
};

export default memo(Content);

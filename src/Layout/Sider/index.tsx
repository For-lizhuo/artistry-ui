import React, { memo, useContext, useEffect } from 'react';
import { context } from '../index';
import { SiderProps } from '../interface';
import { SiderStyle } from '../style';

const Sider: React.FC<SiderProps> = (props) => {
  const { children, style, className } = props;
  const { dispatch } = useContext(context);
  useEffect(() => {
    dispatch({ type: 'updateHasSider', payload: true });
  }, []);
  return (
    <SiderStyle style={style} className={className}>
      {children}
    </SiderStyle>
  );
};

export default memo(Sider);

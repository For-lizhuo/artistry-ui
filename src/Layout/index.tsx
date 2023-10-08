import React, { createContext, memo, useReducer } from 'react';
import { LayoutProps } from './interface';
import { LayoutStyle } from './style';

export const context = createContext<{
  dispatch: React.Dispatch<ActionType>;
}>({} as any);

type ActionType = {
  type: 'updateHasSider';
  payload: boolean;
};
const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case 'updateHasSider':
      return action.payload;
    default:
      return state;
  }
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, style, className } = props;
  const [hasSider, dispatch] = useReducer(reducer, false);
  return (
    <LayoutStyle style={style} className={className} hasSider={hasSider}>
      <context.Provider value={{ dispatch }}>{children}</context.Provider>
    </LayoutStyle>
  );
};

export default memo(Layout);

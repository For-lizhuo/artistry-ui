import React, { ReactNode, createContext, memo, useReducer } from 'react';
import { TabsProps } from './interface';
import { TabsStyle } from './style';

type StateType = {
  uid: number;
  children: ReactNode;
};

type ActionType = {
  type: 'updateSelected';
  payload: StateType;
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'updateSelected':
      return {
        ...state,
        uid: action.payload.uid,
        children: action.payload.children,
      };
    default:
      return state;
  }
};

const defaultProps = {
  color: '#1976D2',
  vertical: false,
  defaultSelected: 0,
  centered: false,
};

export const selectedTabContext = createContext<{
  selectedUid: number;
  selectedColor: string;
  vertical: boolean;
  dispatch: React.Dispatch<ActionType>;
  onChange: ((uid: number) => void) | undefined;
}>({} as any);

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    style,
    className,
    children,
    onChange,
    defaultSelected = defaultProps.defaultSelected,
    color = defaultProps.color,
    vertical = defaultProps.vertical,
    centered = defaultProps.centered,
  } = props;
  const propsWithDefault = { color, vertical, centered };

  const [selectedTab, dispatch] = useReducer(reducer, {
    uid: defaultSelected,
    children: null,
  });

  return (
    <selectedTabContext.Provider
      value={{
        dispatch,
        onChange,
        selectedUid: selectedTab.uid,
        selectedColor: color,
        vertical,
      }}
    >
      <TabsStyle style={style} props={propsWithDefault} className={className}>
        <div className="labelList">{children}</div>
        <div className="divider"></div>
        <div className="content">{selectedTab.children}</div>
      </TabsStyle>
    </selectedTabContext.Provider>
  );
};

export default memo(Tabs);

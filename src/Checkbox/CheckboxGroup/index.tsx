import React, { createContext, memo, useReducer } from 'react';
import { CheckboxGroupProps } from '../interface';
import { CheckboxGroupStyle } from '../style';

export type ActionType = {
  type: 'updateChecked' | 'checkAll' | 'uncheckAll';
  payload?: number;
  controll?: number[];
};
export const reducer = (state: number[], action: ActionType): number[] => {
  const set = new Set(state);
  switch (action.type) {
    case 'updateChecked':
      if (state.includes(action.payload as number)) {
        set.delete(action.payload as number);
        return Array.from(set.keys());
      } else {
        return [...Array.from(set.keys()), action.payload as number];
      }
    case 'checkAll':
      for (let value of action.controll as number[]) {
        set.add(value);
      }
      return [...Array.from(set)];
    case 'uncheckAll':
      for (let value of action.controll as number[]) {
        if (set.has(value)) set.delete(value);
      }
      return [...Array.from(set)];
    default:
      return state;
  }
};

const defaultProps = {
  direction: 'row' as const,
  defaultChecked: [],
};

export const checkedCheckboxContext = createContext<{
  checkedCheckbox: number[];
  dispatch: React.Dispatch<ActionType>;
  onChange?: (arr: number[]) => void;
}>({} as any);

const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const {
    style,
    children,
    onChange,
    direction = defaultProps.direction,
    defaultChecked = defaultProps.defaultChecked,
  } = props;
  const propsWithDefault = { direction };

  const [checkedCheckbox, dispatch] = useReducer(reducer, defaultChecked);

  return (
    <CheckboxGroupStyle
      style={style}
      props={propsWithDefault}
    >
      <checkedCheckboxContext.Provider
        value={{ checkedCheckbox, dispatch, onChange }}
      >
        {children}
      </checkedCheckboxContext.Provider>
    </CheckboxGroupStyle>
  );
};

export default memo(CheckboxGroup);

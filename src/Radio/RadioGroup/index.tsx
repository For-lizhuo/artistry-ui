import React, { createContext, memo, useReducer } from 'react';
import { RadioGroupProps } from '../interface';
import { RadioGroupStyle } from '../style';

type ActionType = {
  type: 'updateChecked';
  payload: number;
};
const reducer = (state: number | undefined, action: ActionType) => {
  switch (action.type) {
    case 'updateChecked':
      return action.payload;
    default:
      return state;
  }
};

const defaultProps = {
  direction: 'row' as const,
};

export const checkedRadioContext = createContext<{
  checkedRadio: number | undefined;
  dispatch: React.Dispatch<ActionType>;
  onChange: ((uid?: number, value?: any) => void) | undefined;
}>({} as any);

const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const {
    style,
    children,
    onChange,
    direction = defaultProps.direction,
    defaultChecked,
  } = props;
  const propsWithDefault = { direction };

  const [checkedRadio, dispatch] = useReducer(reducer, defaultChecked);

  return (
    <RadioGroupStyle style={style} props={propsWithDefault}>
      <checkedRadioContext.Provider
        value={{ checkedRadio, dispatch, onChange }}
      >
        {children}
      </checkedRadioContext.Provider>
    </RadioGroupStyle>
  );
};

export default memo(RadioGroup);

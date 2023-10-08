import { CheckOutlined, MinusOutlined } from '@ant-design/icons';
import React, { memo, useContext } from 'react';
import { ActionType, checkedCheckboxContext, reducer } from './CheckboxGroup';
import { CheckboxProps } from './interface';
import { CheckboxStyle } from './style';

const defaultProps = {
  color: '#1976D2',
  disabled: false,
  size: '16px',
  checked: false,
  variant: 'normal' as const,
  controll: [],
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    style,
    children,
    uid,
    className,
    controll = defaultProps.controll,
    disabled = defaultProps.disabled,
    color = defaultProps.color,
    size = defaultProps.size,
    variant = defaultProps.variant,
  } = props;
  const propsWithDefault = { color, disabled, size };
  const { checkedCheckbox, dispatch, onChange } = useContext(
    checkedCheckboxContext,
  );
  const handleClickCheckbox = () => {
    if (disabled) return;
    let action: ActionType;
    if (variant === 'normal') {
      action = { type: 'updateChecked', payload: uid };
    } else if (checkedCheckbox.length < controll.length) {
      action = { type: 'checkAll', controll };
    } else {
      action = { type: 'uncheckAll', controll };
    }
    if (onChange) onChange(reducer(checkedCheckbox, action));
    dispatch(action);
  };
  return (
    <CheckboxStyle
      style={style}
      props={propsWithDefault}
      className={className}
      onClick={handleClickCheckbox}
    >
      {variant === 'checkAll' ? (
        controll.every((value) => checkedCheckbox.includes(value)) ? (
          <div className="checked">
            <CheckOutlined />
          </div>
        ) : controll.some((value) => checkedCheckbox.includes(value)) ? (
          <div className="indeterminate">
            <MinusOutlined />
          </div>
        ) : (
          <div className="unChecked"></div>
        )
      ) : checkedCheckbox.includes(uid as number) ? (
        <div className="checked">
          <CheckOutlined />
        </div>
      ) : (
        <div className="unChecked"></div>
      )}
      {children}
    </CheckboxStyle>
  );
};

export default memo(Checkbox);

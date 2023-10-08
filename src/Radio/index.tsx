import React, { memo, useContext } from 'react';
import { checkedRadioContext } from './RadioGroup';
import { RadioProps } from './interface';
import { RadioStyle } from './style';

const defaultProps = {
  color: '#1976D2',
  disabled: false,
  size: '16px',
  checked: false,
};

const Radio: React.FC<RadioProps> = (props) => {
  const {
    style,
    children,
    className,
    uid,
    disabled = defaultProps.disabled,
    color = defaultProps.color,
    size = defaultProps.size,
  } = props;
  const propsWithDefault = { color, disabled, size };
  const { checkedRadio, dispatch, onChange } = useContext(checkedRadioContext);
  const handleClickRadio = () => {
    if (disabled) return;
    if (onChange) onChange(uid);
    dispatch({ type: 'updateChecked', payload: uid });
  };
  return (
    <RadioStyle
      style={style}
      props={propsWithDefault}
      className={className}
      onClick={handleClickRadio}
    >
      {checkedRadio === uid ? (
        <div className="checked"></div>
      ) : (
        <div className="unChecked"></div>
      )}
      {children}
    </RadioStyle>
  );
};

export default memo(Radio);

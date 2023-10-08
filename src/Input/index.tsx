import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import React, { memo, useState } from 'react';
import { InputProps } from './interface';
import { InputStyle } from './style';

export const defaultProps = {
  showCount: false,
  value: '',
  maxLength: 100,
  fonsSize: '16px',
  type: 'text' as const,
  width: '120px',
  height: '32px',
  circle: false,
  dashed: false,
  disabled: false,
};

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    style,
    prefix,
    suffix,
    placeholder,
    showCount = defaultProps.showCount,
    maxLength = defaultProps.maxLength,
    value = defaultProps.value,
    fontSize = defaultProps.fonsSize,
    type = defaultProps.type,
    width = defaultProps.width,
    height = defaultProps.height,
    disabled = defaultProps.disabled,
  } = props;
  const propsWithDefault = {
    width,
    height,
    fontSize,
    disabled,
  };
  const [inputValue, setInputValue] = useState(value);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <InputStyle
      props={propsWithDefault}
      style={style}
      className={className}
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      mouseEnter={mouseEnter}
    >
      <div className="prefix">{prefix}</div>
      <input
        disabled={disabled}
        className="input"
        placeholder={placeholder}
        value={inputValue}
        type={type === 'password' && !visible ? 'password' : 'text'}
        aria-disabled={disabled}
        maxLength={maxLength}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      {type === 'password' && (
        <div className="eye-icon" onClick={() => setVisible((prev) => !prev)}>
          {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </div>
      )}
      {showCount&&<div className="count">{`${inputValue.length}/${maxLength}`}</div>}
      <div className="suffix">{suffix}</div>
    </InputStyle>
  );
};
export default memo(Input);

import React, { memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SwitchProps } from './interface';
import { SwitchStyle } from './style';

const defaultProps = {
  size: '20px',
  checkedColor: '#1976D2',
  unCheckedColor: '#C0C0C0',
  disabled: false,
  defaultChecked:false
};

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    style,
    className,
    handleUpdateChecked,
    size = defaultProps.size,
    checkedColor = defaultProps.checkedColor,
    unCheckedColor = defaultProps.unCheckedColor,
    disabled = defaultProps.disabled,
    defaultChecked = defaultProps.defaultChecked
  } = props;

  const propsWithDefault = {
    size,
    unCheckedColor,
    checkedColor,
    disabled,
    defaultChecked
  };
  const [checked, setChecked] = useState(defaultChecked);
  const handleClickEvent = () => {
    if (disabled) return;
    if (handleUpdateChecked) {
      handleUpdateChecked(!checked);
    }
    setChecked((prev) => !prev);
  }
  return (
    <SwitchStyle
      style={style}
      className={className}
      props={propsWithDefault}
      checked={checked}
      onClick={handleClickEvent}
    >
      <CSSTransition in={checked} timeout={200} classNames="circle">
        <div className="circle"></div>
      </CSSTransition>
    </SwitchStyle>
  );
};

export default memo(Switch);

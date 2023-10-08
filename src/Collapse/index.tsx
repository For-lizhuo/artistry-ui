import { RightOutlined } from '@ant-design/icons';
import React, { memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CollapseProps } from './interface';
import { CollapseStyle } from './style';

const Collapse: React.FC<CollapseProps> = (props) => {
  const defaultProps = {
    color: '#C0C0C0',
    defaultOpen: false,
    disabled: false,
  };
  const {
    style,
    children,
    className,
    header,
    color = defaultProps.color,
    defaultOpen = defaultProps.defaultOpen,
    disabled = defaultProps.disabled,
    onChange,
  } = props;

  const PropsWithDefault = {
    color,
    disabled,
  };
  const [open, setOpen] = useState(defaultOpen);
  const handleClickEvent = () => {
    if (disabled) return;
    if (onChange) onChange(!open);
    setOpen((prev) => !prev);
  };
  return (
    <CollapseStyle style={style} props={PropsWithDefault} className={className}>
      <div className="header-container" onClick={handleClickEvent}>
        <div className="header">{header}</div>
        <CSSTransition in={open} timeout={500} classNames="icon" appear>
          <div className="icon">
            <RightOutlined />
          </div>
        </CSSTransition>
      </div>
      <CSSTransition in={open} timeout={500} classNames="divider" unmountOnExit>
        <>{open && <div className="divider"></div>}</>
      </CSSTransition>
      <CSSTransition
        in={open}
        unmountOnExit
        timeout={500}
        classNames="children-container"
      >
        <div className="children-container">
          {open && <div className="children">{children}</div>}
        </div>
      </CSSTransition>
    </CollapseStyle>
  );
};

export default memo(Collapse);

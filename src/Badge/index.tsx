import React, { memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BadgeProps } from './interface';
import { BadgeStyle } from './style';

const Badge: React.FC<BadgeProps> = (props) => {
  const defaultProps = {
    overlap: 'rectangular' as const,
    fontSize: '16px',
    variant: 'standard' as const,
    color: '#1976D2',
    invisible: false,
    showZero: false,
    max: 99,
  };
  const {
    style,
    children,
    count,
    className,
    fontSize = defaultProps.fontSize,
    variant = defaultProps.variant,
    color = defaultProps.color,
    invisible = defaultProps.invisible,
    max = defaultProps.max,
    showZero = defaultProps.showZero,
  } = props;

  const PropsWithDefault = {
    fontSize,
    color,
  };

  return (
    <BadgeStyle style={style} props={PropsWithDefault} className={className}>
      {children}
      {variant === 'dot' ? (
        <CSSTransition
          in={!invisible}
          unmountOnExit
          timeout={200}
          classNames="dot"
        >
          <div className="dot"></div>
        </CSSTransition>
      ) : (
        <CSSTransition
          in={!invisible && !(count === 0 && !showZero)}
          unmountOnExit
          timeout={200}
          classNames="standard"
        >
          <div className="standard">
            <div className="content">
              {count !== undefined
                ? count > max
                  ? `${max}+`
                  : `${count}`
                : null}
            </div>
          </div>
        </CSSTransition>
      )}
    </BadgeStyle>
  );
};

export default memo(Badge);

import React, { memo } from 'react';
import { LinkProps } from './interface';
import { LinkStyle } from './style';

const defaultProps = {
  color: '#1976D2',
  disabled: false,
  underline: 'always' as const,
  target: '_self' as const,
  size: '16px',
};

const Link: React.FC<LinkProps> = (props) => {
  const {
    style,
    children,
    className,
    href,
    disabled = defaultProps.disabled,
    underline = defaultProps.underline,
    target = defaultProps.target,
    color = defaultProps.color,
    size = defaultProps.size,
  } = props;
  const propsWithDefault = { color, disabled, underline, target, size };
  return (
    <LinkStyle style={style} props={propsWithDefault} className={className}>
      {disabled ? (
        <div className="label">{children}</div>
      ) : (
        <a className="link" target={target} href={href}>
          {children}
        </a>
      )}
    </LinkStyle>
  );
};

export default memo(Link);

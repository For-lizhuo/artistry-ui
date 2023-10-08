import React, { memo } from 'react';
import { ButtonProps } from './interface';
import { ButtonStyle } from './style';

export const defaultProps = {
  theme: 'primary' as const,
  variant: 'contained' as const,
  width: '60px',
  height: '20px',
  circle: false,
  dashed: false,
  disabled: false,
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    href = '',
    style = {},
    icon = null,
    theme = defaultProps.theme,
    variant = defaultProps.variant,
    width = defaultProps.width,
    height = defaultProps.height,
    circle = defaultProps.circle,
    dashed = defaultProps.dashed,
    disabled = defaultProps.disabled,
    ...restProps
  } = props;
  const propsWithDefault = {
    width,
    height,
    theme,
    variant,
    circle,
    dashed,
    disabled,
    href
  };
  return (
    <ButtonStyle
      props={propsWithDefault}
      style={style}
      className={className}
      onClick={() => {
        if (href) location.href = href;
      }}
    >
      <button
        type="button"
        disabled={disabled}
        className='button'
        {...restProps}
      >
        {icon && (
          <div className='icon'>
            {icon}
          </div>
        )}
        {children}
      </button>
    </ButtonStyle>
  );
};
export default memo(Button);

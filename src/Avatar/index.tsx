import React, { memo, useState } from 'react';
import { AvatarProps } from './interface';
import { AvatarStyle } from './style';

const Avatar: React.FC<AvatarProps> = (props) => {
  const defaultProps = {
    objectFit: 'fill' as const,
    size: '40px',
    shape: 'circular' as const,
    bgColor: '#BDBDBD',
  };
  const {
    style,
    children,
    fallback,
    src,
    className,
    objectFit = defaultProps.objectFit,
    size = defaultProps.size,
    shape = defaultProps.shape,
    bgColor = defaultProps.bgColor,
  } = props;

  const PropsWithDefault = {
    size,
    shape,
    objectFit,
    bgColor,
  };
  const [showFallback, setShowFallback] = useState(false);
  return (
    <AvatarStyle style={style} props={PropsWithDefault} className={className}>
      {children ? (
        <div className="children">{children}</div>
      ) : (
        <>
          {showFallback ? (
            <div className="fallback">{fallback}</div>
          ) : (
            <img
              onError={() => {
                setShowFallback(true);
              }}
              className="img"
              src={src}
            />
          )}
        </>
      )}
    </AvatarStyle>
  );
};

export default memo(Avatar);

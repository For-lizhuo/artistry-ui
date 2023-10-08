import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import React, { memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AlertProps } from './interface';
import { AlertStyle } from './style';

const defaultIcons = {
  info: <InfoCircleOutlined />,
  success: <CheckCircleOutlined />,
  warning: <ExclamationCircleOutlined />,
  error: <CloseCircleOutlined />,
};

const defaultProps = {
  type: 'info' as const,
  title: '',
  closable: true,
  showIcon: true,
  closeElement: null,
};

const Alert: React.FC<AlertProps> = (props) => {
  const {
    style,
    children,
    className,
    type = defaultProps.type,
    title = defaultProps.title,
    closable = defaultProps.closable,
    showIcon = defaultProps.showIcon,
    icon = defaultIcons[type],
    closeElement = defaultProps.closeElement,
  } = props;

  const PropsWithDefault = {
    type,
    closeElement,
  };

  const [visible, setVisible] = useState(true);

  const close = () => {
    setVisible(false);
  };

  return (
    <AlertStyle style={style} props={PropsWithDefault} className={className}>
      <CSSTransition
        in={visible}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <div className="alert">
          {showIcon && <div className="alert-icon">{icon}</div>}
          <div className="alert-text">
            {title && <div className="alert-title">{title}</div>}
            <div className="content">{children}</div>
          </div>
          {closable && (
            <div className="alert-close" onClick={close}>
              {closeElement || <CloseOutlined />}
            </div>
          )}
        </div>
      </CSSTransition>
    </AlertStyle>
  );
};

export default memo(Alert);

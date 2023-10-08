import { CSSProperties, ReactNode } from 'react';

interface AlertProps {
  children?: ReactNode;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 类型
   * @default info
   */
  type?: 'info' | 'success' | 'warning' | 'error';
  /**
   * @description 标题
   * @default ''
   */
  title?: string;
  /**
   * @description 是否可关闭
   * @default true
   */
  closable?: boolean;
  /**
   * @description 显示图标
   * @default true
   */
  showIcon?: boolean;
  /**
   * @description 自定义图标
   */
  icon?: React.ReactNode;
  /**
   * @description 自定义关闭图标
   */
  closeElement?: React.ReactNode | string;
}

export type { AlertProps };

import { CSSProperties, ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 按钮主题
   * @default primary
   */
  theme?: 'primary' | 'success' | 'warning' | 'info' | 'error';
  /**
   * @description 按钮类型
   * @default contained
   */
  variant?: 'text' | 'outlined' | 'contained';
  /**
   * @description 宽度
   */
  width?: string;
  /**
   * @description 高度
   */
  height?: string;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 圆形按钮
   * @default false
   */
  circle?: boolean;
  /**
   * @description 按钮边框为虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * @description 链接地址
   */
  href?: string;
  /**
   * @description 图标按钮
   */
  icon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLElement>;

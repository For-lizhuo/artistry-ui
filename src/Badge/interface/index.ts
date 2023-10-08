import { CSSProperties, ReactNode } from 'react';

export interface BadgeProps {
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description badge中显示的数字
   */
  count?: number;
  /**
   * @description 字体大小
   * @default '10px'
   */
  fontSize?: string;
  /**
   * @description 颜色
   * @default '#1976D2'
   */
  color?: string;
  /**
   * @description 是否显示
   * @default false
   */
  invisible?: boolean;
  /**
   * @description 显示的最大值
   * @default 99
   */
  max?: number;
  /**
   * @description 是否显示0
   * @default false
   */
  showZero?: boolean;
  /**
   * @description 类型
   * @default 'standard'
   */
  variant?: 'dot' | 'standard';
}

import { CSSProperties, ReactNode } from 'react';

export interface LinkProps {
  children?: ReactNode;
  /**
   * @description 自定义类s
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 跳转链接
   */
  href?: string;
  /**
   * @description 颜色
   * @default '#1976D2'
   */
  color?: string;
  /**
   * @description 大小
   * @default '16px'
   */
  size?: string;
  /**
   * @description 下划线
   * @default 'always'
   */
  underline?: 'always' | 'none' | 'hover';
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 何处显示链接的url
   * @default '_self'
   */
  target?: '_self' | '_blank' | '_parent' | '_top';
}

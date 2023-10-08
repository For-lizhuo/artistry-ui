import { CSSProperties } from 'react';

export type LinearProgressProps = {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 组件的主题
   * @default primary
   */
  theme?: 'primary' | 'success' | 'secondary' | 'error';
  /**
   * @description 组件的大小
   * @default 40
   */
  size?: number;
  /**
   * @description 组件的颜色
   * @default 40
   */
  color?: string;
  /**
   * @description 加载条的厚度
   * @default #1976D2
   */
  thickness?: string;
  /**
   * @description 组件的类型
   * @default indeterminate
   */
  variant?: 'determinate' | 'indeterminate' | 'buffer';
  /**
   * @description 加载进度
   * @default 60
   */
  value?: number;
  /**
   * @description 缓存进度
   * @default 0
   */
  buffer?: number;
  /**
   * @description 是否显示加载进度
   * @default false
   */
  label?: boolean;
};

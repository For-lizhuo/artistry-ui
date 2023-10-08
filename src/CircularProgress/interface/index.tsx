import { CSSProperties } from 'react';

export type CircularProgressProps = {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 组件的颜色
   * @default #1976D2
   */
  color?: string;
  /**
   * @description 组件的大小
   * @default 40
   */
  size?: number;
  /**
   * @description 圆环的厚度
   * @default 5
   */
  thickness?: number;
  /**
   * @description 组件的类型
   * @default indeterminate
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * @description 加载进度
   * @default 60
   */
  value?: number;
  /**
   * @description 是否显示加载进度
   * @default false
   */
  label?: boolean;
};

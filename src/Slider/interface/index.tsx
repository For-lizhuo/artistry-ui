import { CSSProperties } from 'react';

export type SliderProps = {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 组件的宽度
   * @default '100px'
   */
  width?: string;
  /**
   * @description 组件的高度
   * @default '10px'
   */
  thickness?: string;
  /**
   * @description 组件的颜色
   * @default #1976D2
   */
  color?: string;
  /**
   * @description 最大值
   * @default 100
   */
  max?: number;
  /**
   * @description 最小值
   * @default 0
   */
  min?: number;
  /**
   * @description 移动一格改变的数值
   * @default 1
   */
  step?: number;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 是否显示标签
   * @default false
   */
  labelDisplay?: boolean;
  /**
   * @description 默认值
   * @default 50
   */
  defaultValue?: number;
  /**
   * @description onChange回调
   */
  onChange?: (value: number) => void;
};

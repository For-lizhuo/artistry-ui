import { CSSProperties } from 'react';

export type Option = {
  label: string;
  value: string;
};

export interface SelectProps {
  /**
   * @description 选项数组
   * @default []
   */
  options: Array<Option>;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
   /**
   * @description 默认选项
   */
  defaultOption?: Option;
  /**
   * @description 宽度
   * @default 80px
   */
  width?: string;
  /**
   * @description 高度
   * @default 40px
   */
  height?: string;
  /**
   * @description 字体大小
   * @default 16px
   */
  fontSize?: string;
  /**
   * @description 标题
   */
  title?: string;
  /**
   * @description 是否可搜索
   * @default false
   */
  searchable?: boolean;
  /**
   * @description 颜色
   * @default #1976D2
   */
  color?: string;
  /**
   * @description 选择后的回调
   * @default {}
   */
  handleSelectCallback?: (label?: string, value?: string) => void;
}

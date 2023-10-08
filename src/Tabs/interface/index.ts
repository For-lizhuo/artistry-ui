import { CSSProperties, ReactNode } from 'react';

export interface TabsProps {
  children: ReactNode;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 颜色
   * @default '#1976D2'
   */
  color?: string;
  /**
   * @description 默认显示的TabItem
   */
  defaultSelected?: number;
  /**
   * @description Tabs排列方向
   * @default false
   */
  vertical?:boolean
  /**
   * @description 是否居中
   * @default false
   */
  centered?:boolean
  /**
   * @description 选项改变回调函数
   */
  onChange?: (uid: number) => void;
}

export interface TabItemProps {
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
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 序列号
   */
  uid: number;
  /**
   * @description 标签
   */
  label:ReactNode;
}

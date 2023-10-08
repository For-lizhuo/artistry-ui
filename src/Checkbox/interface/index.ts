import { CSSProperties, ReactNode } from 'react';

export interface CheckboxProps {
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
   * @description 颜色
   * @default '#1976D2'
   */
  color?: string;
  /**
   * @description 大小
   * @default '20px'
   */
  size?: string;
  /**
   * @description 禁用
   * @default 0
   */
  disabled?: boolean;
  /**
   * @description 序列号
   */
  uid?: number;
  /**
   * @description 值
   */
  value?: any;
  /**
   * @description 类型
   * @default 'normal'
   */
  variant?: 'normal' | 'checkAll';
  /**
   * @description 被控制的其他checkout的uid
   */
  controll?: number[];
}

export interface CheckboxGroupProps {
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
   * @description 默认选中项
   */
  defaultChecked?: number[];
  /**
   * @description CheckBox排列方式
   * @default 'row'
   */
  direction?: 'row' | 'column';
  /**
   * @description 选项改变回调函数
   */
  onChange?: (uidArr: number[]) => void;
}

import { CSSProperties, ReactNode } from 'react';

interface DividerProps {
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
   * @description 字体大小
   * @default 14
   */
  fontSize?: number;
  /**
   * @description 对齐方式
   * @default center
   */
  align?: 'left' | 'right' | 'center';
  /**
   * @description 颜色
   * @default #E0E0E0
   */
  color?: string;
  /**
   * @description 字体颜色
   * @default #E0E0E0
   */
  fontColor?: string;
  /**
   * @description 类型
   * @default solid
   */
  type?: 'solid' | 'dotted' | 'dashed';
  /**
   * @description 宽度
   * @default 1px
   */
  thickness?: string;
  /**
   * @description 是否为竖线
   * @default false
   */
  vertical?: boolean;
}

export type { DividerProps };

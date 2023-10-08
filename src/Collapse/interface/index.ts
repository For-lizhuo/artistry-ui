import { CSSProperties, ReactNode } from 'react';

export interface CollapseProps {
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
   * @description Collapse头部内容
   */
  header?: ReactNode;
  /**
   * @description 是否显示
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * @description 颜色
   * @default 'grey'
   */
  color?: string;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 折叠或展开时候触发的回调
   */
  onChange?: (openState: boolean) => void;
}

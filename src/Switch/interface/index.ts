import { CSSProperties } from 'react';

export interface SwitchProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 组件大小
   * @default 24px
   */
  size?: string;
  /**
   * @description 选中的颜色
   * @default #FAAF00
   */
  checkedColor?: string;
  /**
   * @description 未选中的颜色
   * @default #FAAF00
   */
  unCheckedColor?: string;
  /**
   * @description 是否禁用
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * @description 默认值
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * @description 切换的回调
   * @default {}
   */
  handleUpdateChecked?: (state: boolean) => void;
}

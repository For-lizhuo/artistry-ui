import { CSSProperties } from 'react';

export type ColorPickerProps = {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 取色按钮大小
   * @default '20px'
   */
  size?: string;
  /**
   * @description 是否隐藏颜色对应16进制数值
   * @default false
   */
  hideText?: boolean;
  /**
   * @description 是否显示复制按钮
   * @default false
   */
  showCopyBtn?: boolean;
  /**
   * @description 选中颜色的回调
   */
  onChange?: (files: string) => void;
};

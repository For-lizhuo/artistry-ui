import { CSSProperties, ReactNode } from 'react';

export interface InputProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 输入框类型
   * @default 'text'
   */
  type?: 'text' | 'password';
  /**
   * @description 宽度
   */
  width?: string;
  /**
   * @description 高度
   */
  height?: string;
  /**
   * @description 字体大小
   */
  fontSize?: string;
  /**
   * @description 最大输入字数
   */
  maxLength?: number;
  /**
   * @description 是否显示字数
   * @default false
   */
  showCount?: boolean;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 前缀
   */
  prefix?: ReactNode;
  /**
   * @description 后缀
   */
  suffix?: ReactNode;
  /**
   * @description 值
   */
  value?: string;
  /**
   * @description 提示文本
   */
  placeholder?: string;
  /**
   * @description change回调
   */
  onChange?: (text: string) => void;
}

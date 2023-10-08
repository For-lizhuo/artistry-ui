import { CSSProperties } from 'react';

export interface RatingProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description icon大小
   * @default 24px
   */
  size?: string;
  /**
   * @description 是否支持折半
   * @default false
   */
  allowHalf?: boolean;
  /**
   * @description 颜色
   * @default #FAAF00
   */
  color?: string;
  /**
   * @description 图标类型
   * @default 'star'
   */
  variant?: 'star' | 'heart' | 'fire';
  /**
   * @description 是否禁用
   * @default 'false'
   */
  disabled?: boolean;
  /**
   * @description 默认值
   * @default 0
   */
  defaultValue?: number;
  /**
   * @description 评分的回调
   * @default {}
   */
  handleRatingCallback?: (value?: number) => void;
}

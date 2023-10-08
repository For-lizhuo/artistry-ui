import { CSSProperties } from 'react';

export interface SwiperProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 图片列表
   * @default []
   */
  imgList: Array<string>;
  /**
   * @description 轮播图宽度
   * @default 400px
   */
  width?: string;
  /**
   * @description 轮播图高度
   * @default 240px
   */
  height?: string;
  /**
   * @description 自动播放
   * @default false
   */
  autoPlayer?: boolean;
  /**
   * @description 展示小圆点
   * @default false
   */
  showRoundDot?: boolean;
  /**
   * @description 隐藏切换按钮
   * @default false
   */
  hideSwitchBtn?: boolean;
  /**
   * @description 自动播放间隔
   * @default 2000
   */
  interval?: number;
  /**
   * @description 图片填充方式
   * @default 'fill'
   */
  objectFit?: 'fill' | 'cover' | 'contain' | 'none' | 'scale-down';
}

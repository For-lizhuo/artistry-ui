import { CSSProperties, ReactNode } from 'react';

export interface AvatarProps {
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 头像自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 头像图片url
   */
  src?: string;
  /**
   * @description 头像大小
   * @default '40px'
   */
  size?: string;
  /**
   * @description 头像形状
   * @default 'circle'
   */
  shape?: 'circular' | 'rounded' | 'square';
  /**
   * @description 头像背景颜色
   * @default '#BDBDBD'
   */
  bgColor?: string;
  /**
   * @description src加载失败显示的内容
   */
  fallback?: ReactNode;
  /**
   * @description 图片内容如何与尺寸相适应
   * @default 'fill''
   */
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
}

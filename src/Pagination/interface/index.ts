import { CSSProperties } from 'react';

export interface PaginationProps {
  /**
   * @description 自定义类s
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
   * @default '16px'
   */
  size?: string;
  /**
   * @description 默认选中的页
   * @default 1
   */
  defaultPage?: number;
  /**
   * @description 是否隐藏下一页按钮
   * @default false
   */
  hideNextButton?: boolean;
  /**
   * @description 是否隐藏上一页按钮
   * @default false
   */
  hidePrevButton?: boolean;
  /**
   * @description 是否显示首页按钮
   * @default false
   */
  showFirstButton?: boolean;
  /**
   * @description 是否显示末页按钮
   * @default false
   */
  showLastButton?: boolean;
  /**
   * @description 形状
   * @default 'circular'
   */
  shape?: 'circular' | 'rounded';
  /**
   * @description 显示当前页前后的页数
   * @default 1
   */
  siblingCount?: number;
  /**
   * @description 在开头和结尾默认显示的页数
   * @default 1
   */
  boundaryCount?: number;
  /**
   * @description 总页数
   * @default 10
   */
  count?: number;
  /**
   * @description 种类
   * @default 'text'
   */
  variant?: 'outlined' | 'text';
  /**
   * @description 页数修改的回调
   */
  onChange?: (page: number) => any;
}

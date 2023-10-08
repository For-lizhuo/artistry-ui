import { CSSProperties, ReactNode } from 'react';

export type UploadProps = {
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
   * @description 是否支持多选文件
   * @default false
   */
  multiple?: boolean;
  /**
   * @description 是否支持拖拽上传
   * @default false
   */
  draggable?: boolean;
  /**
   * @description 是否显示文件详情
   * @default false
   */
  hideFilesInfo?: boolean;
  /**
   * @description 是否支持选中文件夹
   * @default false
   */
  directory?: boolean;
  /**
   * @description 选中文件的回调
   */
  onChange?: (files: File[]) => void;
};

import { CopyFilled, CopyOutlined } from '@ant-design/icons';
import React, { memo, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useEyeDropper from 'use-eye-dropper';
import { ColorPickerProps } from './interface';
import { ColorPickerStyle } from './style';

const defaultProps = {
  hideText: false,
  showCopyBtn: false,
  size: '28px',
};

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  const {
    style,
    className,
    onChange,
    hideText = defaultProps.hideText,
    size = defaultProps.size,
    showCopyBtn = defaultProps.showCopyBtn,
  } = props;
  const propsWithDefault = { size };
  const { open } = useEyeDropper();
  const [color, setColor] = useState('#1976D2');
  const [copied, setCopied] = useState(false);
  const handleClickEvent = () => {
    const openPicker = async () => {
      try {
        const color = await open();
        setColor(color.sRGBHex);
        setCopied(false);
        if (onChange) {
          onChange(color.sRGBHex);
        }
      } catch (e) {}
    };
    openPicker();
  };
  return (
    <ColorPickerStyle
      style={style}
      color={color}
      props={propsWithDefault}
      className={className}
    >
      <div className="color-button" onClick={handleClickEvent}></div>
      {hideText || <div className="color-text">{color}</div>}
      {showCopyBtn && (
        <div className="copy">
          <CopyToClipboard text={color} onCopy={() => setCopied(true)}>
            {copied ? <CopyFilled /> : <CopyOutlined />}
          </CopyToClipboard>
        </div>
      )}
    </ColorPickerStyle>
  );
};

export default memo(ColorPicker);

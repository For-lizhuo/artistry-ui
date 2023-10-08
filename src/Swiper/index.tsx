import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { memo, useEffect, useState } from 'react';
import { SwiperProps } from './interface';
import { DotStyle, ImgStyle, SwiperStyle } from './style';

const defaultProps = {
  width: '450px',
  height: '250px',
  autoPlayer: false,
  showRoundDot: false,
  hideSwitchBtn: false,
  interval: 2000,
  objectFit: 'fill' as const,
};

const Swiper: React.FC<SwiperProps> = (props) => {
  const {
    style,
    className,
    imgList,
    width = defaultProps.width,
    height = defaultProps.height,
    autoPlayer = defaultProps.autoPlayer,
    interval = defaultProps.interval,
    showRoundDot = defaultProps.showRoundDot,
    objectFit = defaultProps.objectFit,
    hideSwitchBtn = defaultProps.hideSwitchBtn,
  } = props;
  const propsWithDefault = {
    width,
    height,
    autoPlayer,
    interval,
    objectFit,
    hideSwitchBtn,
  };
  const [display, setDisplay] = useState(0);
  const [transition, setTransition] = useState('500ms linear all');
  const handleClickToLeftEvent = () => {
    setTransition('500ms linear all');
    setDisplay((prevState) => prevState - 1);
    if (display === 0) {
      setTimeout(() => {
        setTransition('none');
        setDisplay(imgList.length - 1);
      }, 500);
    }
  };
  const handleClickToRightEvent = () => {
    setTransition('500ms linear all');
    setDisplay((prevState) => prevState + 1);
    if (display === imgList.length - 1) {
      setTimeout(() => {
        setTransition('none');
        setDisplay(0);
      }, 500);
    }
  };
  const handledClickDot = (index: number) => {
    setDisplay(index);
  };
  useEffect(() => {
    if (autoPlayer) {
      const timeId = setInterval(handleClickToRightEvent, interval);
      return () => clearInterval(timeId);
    }
  }, [display]);
  return (
    <SwiperStyle
      style={style}
      className={className}
      props={propsWithDefault}
      display={display}
      transition={transition}
    >
      <div className="container">
        <div className="imgList">
          <ImgStyle key={-1} src={imgList.at(-1)} props={propsWithDefault} />
          {imgList.map((value, index) => (
            <ImgStyle key={index} src={value} props={propsWithDefault} />
          ))}
          <ImgStyle
            key={imgList.length}
            src={imgList.at(0)}
            props={propsWithDefault}
          />
        </div>
        {hideSwitchBtn || (
          <>
            <div className="to-left" onClick={handleClickToLeftEvent}>
              <LeftOutlined />
            </div>
            <div className="to-right" onClick={handleClickToRightEvent}>
              <RightOutlined />
            </div>
          </>
        )}
        {showRoundDot && (
          <div className="dotList">
            {imgList.map((value, index) => (
              <DotStyle
                key={index}
                selected={
                  display === index ||
                  (display === -1 && index === imgList.length - 1) ||
                  (display === imgList.length && index === 0)
                }
                onClick={() => handledClickDot(index)}
              />
            ))}
          </div>
        )}
      </div>
    </SwiperStyle>
  );
};

export default memo(Swiper);

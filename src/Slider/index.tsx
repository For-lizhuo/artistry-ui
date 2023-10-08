import { throttle } from 'artistry-ui/utils';
import React, {
  MouseEventHandler,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SliderProps } from './interface';
import { SliderStyle } from './style';

const defaultProps = {
  width: '200px',
  thickness: '8px',
  color: '#1976D2',
  labelDisplay: false,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  defaultValue: 50,
};

const Slider: React.FC<SliderProps> = (props) => {
  const {
    style,
    className,
    onChange,
    width = defaultProps.width,
    thickness = defaultProps.thickness,
    min = defaultProps.min,
    max = defaultProps.max,
    color = defaultProps.color,
    step = defaultProps.step,
    labelDisplay = defaultProps.labelDisplay,
    disabled = defaultProps.disabled,
    defaultValue = defaultProps.defaultValue,
  } = props;
  const propsWithDefault = { color, thickness, step, disabled, width };
  const [percent, setPercent] = useState(() => {
    return (100 * (defaultValue - min)) / (max - min);
  });
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  let widthRef = useRef(0);
  let leftRef = useRef(0);
  const handleClickEvent: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (disabled) return;
    const clickX = e.clientX - leftRef.current;
    let newPercent =
      Math.round(
        ((clickX / widthRef.current) * 100) / (100 / ((max - min) / step)),
      ) *
      (100 / ((max - min) / step));
    if (percent !== newPercent) {
      setPercent(newPercent);
      return onChange && onChange(newPercent);
    }
  };
  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (disabled) return;
    setIsDragging(true);
  };
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = throttle((e) => {
    if (!isDragging) return;
    const clickX = e.clientX - leftRef.current;
    let newPercent: number;
    if (e.clientX <= leftRef.current) newPercent = 0;
    else if (e.clientX >= leftRef.current + widthRef.current) newPercent = 100;
    else
      newPercent =
        Math.round(
          ((clickX / widthRef.current) * 100) / (100 / ((max - min) / step)),
        ) *
        (100 / ((max - min) / step));
    if (percent !== newPercent) {
      setPercent(newPercent);
      return onChange && onChange(newPercent);
    }
  }, 50);
  const handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };
  useEffect(() => {
    const rect = (containerRef.current as any).getBoundingClientRect();
    widthRef.current = rect.width;
    leftRef.current = rect.left;
  }, []);
  return (
    <SliderStyle
      style={style}
      className={className}
      props={propsWithDefault}
      percent={percent}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseUp={(e) => handleMouseUp(e)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <div
        className="container"
        onClick={(e) => handleClickEvent(e)}
        ref={containerRef}
      ></div>
      <div className="value" onClick={(e) => handleClickEvent(e)}>
        <div className="circle" onMouseDown={(e) => handleMouseDown(e)}>
          {labelDisplay && (
            <div className="label-container">
              <div className="label">
                {Math.round((percent * (max - min)) / 100) + min}
              </div>
            </div>
          )}
        </div>
      </div>
    </SliderStyle>
  );
};

export default memo(Slider);
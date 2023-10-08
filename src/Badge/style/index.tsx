import { styled } from 'styled-components';
import { BadgeProps } from '../interface';

type PropsType = Pick<Required<BadgeProps>,'fontSize' | 'color'>;

export const BadgeStyle = styled.div<{ props: PropsType }>`
  position: relative;
  width: fit-content;
  height: fit-content;
  .dot,
  .standard {
    background-color: ${(props) => props.props.color};
    position: absolute;
    top: 0;
    right: 0;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translate(75%, -25%);
  }
  .standard {
    width: fit-content;
    height: fit-content;
    min-width: ${(props) => props.props.fontSize};
    font-size: ${(props) => props.props.fontSize};
    border-radius: ${(props) => props.props.fontSize};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(75%, -25%);
  }
  .content {
    width: fit-content;
    height: ${(props) => props.props.fontSize};
    color: white;
    text-align: center;
    transform: scale(0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  //过渡动画
  .standard-enter,
  .dot-enter {
    transform: scale(0) translate(75%, -25%);
    opacity: 0;
  }
  .standard-enter-active,
  .dot-enter-active {
    transform: scale(1) translate(75%, -25%);
    opacity: 1;
    transition: all 0.2s;
  }
  .standard-enter-done,
  .dot-enter-done {
    transform: scale(1) translate(75%, -25%);
    opacity: 1;
  }
  .standard-exit,
  .dot-exit {
    transform: scale(1) translate(75%, -25%);
    opacity: 1;
  }
  .standard-exit-active,
  .dot-exit-active {
    transform: scale(0) translate(75%, -25%);
    opacity: 0;
    transition: all 0.2s;
  }
  .standard-exit-done,
  .dot-exit-done {
    transform: scale(0) translate(75%, -25%);
    opacity: 0;
  }
`;

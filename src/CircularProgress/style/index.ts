import { styled } from 'styled-components';
import { CircularProgressProps } from '../interface';

type PropsType = Pick<
  Required<CircularProgressProps>,
  'size' | 'thickness' | 'color' | 'value' | 'variant'
>;
export const CircularProgressStyle = styled.div<{ props: PropsType }>`
  width: ${(props) => props.props.size + 'px'};
  height: ${(props) => props.props.size + 'px'};
  background:${(props)=>`conic-gradient(${props.props.color} ${props.props.value}%, transparent 0%)`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(props) =>
    props.props.variant === 'indeterminate'
      ? 'circular-progress-loading 0.6s infinite linear'
      : 'none'};
  @keyframes circular-progress-loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .inner {
    width: ${(props) => props.props.size - props.props.thickness*2 + 'px'};
    height: ${(props) =>
      props.props.size - props.props.thickness*2 + 'px'};
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .label {
    overflow: hidden;
  }
`;

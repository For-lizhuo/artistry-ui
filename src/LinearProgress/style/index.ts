import { styled } from 'styled-components';
import { LinearProgressProps } from '../interface';

export const LinearProgressColor = {
  success: '#2E7D32',
  primary: '#1976D2',
  secondary: '#9C27B0',
  error: '#FB7185',
};

type PropsType = Pick<
  Required<LinearProgressProps>,
  'thickness' | 'color' | 'value' | 'variant' | 'buffer'
>;
export const LinearProgressStyle = styled.div<{ props: PropsType }>`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .progress {
    position: relative;
    border-radius: 10px;
    flex: 1;
    height: ${(props) => props.props.thickness};
    overflow: hidden;
  }
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background-color: ${(props) => props.props.color};
    opacity: 0.2;
    height: 100%;
    z-index: 1;
  }
  .buffer {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => `${props.props.buffer}%`};
    max-width: 100%;
    background-color: ${(props) => props.props.color};
    opacity: 0.5;
    height: 100%;
    z-index: 2;
  }
  .value {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.props.color};
    width: ${(props) => `${props.props.value}%`};
    height: 100%;
    z-index: 3;
    animation: ${(props) =>
      props.props.variant === 'indeterminate'
        ? `linear-progress-loading 2s ease-in-out infinite`
        : `none`};
    @keyframes linear-progress-loading {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(200%);
      }
    }
  }
  .label {
    flex-basis: content;
    padding: 0 10px;
    line-height: ${(props) => props.props.thickness};
    text-align: center;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

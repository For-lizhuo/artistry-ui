import { multiplyCssLength } from 'artistry-ui/utils';
import { styled } from 'styled-components';
import { SliderProps } from '../interface';

type PropsType = Pick<
  Required<SliderProps>,
  'thickness' | 'color' | 'width' | 'disabled'
>;
export const SliderStyle = styled.div<{ props: PropsType; percent: number }>`
  width: ${(props) => props.props.width};
  height: ${(props) => multiplyCssLength(props.props.thickness, 3)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.props.disabled ? 'not-allowed' : 'pointer')};
  .container,
  .value {
    width: ${(props) => props.props.width};
    height: ${(props) => props.props.thickness};
    background-color: ${(props) => props.props.color};
    border-radius: ${(props) => props.props.thickness};
  }
  .container {
    opacity: 0.25;
  }
  .value {
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => `${props.percent}%`};
    max-width: 100%;
    z-index: 1;
    transform: translateY(100%);
  }
  .circle {
    position: absolute;
    width: ${(props) => props.props.thickness};
    height: ${(props) => props.props.thickness};
    box-sizing:border-box;
    background-color: white;
    border: 1px solid;
    border-color: ${(props) => props.props.color};
    border-radius: 50%;
    top: 0;
    right: 0;
    transform: scale(3) translateX(50%);
  }
  .label-container {
    padding: 5px 10px 10px 10px;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 80%,
      60% 80%,
      50% 100%,
      40% 80%,
      0 80%
    );
    width: fit-content;
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: grey;
    color: white;
    font-size: 10px;
    transform: scale(0.333) translateX(-150%) translateY(5px);
  }
`;

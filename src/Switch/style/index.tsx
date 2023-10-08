import { multiplyCssLength } from 'artistry-ui/utils';
import { styled } from 'styled-components';
import { SwitchProps } from '../interface';

type PropsType = Pick<
  Required<SwitchProps>,
  'size' | 'checkedColor' | 'unCheckedColor' | 'disabled'
>;
export const SwitchStyle = styled.div<{ props: PropsType; checked: boolean }>`
  height: ${(props) => props.props.size};
  width: ${(props) => multiplyCssLength(props.props.size, 2)};
  box-sizing: content-box;
  padding: 1px;
  display: flex;
  background-color: ${(props) =>
    props.checked
      ? `${props.props.checkedColor}`
      : `${props.props.unCheckedColor}`};
  border-radius: ${(props) => multiplyCssLength(props.props.size, 1)};
  opacity: ${(props) => (props.props.disabled ? '0.5' : '1')};
  &:hover {
    cursor: ${(props) => (props.props.disabled ? 'not-allowed' : 'pointer')};
  }
  .circle {
    height: ${(props) => props.props.size};
    width: ${(props) => props.props.size};
    background-color: white;
    border-radius: 50%;
    transform: ${(props) =>
      props.checked ? `translate(${props.props.size})` : `none`};
  }
  //过渡动画
  .circle-enter {
    transform: translate(0);
  }
  .circle-enter-active {
    transform: ${(props) => `translate(${props.props.size})`};
    transition: all 0.2s;
  }
  .circle-enter-done {
    transform: ${(props) => `translate(${props.props.size})`};
  }
  .circle-exit {
    transform: ${(props) => `translate(${props.props.size})`};
  }
  .circle-exit-active {
    transform: translate(0);
    transition: all 0.2s;
  }
  .circle-exit-done {
    transform: translate(0);
  }
`;

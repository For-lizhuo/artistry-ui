import styled from 'styled-components';
import { InputProps } from '../interface';

type PropsType = Pick<
  Required<InputProps>,
  'width' | 'height' | 'disabled' | 'fontSize'
>;

export const InputStyle = styled.div<{
  props: PropsType;
  mouseEnter: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.props.fontSize};
  min-width: fit-content;
  height: ${(props) => props.props.height};
  box-sizing: border-box;
  padding: 5px 0;
  border: 1px solid;
  border-radius: 6px;
  border-color: ${(props) =>
    props.mouseEnter && !props.props.disabled ? '#1976d2' : '#D9D9D9'};
  color: ${(props) => (props.props.disabled ? `#B8B8B8` : `#696969`)};
  background-color: ${(props) =>
    props.props.disabled ? `#F5F5F5` : `transparent`};
  &:hover {
    cursor: ${(props) => (props.props.disabled ? `not-allowed` : `default`)};
  }
  .prefix,
  .suffix {
    height: ${(props) => props.props.fontSize};
    font-size: ${(props) => props.props.fontSize};
    line-height: ${(props) => props.props.fontSize};
    flex-basis: content;
  }
  .prefix {
    margin-left: 5px;
  }
  .suffix {
    margin-right: 5px;
  }
  //隐藏小眼睛
  input[type='password']::-ms-reveal {
    display: none;
  }
  .input {
    margin: 0 5px;
    border: none;
    outline: none;
    width: ${(props) => props.props.width};
    height: ${(props) => props.props.fontSize};
    line-height: ${(props) => props.props.fontSize};
    font-size: ${(props) => props.props.fontSize};
    box-sizing: border-box;
    background-color: ${(props) =>
      props.props.disabled ? `F5F5F5` : `transparent`};
    &:hover {
      cursor: ${(props) => (props.props.disabled ? `not-allowed` : `text`)};
    }
    &::placeholder {
      color: gray; /* 设置颜色 */
      font-size: ${(props) => props.props.fontSize};
      line-height: ${(props) => props.props.fontSize};
    }
  }
  .eye-icon {
    font-size: ${(props) => props.props.fontSize};
    &:hover {
      cursor: ${(props) => (props.props.disabled ? `not-allowed` : `pointer`)};
    }
  }
  .count{
    height: ${(props) => props.props.fontSize};
    font-size: ${(props) => props.props.fontSize};
    line-height: ${(props) => props.props.fontSize};
    margin-right:5px;
  }
`;

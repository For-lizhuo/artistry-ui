import { styled } from 'styled-components';
import { CollapseProps } from '../interface';

type PropsType = Pick<Required<CollapseProps>, 'color' | 'disabled'>;

export const CollapseStyle = styled.div<{ props: PropsType }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid;
  border-color: ${(props) => props.props.color};
  border-radius: 5px;
  padding: 0 20px;
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    cursor: ${(props) => (props.props.disabled ? `not-allowed` : `pointer`)};
  }
  .divider {
    width: 100%;
    border-top: 1px solid;
    border-color: ${(props) => props.props.color};
    box-sizing: border-box;
  }
  .children {
    margin: 20px 0;
  }
  .icon {
    font-size: 16px;
    color: ${(props) => props.props.color};
  }
  //过渡动画
  .icon-enter {
    transform: rotate(0deg);
  }
  .icon-enter-active {
    transform: rotate(90deg);
    transition: all 0.5s;
  }
  .icon-enter-done {
    transform: rotate(90deg);
  }
  .icon-exit {
    transform: rotate(90deg);
  }
  .icon-exit-active {
    transform: rotate(0deg);
    transition: all 0.5s;
  }
  .icon-exit-done {
    transform: rotate(0deg);
  }
  .divider-enter {
    opacity: 0;
  }
  .divider-enter-active {
    opacity: 1;
    transition: all 0.5s;
  }
  .divider-enter-done {
    opacity: 1;
  }
  .children-container-enter {
    opacity: 0;
    height: 0;
  }
  .children-container-enter-active {
    height: 60px;
    transition: all 0.5s;
  }
  .children-container-enter-done {
    height: 60px;
    opacity: 1;
  }
  .children-container-exit {
    height: 60px;
    opacity: 1;
  }
  .children-container-exit-active {
    height: 0;
    transition: all 0.5s;
  }
  .children-container-exit-done {
    height: 0;
    opacity: 0;
  }
`;

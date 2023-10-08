import { styled } from 'styled-components';
import { SelectProps } from '../interface';

type PropsType = Pick<
  Required<SelectProps>,
  'width' | 'height' | 'fontSize' | 'color' | 'searchable'
>;
export const SelectStyle = styled.div<{ props: PropsType }>`
  width: ${(props) => props.props.width};
  min-height: fit-content;
  height: ${(props) => props.props.height};
  position: relative;
  background-color: white;
  .title {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(1rem, -50%);
    font-size: 12px;
    padding: 0 0.5rem;
    width: fit-content;
    max-width: ${(props) => props.props.width};
    overflow: hidden;
    white-space: nowrap;
    color: ${(props) => props.props.color};
    z-index: 10;
    background-color: inherit;
  }
  .container {
    padding: 0 1rem;
    font-size: ${(props) => props.props.fontSize};
    width: ${(props) => props.props.width};
    height: ${(props) => props.props.height};
    border-radius: 5px;
    border: solid 1px;
    border-color: ${(props) => props.props.color};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .label {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    padding: 0 0.5rem;
    color: #212121;
    text-overflow: ellipsis;
  }
  .icon {
    flex-basis: content;
    color: #757575;
  }
  .options {
    position: absolute;
    top: ${(props) => props.props.height};
    left: 0;
    padding-bottom: 0.2rem;
    width: ${(props) => props.props.width};
    height: fit-content;
    max-height: 200px;
    overflow-y: auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px,
      rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
    font-size: ${(props) => props.props.fontSize};
    background-color: white;
    border-radius: 4px;
    z-index: 10;
  }
  .option,
  .option-chosen {
    padding: 1rem 1.5rem 1rem 1.5rem;
    overflow-x: hidden;
    text-overflow: ellipsis;
    &:hover {
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
  .option-chosen {
    background-color: #edf4fb !important;
  }
  .searchBox {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 100%;
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: ${(props) => props.props.fontSize};
    }
  }
  //过渡动画
  .icon-enter {
    transform: rotate(0);
  }
  .icon-enter-active {
    transform: rotate(180deg);
    transition: all 0.5s;
  }
  .icon-enter-done {
    transform: rotate(180deg);
  }
  .icon-exit {
    transform: rotate(180deg);
  }
  .icon-exit-active {
    transform: rotate(0);
    transition: all 0.5s;
  }
  .icon-exit-done {
    transform: rotate(0);
  }
`;

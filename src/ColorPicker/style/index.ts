import { multiplyCssLength } from 'artistry-ui/utils';
import { styled } from 'styled-components';
import { ColorPickerProps } from '../interface';

type PropsType = Pick<Required<ColorPickerProps>, 'size'>;

export const ColorPickerStyle = styled.div<{ props: PropsType; color: string }>`
  width: fit-content;
  height: fit-content;
  border-radius: 6px;
  background-color: white;
  border: 1px solid #d9d9d9;
  padding: 4px;
  display: flex;
  flex-direction: row;
  .color-button {
    width: ${(props) => props.props.size};
    height: ${(props) => props.props.size};
    background-color: ${(props) => props.color};
    border-radius: inherit;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    &:hover {
      cursor: pointer;
    }
  }
  .color-text {
    font-size: ${(props) => multiplyCssLength(props.props.size, 0.6)};
    line-height: ${(props) => props.props.size};
    color: #696969;
    margin: 0 10px;
    text-align: center;
  }
  .copy {
    font-size: ${(props) => multiplyCssLength(props.props.size, 0.6)};
    line-height: ${(props) => props.props.size};
    color: #1976d2;
    cursor: pointer;
    margin-left: 5px;
  }
`;

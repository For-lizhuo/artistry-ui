import styled from 'styled-components';
import { DividerProps } from '../interface';

type PropsType = Pick<
  Required<DividerProps>,
  | 'fontSize'
  | 'align'
  | 'color'
  | 'fontColor'
  | 'type'
  | 'thickness'
  | 'vertical'
>;

export const DividerStyle = styled.div<{
  props: PropsType;
}>`
  display: flex;
  flex-direction: ${(props) => (props.props.vertical ? 'column' : 'row')};
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.props.fontColor};
  .left,
  .right {
    border-top: ${(props) =>
      props.props.vertical ? `none` : `${props.props.thickness} ${props.props.type}`};
    border-left: ${(props) =>
      !props.props.vertical ? `none` : `${props.props.thickness} ${props.props.type}`};
    border-color: ${(props) => props.props.color};
  }
  .left {
    flex: 1;
  }
  .center {
    flex-basis: content;
    padding: ${(props) => (props.props.vertical ? '10px' : '0 10px')};
    font-size: ${(props) => props.props.fontSize + 'px'};
  }
  .right {
    flex: ${(props) =>
      props.props.align === 'left'
        ? 10
        : props.props.align === 'center'
        ? 1
        : 0.1};
  }
`;

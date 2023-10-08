import { styled } from 'styled-components';
import { TabItemProps, TabsProps } from '../interface';

type TabItemPropsType = Pick<Required<TabItemProps>, 'disabled'>;

type TabsPropsType = Pick<
  Required<TabsProps>,
  'color' | 'vertical' | `centered`
>;

export const TabsStyle = styled.div<{ props: TabsPropsType }>`
  font-size: 16px;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.props.vertical ? `row` : `column`)};
  .labelList {
    display: flex;
    flex-direction: ${(props) => (props.props.vertical ? `column` : `row`)};
    overflow-x: ${(props) => (props.props.vertical ? `hidden` : `auto`)};
    overflow-y: ${(props) => (props.props.vertical ? `auto` : `hidden`)};
    white-space: nowrap;
    justify-content: ${(props) => (props.props.centered ? `center` : `start`)};
  }
  .content {
    padding: 10px;
  }
  .divider {
    border-top: ${(props) => (props.props.vertical ? `none` : `1px solid`)};
    border-left: ${(props) => (!props.props.vertical ? `none` : `1px solid`)};
    border-color: #e0e0e0;
  }
`;

export const TabItemStyle = styled.div<{
  props: TabItemPropsType;
  selected: boolean;
  selectedColor: string;
  vertical: boolean;
}>`
  padding: 10px;
  color: ${(props) => (props.selected ? `${props.selectedColor}` : `inherit`)};
  border-bottom: ${(props) => (props.vertical ? `none` : `2px solid`)};
  border-right: ${(props) => (!props.vertical ? `none` : `2px solid`)};
  border-color: ${(props) =>
    props.selected ? `${props.selectedColor}` : `transparent`};
  opacity: ${(props) => (props.props.disabled ? `0.5` : `1`)};
  &:hover {
    cursor: ${(props) => (props.props.disabled ? `not-allowed` : `pointer`)};
  }
`;

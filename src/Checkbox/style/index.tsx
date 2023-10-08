import { styled } from 'styled-components';
import { CheckboxGroupProps, CheckboxProps } from '../interface';

type CheckboxGroupPropsType = Pick<Required<CheckboxGroupProps>, 'direction'>;
type CheckboxPropsType = Pick<
  Required<CheckboxProps>,
  'color' | 'disabled' | 'size'
>;
export const CheckboxGroupStyle = styled.div<{ props: CheckboxGroupPropsType }>`
  display: flex;
  flex-direction: ${(props) => props.props.direction};
  justify-content: center;
  align-items: center;
`;
export const CheckboxStyle = styled.div<{ props: CheckboxPropsType }>`
  width: fit-content;
  height: fit-content;
  font-size: ${(props) => props.props.size};
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${(props) => (props.props.disabled ? '0.5' : '1')};
  &:hover {
    cursor: ${(props) => (props.props.disabled ? 'not-allowed' : 'pointer')};
  }
  .checked,
  .unChecked,
  .indeterminate {
    width: ${(props) => props.props.size};
    height: ${(props) => props.props.size};
    margin-right: 5px;
    border-radius: 20%;
    border: 2px solid;
    transform: scale(0.9);
  }
  .checked,
  .indeterminate {
    background-color: ${(props) => props.props.color};
    border-color: ${(props) => props.props.color};
    line-height: ${(props) => props.props.size};
    color: white;  
  }
  .unChecked {
    border-color: grey;
  }
`;

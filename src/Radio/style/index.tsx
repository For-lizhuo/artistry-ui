import { styled } from 'styled-components';
import { RadioGroupProps, RadioProps } from '../interface';

type RadioGroupPropsType = Pick<Required<RadioGroupProps>, 'direction'>;
type RadioPropsType = Pick<Required<RadioProps>, 'color' | 'disabled' | 'size'>;
export const RadioGroupStyle = styled.div<{ props: RadioGroupPropsType }>`
  display: flex;
  flex-direction: ${(props) => props.props.direction};
  justify-content: center;
  align-items: center;
`;
export const RadioStyle = styled.div<{ props: RadioPropsType }>`
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
  .unChecked {
    width: ${(props) => props.props.size};
    height: ${(props) => props.props.size};
    margin-right: 5px;
    border-radius: 50%;
    border: 2px solid;
  }
  .unChecked {
    border-color: grey;
  }
  .checked {
    border-color: ${(props) => props.props.color};
    position: relative;
    &::after {
      content: '';
      width: ${(props) => props.props.size};
      height: ${(props) => props.props.size};
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${(props) => props.props.color};
      border-radius: 50%;
      transform: scale(0.6);
    }
  }
`;

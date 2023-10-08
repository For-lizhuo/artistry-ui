import styled from 'styled-components';
import { ButtonProps } from '../interface';

const ButtonColor = {
  info: '#9CA3AF',
  error: '#FB7185',
  success: '#4ADE80',
  primary: '#2DD4BF',
  warning: '#FBBF24',
};

type PropsType = Pick<
  Required<ButtonProps>,
  | 'width'
  | 'height'
  | 'circle'
  | 'dashed'
  | 'theme'
  | 'variant'
  | 'disabled'
  | 'href'
>;

export const ButtonStyle = styled.div<{
  props: PropsType;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: ${(props) => props.props.width};
  min-width: fit-content;
  height: ${(props) =>props.props.height};
  min-height: fit-content;
  border-width: 1.5px;
  border-radius: ${(props) => (props.props.circle ? `50%` : `10px`)};
  border-style: ${(props) =>
    props.props.dashed
      ? `dashed`
      : props.props.variant === 'text'
      ? 'none'
      : `solid`};
  border-color: ${(props) => ButtonColor[props.props.theme]};
  background-color: ${(props) =>
    props.props.variant === 'contained'
      ? `${ButtonColor[props.props.theme]}`
      : `white`};
  opacity: ${(props) => (props.props.disabled ? '0.6' : '1')};
  transition: box-shadow 0.5s;
  .button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    font-size: 16px;
    width: inherit;
    cursor: ${(props) => (props.props.disabled ? 'not-allowed' : 'pointer')};
    color: ${(props) =>
      props.props.variant === 'contained'
        ? 'white'
        : `${ButtonColor[props.props.theme]}`};
    text-decoration: ${(props) => (props.props.href ? 'underline' : 'none')};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  &:hover {
    cursor: ${(props) => (props.props.disabled ? `not-allowed` : `pointer`)};
    box-shadow: ${(props) =>
      props.props.disabled
        ? `none`
        : `4px 4px 8px rgba(0, 0, 0, 0.3)`};
  }
`;

export const Loading = styled.div``;

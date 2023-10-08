import { styled } from 'styled-components';
import { PaginationProps } from '../interface';

type PropsType = Pick<
  Required<PaginationProps>,
  'color' | 'variant' | 'size' | 'shape' | 'count'
>;
export const PaginationStyle = styled.div<{ props: PropsType; page: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    box-sizing: border-box;
    width: ${(props) => props.props.size};
    height: ${(props) => props.props.size};
    font-size: ${(props) => `calc(${props.props.size}*0.5)`};
    border-radius: ${(props) =>
      props.props.shape === 'circular' ? `50%` : `10%`};
    text-align: center;
    line-height: ${(props) => props.props.size};
    margin: 0 2px;
  }
  .first,
  .prev,
  .next,
  .last {
    border: ${(props) =>
      props.props.variant === 'outlined' ? `1px solid` : `none`};
    border-color: #c4c4c4;
  }
  .first,
  .prev {
    cursor: ${(props) => (props.page === 1 ? `default` : `pointer`)};
    opacity: ${(props) => (props.page === 1 ? `0.4` : `1`)};
  }
  .last,
  .next {
    cursor: ${(props) =>
      props.page === props.props.count ? `default` : `pointer`};
    opacity: ${(props) => (props.page === props.props.count ? `0.4` : `1`)};
  }
`;
export const PageButton = styled.div<{ props: PropsType; chosen: boolean }>`
  color: ${(props) =>
    props.chosen
      ? props.props.variant === 'outlined'
        ? props.props.color
        : 'white'
      : '#212121'};
  background-color: ${(props) =>
    props.chosen && props.props.variant === 'text'
      ? props.props.color
      : 'transparent'};
  border: ${(props) =>
    props.props.variant === 'outlined' ? `1px solid` : `none`};
  border-color: ${(props) => (props.chosen ? props.props.color : `#C4C4C4`)};
  &:hover {
    background-color: ${(props) =>
      props.chosen && props.props.variant === 'text'
        ? props.props.color
        : '#F5F5F5'};
    cursor: pointer;
  }
`;

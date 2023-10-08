import { styled } from 'styled-components';
import { LinkProps } from '../interface';

type PropsType = Pick<
  Required<LinkProps>,
  'underline' | 'color' | 'disabled' | 'size'
>;
export const LinkStyle = styled.a<{ props: PropsType }>`
  width: fit-content;
  height: fit-content;
  .link,
  .label {
    color: ${(props) => props.props.color};
    font-size: ${(props) => props.props.size};
    border-bottom: ${(props) =>
      props.props.underline === 'always' ? `2px solid !important` : `none`};
    border-color: ${(props) => props.props.color};
  }
  .link {
    transition: padding-bottom 0.1s;
    text-decoration: none;
    &:hover {
      border-bottom: ${(props) =>
        props.props.underline === 'hover' ? `2px solid !important` : `none`};
      padding-bottom: 1px;
    }
  }
  .label {
    opacity: 0.5;
    &:hover {
      cursor: not-allowed;
    }
  }
`;

import { multiplyCssLength } from 'artistry-ui/utils';
import { styled } from 'styled-components';
import { RatingProps } from '../interface';

type PropsType = Pick<
  Required<RatingProps>,
  'size' | 'color' | 'allowHalf' | 'disabled'
>;
export const RatingStyle = styled.div<{ props: PropsType; display: number }>`
  position: relative;
  overflow-x: hidden;
  height: fit-content;
  white-space: nowrap;
  opacity: ${(props) => (props.props.disabled ? `0.5` : `1`)};
  &:hover {
    cursor: ${(props) => (props.props.disabled ? `not-allowed` : `pointer`)};
  }
  .outlined,
  .filled {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: fit-content;
    overflow-y: hidden;
  }
  .outlined {
    width: fit-content;
  }
  .filled {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: ${(props) => multiplyCssLength(props.props.size, props.display)};
    overflow-x: hidden;
  }
  .star-outlined,
  .star-filled {
    width: ${(props) => props.props.size};
    height: fit-content;
    font-size: ${(props) => props.props.size};
    transform: scale(0.8);
    transition: all 0.2s;
  }
  .star-outlined {
    color: #bdbdbd;
  }
  .star-filled {
    color: ${(props) => props.props.color};
    &:hover {
      transform: ${(props) =>
        props.props.disabled ? `scale(0.8)` : `scale(1)`};
    }
  }
`;

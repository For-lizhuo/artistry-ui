import { multiplyCssLength } from 'artistry-ui/utils';
import { styled } from 'styled-components';
import { SwiperProps } from '../interface';

type PropsType = Pick<
  Required<SwiperProps>,
  'autoPlayer' | 'height' | 'width' | 'objectFit' | 'interval'
>;
export const SwiperStyle = styled.div<{
  props: PropsType;
  display: number;
  transition: string;
}>`
  .container {
    width: ${(props) => props.props.width};
    height: ${(props) => props.props.height};
    position: relative;
    overflow-x: hidden;
  }
  .imgList {
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 0;
    left: ${(props) => `${multiplyCssLength(props.props.width, -1)}`};
    display: flex;
    flex-direction: row;
    z-index: 1;
    transform: ${(props) =>
      `translateX(${multiplyCssLength(props.props.width, -props.display)})`};
    transition: ${(props) => props.transition};
  }
  .to-left,
  .to-right {
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    z-index: 2;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: #dcdcdc;
    }
  }
  .to-left {
    top: 50%;
    left: 1%;
    transform: translateY(-50%);
  }
  .to-right {
    top: 50%;
    right: 1%;
    transform: translateY(-50%);
  }
  .dotList {
    display: flex;
    flex-direction: row;
    position: absolute;
    width: ${(props) => props.props.width};
    left: 0;
    bottom: 5px;
    z-index: 2;
    justify-content: center;
  }
`;
export const ImgStyle = styled.img<{ props: PropsType }>`
  width: ${(props) => props.props.width};
  height: ${(props) => props.props.height};
  object-fit: ${(props) => props.props.objectFit};
`;
export const DotStyle = styled.div<{ selected: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.selected ? `#1976D2` : `white`)};
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  margin: 0 5px;
`;

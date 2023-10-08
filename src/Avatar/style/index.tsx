import { styled } from 'styled-components';
import { AvatarProps } from '../interface';

type PropsType = Pick<
  Required<AvatarProps>,
  'shape' | 'size' | 'objectFit' | 'bgColor'
>;

export const AvatarStyle = styled.div<{ props: PropsType }>`
  background-color: ${(props) => props.props.bgColor};
  width: ${(props) => props.props.size};
  height: ${(props) => props.props.size};
  border-radius: ${(props) =>
    props.props.shape === 'circular'
      ? '50%'
      : props.props.shape === 'square'
      ? '0'
      : '4px'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .children,
  .fallback {
    overflow: hidden;
    transform: scale(0.6);
    font-size: ${(props) => props.props.size};
  }
  .img {
    width: 100%;
    height: 100%;
    border-radius: ${(props) =>
      props.props.shape === 'circular'
        ? '50%'
        : props.props.shape === 'square'
        ? '0'
        : '4px'};
    object-fit: ${(props)=>props.props.objectFit};
  }
`;

import { styled } from 'styled-components';
import { AlertProps } from '../interface';

const alertColor = {
  info: { bg: '#E5F6FD', font: '#014361' },
  success: { bg: '#EDF7ED', font: '#3C603E' },
  warning: { bg: '#FFF4E5', font: '#7C5721' },
  error: { bg: '#FDEDED', font: '#763F3E' },
};

type PropsType = Pick<Required<AlertProps>, 'type' | 'closeElement'>;

export const AlertStyle = styled.div<{ props: PropsType }>`
  .alert {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => alertColor[props.props.type].font};
    background-color: ${(props) => alertColor[props.props.type].bg};
    width: 100%;
    height: fit-content;
    min-height: 3rem;
    padding: 1rem 0;
  }
  .alert-icon {
    flex-basis: content;
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }
  .alert-text {
    flex: 1;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
  }
  .alert-title {
    font-weight: bold;
    font-size: 1.6rem;
    padding-bottom: 1rem;
  }
  .alert-content {
  }
  .alert-close {
    width: 2.2rem;
    min-width: fit-content;
    height: 2.4rem;
    padding: 0 0.1rem;
    border-radius: ${(props) => (props.props.closeElement ? '0' : '50%')};
    font-size: 1.6rem;
    margin: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s;
    transition: color 0.5s;
    &:hover {
      cursor: pointer;
      color: ${(props) => (props.props.closeElement ? 'inherit' : 'white')};
      background-color: ${(props) =>
        props.props.closeElement
          ? alertColor[props.props.type].bg
          : alertColor[props.props.type].font};
    }
  }
  //过渡动画
  .alert-exit {
    opacity: 1;
    transform: scale(1);
  }
  .alert-exit-active {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.5s;
  }
  .fade-exit-done {
    opacity: 0;
    transform: scale(0.8);
  }
`;

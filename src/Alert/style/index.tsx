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
    min-height: 30px;
    padding: 10px 0;
  }
  .alert-icon {
    flex-basis: content;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
  .alert-text {
    flex: 1;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
  }
  .alert-title {
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 10px;
  }
  .alert-content {
  }
  .alert-close {
    width: 2.20px;
    min-width: fit-content;
    height: 24px;
    padding: 0 0.10px;
    border-radius: ${(props) => (props.props.closeElement ? '0' : '50%')};
    font-size: 16px;
    margin: 0 20px;
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

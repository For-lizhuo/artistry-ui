import { styled } from 'styled-components';

export const UploadStyle = styled.div`
  display: flex;
  flex-direction: column;
  .children {
    &:hover {
      cursor: pointer;
    }
  }
  .file-list {
    margin-top: 10px;
    width: 100%;
    height: fit-content;
    max-height: 120px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .file-container {
    width: 100%;
    height: 24px;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    font-size: 14px;
    color: grey;
  }
  .file-icon {
    flex-basis: content;
  }
  .file-name {
    flex: 1;
    margin: 0 5px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .file-size {
    flex-basis: content;
    margin-right: 10px;
  }
  .file-delete {
    flex-basis: 18px;
    height: 18px;
    align-self: center;
    line-height: 18px;
    text-align: center;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      color: white;
      background-color: grey;
    }
  }
`;

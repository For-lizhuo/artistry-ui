import { CloseOutlined, FileFilled } from '@ant-design/icons';
import { ByteToOthers } from 'artistry-ui/utils';
import React, {
  ChangeEventHandler,
  DragEventHandler,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import { UploadProps } from './interface';
import { UploadStyle } from './style';

const defaultProps = {
  hideFilesInfo: false,
  multiple: false,
  draggable: false,
  directory: false,
};

const Upload: React.FC<UploadProps> = (props) => {
  const {
    style,
    className,
    onChange,
    children,
    hideFilesInfo = defaultProps.hideFilesInfo,
    multiple = defaultProps.multiple,
    draggable = defaultProps.draggable,
    directory = defaultProps.directory,
  } = props;
  const [files, setFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleDataTransferItemList = async (
    dataTransferItemList: DataTransferItemList,
  ) => {
    let res: File[] = [];
    const handleEntry = async (entry: FileSystemEntry) => {
      if (entry?.isDirectory) {
        const reader = (entry as FileSystemDirectoryEntry).createReader();
        reader.readEntries(async (entries) => {
          const promises = entries.map((entry) => {
            return new Promise<void>((resolve) => {
              handleEntry(entry);
              resolve();
              return;
            });
          });
          await Promise.all(promises);
        });
      } else {
        (entry as FileSystemFileEntry).file((file) => {
          res.push(file);
        });
      }
    };
    const promises = Array.from(dataTransferItemList).map(
      (item) =>
        new Promise<void>((resolve) => {
          let entry = item.webkitGetAsEntry();
          if (entry) {
            handleEntry(entry);
          }
          resolve();
        }),
    );
    await Promise.all(promises);
    return res;
  };
  const handleChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = Array.from(e.target.files as FileList);
    inputRef.current!.value = '';
    setFiles(files);
    if (onChange) {
      onChange(files);
    }
  };
  const handleClickEvent = () => {
    const inputElement = inputRef.current as HTMLInputElement;
    inputElement.click();
  };
  const handleDropEvent: DragEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    if (!draggable) return;
    const dataTransferItemList = e.dataTransfer.items;
    const files = await handleDataTransferItemList(dataTransferItemList);
    setTimeout(() => {
      setFiles(files);
      if (onChange) {
        onChange(files);
      }
    }, 0);
  };
  const handleDelete = (index: number) => {
    const newFiles = files.filter((v, i) => i !== index);
    setFiles(newFiles);
    if (onChange) onChange(newFiles);
  };
  useEffect(() => {
    if (directory) {
      inputRef.current?.setAttribute('webkitdirectory', '');
    }
  }, []);
  return (
    <UploadStyle style={style} className={className}>
      <div
        className="children"
        onClick={handleClickEvent}
        onDragEnter={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDropEvent}
      >
        {children}
      </div>
      {hideFilesInfo===false && files.length > 0 && (
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-container">
              <div className="file-icon">
                <FileFilled />
              </div>
              <div className="file-name">{file.name}</div>
              <div className="file-size">{ByteToOthers(file.size)}</div>
              <div className="file-delete" onClick={() => handleDelete(index)}>
                <CloseOutlined />
              </div>
            </div>
          ))}
        </div>
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={handleChangeEvent}
        style={{ display: 'none' }}
        multiple={multiple}
      ></input>
    </UploadStyle>
  );
};

export default memo(Upload);

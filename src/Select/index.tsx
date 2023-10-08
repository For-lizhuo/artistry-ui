import { CaretDownOutlined } from '@ant-design/icons';
import { debounce } from 'artistry-ui/utils';
import React, { memo, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Option, SelectProps } from './interface';
import { SelectStyle } from './style';

const defaultProps = {
  width: '120px',
  height: '40px',
  fontSize: '16px',
  title: '',
  placeholder: '',
  color: '#1976D2',
  searchable: false,
  label: false,
  options: [],
  defaultOption: {
    label: '',
    value: '',
  },
};

const Select: React.FC<SelectProps> = (props) => {
  const {
    style,
    className,
    handleSelectCallback,
    width = defaultProps.width,
    height = defaultProps.height,
    title = defaultProps.title,
    color = defaultProps.color,
    searchable = defaultProps.searchable,
    fontSize = defaultProps.fontSize,
    options = defaultProps.options,
    defaultOption = defaultProps.defaultOption,
  } = props;
  const [value, setValue] = useState(() => {
    return defaultOption.value;
  });
  const [label, setLabel] = useState(defaultOption.label);
  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState(defaultOption.label);
  const [displayOptions, setDisplayOptions] = useState(options);
  const propsWithDefault = {
    width,
    height,
    fontSize,
    searchable,
    title,
    color,
    options,
    defaultOption,
  };
  function closeOptions() {
    if (showOptions) setShowOptions(false);
  }
  function openOptions() {
    if (!showOptions) setShowOptions(true);
  }
  function select(option: Option) {
    if (searchable) {
      setInputValue(option.label);
    }
    setLabel(option.label);
    setValue(option.value);
    closeOptions();
    if (handleSelectCallback) handleSelectCallback(option.label, option.value);
  }
  const filterOptions = debounce((options: Option[]) => {
    if (!searchable) return;
    setDisplayOptions(
      options.filter(({ label }) => label.includes(inputValue)),
    );
  }, 500);
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    filterOptions(options);
  }, [inputValue]);
  return (
    <SelectStyle
      style={style}
      props={propsWithDefault}
      className={className}
      onClick={openOptions}
      onMouseLeave={closeOptions}
    >
      {title && <div className="title">{title}</div>}
      <div className="container">
        {searchable ? (
          <div className="searchBox">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e)}
            ></input>
          </div>
        ) : (
          <div className="label">{label}</div>
        )}
        <CSSTransition in={showOptions} timeout={500} classNames="icon">
          <div className="icon">
            <CaretDownOutlined />
          </div>
        </CSSTransition>
      </div>
      {showOptions && displayOptions.length > 0 && (
        <div className="options">
          {displayOptions.map((option, index) => (
            <div
              className={
                value === option.value && label === option.label
                  ? 'option-chosen'
                  : 'option'
              }
              key={index}
              onClick={() => select(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </SelectStyle>
  );
};

export default memo(Select);

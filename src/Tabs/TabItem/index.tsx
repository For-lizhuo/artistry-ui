import React, { memo, useContext, useEffect } from 'react';
import { selectedTabContext } from '..';
import { TabItemProps } from '../interface';
import { TabItemStyle } from '../style';

const defaultProps = {
  disabled: false,
};

const TabItem: React.FC<TabItemProps> = (props) => {
  const {
    style,
    children,
    className,
    label,
    uid,
    disabled = defaultProps.disabled,
  } = props;
  const propsWithDefault = { disabled };
  const { dispatch, onChange, selectedUid, selectedColor, vertical } =
    useContext(selectedTabContext);
  const handleClickEvent = () => {
    if (disabled) return;
    dispatch({
      type: 'updateSelected',
      payload: {
        uid,
        children,
      },
    });
    if (onChange) onChange(uid);
  };
  useEffect(() => {
    if (selectedUid === uid) {
      dispatch({
        type: 'updateSelected',
        payload: {
          uid,
          children,
        },
      });
    }
  }, []);
  return (
    <TabItemStyle
      style={style}
      className={className}
      props={propsWithDefault}
      selected={uid === selectedUid}
      selectedColor={selectedColor}
      vertical={vertical}
      onClick={handleClickEvent}
    >
      {label}
    </TabItemStyle>
  );
};

export default memo(TabItem);

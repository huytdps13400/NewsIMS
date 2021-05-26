import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import styles from './styles';

const RadioButton = ({
  data,
  selected,
  setSelected,
  containerStyle,
  itemStyle,
  labelStyle,
  unCheckColor = 'smoke',
  checkedColor = 'green',
}) => {
  const _renderItem = (item, index) => {
    return (
      <Pressable
        key={index}
        style={[styles.itemStyle, itemStyle]}
        activeOpacity={1}
        onPress={() =>
          item.value !== selected && setSelected && setSelected(item.value)
        }>
        <Block row alignCenter>
          <Block
            round={18}
            backgroundColor={unCheckColor}
            alignCenter
            justifyCenter>
            {item.value === selected && (
              <Block round={8} backgroundColor={checkedColor} />
            )}
          </Block>
          <Text marginLeft={10} style={labelStyle}>
            {item.label}
          </Text>
        </Block>
      </Pressable>
    );
  };

  return (
    <Block row style={containerStyle}>
      {data.map(_renderItem)}
    </Block>
  );
};

export default RadioButton;

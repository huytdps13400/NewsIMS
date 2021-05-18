import {Block, Text, Header} from '@components';
import React, {useState} from 'react';
import {Pressable, Image, FlatList} from 'react-native';
import {icons} from '@assets';
import {theme} from '@theme';
import {getSize, width, height} from '@utils/responsive';

const ItemNotification = ({item, onPress, backgroundColor}) => (
  <Pressable onPress={onPress}>
    <Block
      row
      justifyCenter
      padding={16}
      space={'between'}
      borderColor={'#EAEAEA'}
      borderBottomWidth={1}
      style={[backgroundColor]}>
      <Block width={'70%'} marginRight={20}>
        <Text numberOfLines={2} size={17} fontType={'semibold'}>
          {item.title}
        </Text>
        <Text marginTop={14} size={13}>
          {item.date}
        </Text>
      </Block>
      <Block width={'30%'}>
        <Image
          source={{uri: item.image}}
          //   resizeMode="contain"
          style={{
            width: getSize.s(75),
            height: getSize.s(75),
            borderRadius: 5,
          }}
        />
      </Block>
    </Block>
  </Pressable>
);

const Item = React.memo(({data}) => {
  const [selectedId, setSelectedId] = useState(null);
  const _renderItem = ({item, onPress}) => {
    const backgroundColor = item.id === selectedId ? '#fff' : '#F0F1F5';
    return (
      <ItemNotification
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
      />
    );
  };
  return (
    <Block>
      <FlatList
        renderItem={_renderItem}
        data={data}
        keyExtractor={(item, index) => index}
        extraData={selectedId}
      />
    </Block>
  );
});

export default Item;

import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import styles from './styles';

const Item = React.memo(
  ({data, onPress, refreshing, _loadMore, _onRefresh}) => {
    const _renderItem = ({item}) => {
      return (
        <Pressable onPress={onPress}>
          <Block
            row
            alignCenter
            padding={12}
            borderBottomWidth={1}
            space="between"
            borderColor={theme.colors.whiteGray}>
            <Block width={'70%'} marginRight={20}>
              <Text size={17} numberOfLines={2} fontType="semibold">
                {item.title}
              </Text>
              <Text marginTop={14} size={13}>
                {item.date_create}
              </Text>
            </Block>
            <Block>
              <Image
                source={{
                  uri: item.picture
                    ? item.picture
                    : 'https://reactnative.dev/img/tiny_logo.png',
                }}
                style={styles.image}
              />
            </Block>
          </Block>
        </Pressable>
      );
    };

    return (
      <Block flex>
        <FlatList
          renderItem={_renderItem}
          data={data}
          removeClippedSubviews={true}
          onRefresh={_onRefresh}
          onEndReached={_loadMore}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.item_id}
        />
      </Block>
    );
  },
);

export default Item;

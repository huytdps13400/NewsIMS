import {Block, Text} from '@components';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const itemNews = React.memo(
  ({item_id, group_id, image, date_update, title, short, thumbnail, lab}) => {
    const navigation = useNavigation();

    return (
      <Block marginTop={18}>
        <Pressable
          onPress={() => navigation.navigate(routes.NEWS_DETAILS, {item_id})}>
          <Block row>
            <Image
              source={{
                uri: image,
              }}
              style={styles.styleimg}
            />
            <Block flex marginLeft={15}>
              <Text
                numberOfLines={2}
                marginTop={2}
                size={16}
                fontType="semibold">
                {title}
              </Text>
              <Text
                numberOfLines={2}
                marginTop={20}
                color={theme.colors.lightGray}>
                {lab} {date_update}
              </Text>
            </Block>
          </Block>
        </Pressable>
        <Block backgroundColor={theme.colors.smoke} height={1} marginTop={12} />
      </Block>
    );
  },
);

export default itemNews;
